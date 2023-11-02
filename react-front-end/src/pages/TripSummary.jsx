import React from "react";
import FlightSummary from "../components/FlightSummary";
import { useLocation } from "react-router-dom";
import { useItineraryData } from "../components/utils/ItineraryDataContext";
import { useHotelData } from "../components/utils/HotelDataContext";
import { getPriceRange } from '../components/utils/PriceUtils';

export function TripSummary(props) {
  const location = useLocation();
   // Use the context to access the itineraryData
  const { state } = useItineraryData();
  // Access the selected hotel data from the context
  const { selectedHotelData } = useHotelData();

  // Check if itineraryData is available from the location or context
  const itineraryData = location.state?.itineraryData || state.itineraryData;

  return (
    <div className="relative min-h-[100vh] dark:bg-gray-700 dark:text-white">
      <br />
      <h1 className="text-2xl font-semibold text-center mb-4">Trip Summary</h1>
      {itineraryData ? (
        <FlightSummary itineraryData={itineraryData} />
      ) : (
        <p>No flight selected</p>
      )}      
      {selectedHotelData ? (
          <div className="hotelInfoContainer">
            <h3 className="hotelName">{selectedHotelData.name}</h3>
            <p className="hotelAddress">Address: {selectedHotelData.vicinity}</p>
            <p className="hotelRating">Rating: {selectedHotelData.rating}</p>
            <p className="hotelPrice">
              Price Range: {getPriceRange(selectedHotelData.price_level) || 'Not available (VISIT HOTEL WEBSITE)'}
            </p>
        </div>
      ) : (
        <p>No hotel selected</p>
      )}
    </div>
  );
}