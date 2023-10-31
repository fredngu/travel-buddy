import React, { useState } from 'react';
import { FlightList, Input } from '../flights';

const FlightSearch = () => {
  const [flightData, setFlightData] = useState([])
  const [isLoading, setIsLoading] = useState(false);

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
        />
    </div>
  );
};

export default FlightSearch;