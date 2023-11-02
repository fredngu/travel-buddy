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
      
      <h1 className="text-2xl font-semibold text-center mb-4">Your Trip to {itineraryData.legs[0].destination.city}</h1>
      {itineraryData ? (
        <FlightSummary itineraryData={itineraryData} destinationCity={itineraryData.legs[0].destination.city} />
      ) : (
        <p>No flight selected</p>
      )}      
      {selectedHotelData ? (
        <div className="flex justify-center items-center">
          <div
          className={`bg-white dark:bg-slate-600 p-6 py-12 rounded-lg shadow-lg transition duration-150 ease-in-out hover:shadow-xl space-y-3 border border-gray-200 mb-4 max-w-3xl`}
        >
          <img src={selectedHotelData.photos[0].getUrl()} alt="Hotel" className="hotelImage" />
          <div className="flex flex-col md:flex-row justify-between items-stretch pt-2 space-y-2 md:space-y-0">
            <h3 className="text-lg md:text-xl font-semibold">{selectedHotelData.name}</h3>
            <p className="hotelRating font-semibold">Address: <span className="font-semibold">{selectedHotelData.vicinity}</span></p>
            <p className="hotelRating font-semibold">Rating: {selectedHotelData.rating}</p>
            <p className="hotelRating font-semibold">
              Price Range: <span className="hotelPrice">{getPriceRange(selectedHotelData.price_level) || 'Not available (VISIT HOTEL WEBSITE)'}</span>
            </p>
          </div>
        </div>      
      </div>
      ) : (
        <p>No hotel selected</p>
      )}
    </div>
  );
}