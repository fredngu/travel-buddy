import React, { useState } from 'react';
import { ArrowsRightLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import InputDate from './InputDate'
import InputDest from './InputDest'
import InputOrig from './InputOrig'
import airportData from "./airports.json";
import fetchFromAPI from './utils/fetchFromAPI';
import dayjs from 'dayjs';

const Input = ({ setFlightData, setIsLoading }) => {
  const [originCode, setOriginCode] = useState("")
  const [destCode, setDestCode] = useState("")
  const [originSkyId, setOriginSkyId] = useState(null);
  const [destSkyId, setDestSkyId] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Round Trip");

  const fetchDataOrig = async (originCode) => {
      try {
        const response = await fetch(
          `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${originCode}`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
              'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
            },
          }
        );
        const result = await response.json();

        //check the status of API endpoint-TS
        if (result.status !== true) {
          console.log("API returned a false status");
          return null;
        }

        //loop through the data to find airport match-TS       
        for (let i = 0; i < result.data.length; i++) {
          if (result.data[i].skyId === originCode) {
            return result.data[i].entityId;
          }
        }
      } catch (error) {
        console.log("Error in fetchDataOrig: ", error);
        return null;
      };
  };

  const fetchDataDest = async (destCode) => {
      try {
        const response = await fetch(
          `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${destCode}`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
              'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com',
            },
          }
        );
        const result = await response.json();

        if (result.status !== true) {
          console.log("API returned a false status");
          return null;
        }
        //this loops through the data to find airport match-TS
        for (let i = 0; i < result.data.length; i++) {
          if (result.data[i].skyId === destCode) {
            return result.data[i].entityId;
          }
        }
      } catch (error) {
        console.log("Error in fetchDataDest: ", error);
        return null;
      }
    };


  const handleExploreClick = async (e) => {
    e.preventDefault();

    const returnDateParam = selectedOption === 'Round Trip' ? returnDate : undefined;
    if (!originCode || !destCode || !departureDate || (selectedOption === 'Round Trip' && !returnDate)) {
      alert("Please fill in all required fields");
      return;
    }

    if (selectedOption === 'Round Trip' && returnDate && departureDate && dayjs(returnDate).isBefore(departureDate)) {
      alert('Please check dates.');
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    try {
      const data = await fetchFromAPI(originCode, destCode, originSkyId, destSkyId, departureDate, returnDateParam);

      console.log("Raw fetch response:", data);

      if (!data || data.status === false) {
        console.error("API Error:", data.message);
        setIsLoading(false);
        return;
      }

      if (data.data.itineraries.length === 0) {
        setIsLoading(false);
        alert("Invalid or no available flights.");
        return;
      }


      setFlightData(data.data.itineraries);
      setIsLoading(false);
      
    } catch (error) {
      console.error("An error occured:", error);
      setIsLoading(false);
    }
  };
  
  //this handles the arrow switch codes -TS
  const handleSwitch = () => {
    const tempOriginCode = originCode;
    const tempOriginSkyId = originSkyId;

    setOriginCode(destCode);
    setDestCode(tempOriginCode);

    setOriginSkyId(destSkyId);
    setDestSkyId(tempOriginSkyId);
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  

  return (
    <>
    <div className="rounded-b-[1rem] md:rounded-lg md:px-1 md:translate-y-6 ring-1 shadow-3xl ring-slate-900/5">
      <form className=" flex-col items-center py-2">
        <div className="p-2 text-center text-3xl md:text-5xl"> Flights </div>
          
          {/* trip selector */}
            <select 
              className="ml-4 dark:bg-slate-500 rounded-lg p-1"
              value={selectedOption}
              onChange={handleOptionChange}>
              <option>Round Trip</option>
              <option>One Way</option>
            </select>
            
          <div className="flex px-4 py-3 mb-6 justify-center items-center">

              {/* input flight origin -TS*/}
              <InputOrig airportData={airportData} value={originCode} fetchDataOrig={fetchDataOrig} setOriginCode={setOriginCode} setOriginSkyId={setOriginSkyId} />
          
              {/* Spacer */}
              <div className="flex-grow"></div>
              {/* Icon */}
              <ArrowsRightLeftIcon className="h-8 w-7 drop-shadow-md hover:stroke-2" onClick={handleSwitch} />
              {/* Spacer */}
              <div className="flex-grow"></div>

              {/* input flight Destination -TS*/}
              <InputDest airportData={airportData} value={destCode} fetchDataDest={fetchDataDest} setDestCode={setDestCode} setDestSkyId={setDestSkyId} />
          </div>

          <InputDate 
          selectedOption={selectedOption} 
          departureDate={departureDate}
          setDepartureDate={setDepartureDate}
          returnDate={returnDate}
          setReturnDate={setReturnDate}
          />
          <div className="justify-center flex">
            <button onClick={handleExploreClick} className=" -mt-2 shadow-xl -mb-5 flex hover:font-bold hover:ring-cyan-950 bg-teal-200 rounded-[11px] p-1.5 text-slate-800 font-semibold">
              <MagnifyingGlassIcon className="h-5 w-5 mt-[3%] mr-1" />
              Explore
            </button>
          </div>
      </form>
    </div>
    
    </>
  );
};

export default Input;