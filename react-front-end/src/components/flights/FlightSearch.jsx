import React, { useState } from 'react';
import { FlightList, Input } from '../flights';
import { useNavigate } from 'react-router-dom';

const FlightSearch = () => {
  const [flightData, setFlightData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Define the onFlightCardClick function
  const onFlightCardClick = (flightItinerary) => {
    // Handle the click event for a flight card
    navigate('/hotel');
    // We can add more logic here, e.g., opening a modal with detailed flight information
  };

  return (
    <div className='relative min-h-[100vh] dark:bg-gray-700 dark:text-white'>
        <div className="pb-[2.5rem]">
          <div className="md:px-12 ">
            <Input
              setFlightData={(data) => setFlightData(data)}
              setIsLoading={(loading) => setIsLoading(loading)}
            />
          </div>
        </div>
        <FlightList
          flightData={flightData}
          isLoading={isLoading}
          onFlightCardClick={onFlightCardClick}
      />
    </div>
  );
};

export default FlightSearch;