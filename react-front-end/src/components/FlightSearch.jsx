import React, { useState } from 'react';
import Input from './Input';
import FlightList from './FlightList';

const FlightSearch = () => {
  const [flightData, setFlightData] = useState('')
  const [loading, setLoading] = useState('')

  return (
    <div className='relative dark:bg-gray-700 dark:text-white'>
        <div className="pb-[2.5rem]">
          <div className="md:px-12 ">
            <Input
              setFlightData={(data) => setFlightData({ flightData: data })}
              setIsLoading={(loading) => setLoading({ isLoading: loading })}
            />
          </div>
        </div>
        <FlightList
          flightData={flightData}
          isLoading={loading}
        />
    </div>
  );
};

export default FlightSearch;