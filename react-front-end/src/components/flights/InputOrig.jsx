import React, { useState, useEffect, useRef } from 'react';

const InputOrig = ({ value, airportData, setOriginCode, fetchDataOrig, setOriginSkyId }) => {
  const [suggestions, setSuggestions] = useState([]);
  const maxSuggestions = 25;
  const inputRef = useRef(null);

  useEffect(() => {
    function handleDocumentClick(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    }

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const onChange = (event) => {
    const rawInputValue = event.target.value
    const inputValue = event.target.value.toLowerCase();
    setOriginCode(rawInputValue);


    const filteredSuggestions = airportData
      .filter((airport) => airport.code.toLowerCase().includes(inputValue))
      .concat(
        airportData.filter((airport) => {
          const codeMatch = airport.code.toLowerCase().includes(inputValue);
          const cityMatch = airport.city && airport.city.toLowerCase().includes(inputValue);
          const countryMatch = airport.country && airport.country.toLowerCase().includes(inputValue);
          const stateMatch = airport.state && airport.state.toLowerCase().includes(inputValue);
          const tzMatch =
            airport.tz &&
            airport.tz.toLowerCase().split('/')[1].includes(inputValue); // Search for the second part of tz
            return !codeMatch && (cityMatch || countryMatch || stateMatch || tzMatch);
          })
      )
      .slice(0, maxSuggestions);

    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = async (code) => {
    setOriginCode(code.toUpperCase());
    setSuggestions([]);

    try{
      const entityId = await fetchDataOrig(code.toUpperCase());
      if (entityId !== null) {
        console.log("Fetched Origin entityId:", entityId);
        setOriginSkyId(entityId);
      } else {
        console.error("No matching entityId found for origin.");
      }
    } catch (error) {
      console.error("Error in fetching origin:", error);
    }
  };

  return (
    <div className='w-[45%]' ref={inputRef}>
      <input
        type="text"
        className="search-bar ml-auto text-left  bg-gray-50 border border-gray-300 text-gray-900 
        text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 
        dark:bg-gray-700 dark:border-gray-500 dark:placeholder-white dark:hover:border-white
         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
          hover:border-gray-700 w-full transition duration-200 ease-in-out"
        placeholder="Where From?"
        required
        value={value}
        onChange={onChange}
      />

      {suggestions.length > 0 && (
        <div id='dataResult' className='bg-white border dark:bg-gray-700 border-gray-300 mt-1 rounded-lg shadow-md max-h-[150px] overflow-y-auto absolute z-10'>
          {suggestions.map((airport, index) => (
            <div
              key={index}
              className='cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-500 flex justify-between items-center'
              onClick={() => handleSuggestionClick(airport.code)}
            >
              <div className=''>{airport.state || airport.country}</div>
              <div className='mr-1.5'>{airport.city}</div>
              <div className=''>{airport.code}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputOrig;
