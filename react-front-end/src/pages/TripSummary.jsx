import React from "react";
import FlightSummary from "../components/FlightSummary";
import { useLocation, useNavigate } from "react-router-dom";
import { useItineraryData } from "../components/utils/ItineraryDataContext";
import { useHotelData } from "../components/utils/HotelDataContext";
import { getPriceRange } from '../components/utils/PriceUtils';
import Button from "@material-ui/core/Button";
import "../styles/TripSummary.scss";
import tripImage from '../images/trip-summary.jpg';

export function TripSummary(props) {
  const location = useLocation();
  const navigate = useNavigate();
   // Use the context to access the itineraryData
  const { state } = useItineraryData();
  // Access the selected hotel data from the context
  const { selectedHotelData } = useHotelData();

  // Check if itineraryData is available from the location or context
  const itineraryData = location.state?.itineraryData || state.itineraryData;

  // Function to handle "One Second Thought" button click
  const handleOneSecondThoughtClick = () => {
    // Redirect the user back to the Hotel page
    navigate("/hotel"); // You should adjust the route as per your application's routing configuration
  };

  // Function to handle "Looks Good" button click
  const handleLooksGoodClick = () => {
    // Redirect the user to the My Trip page
    navigate("/trips"); // You should adjust the route as per your application's routing configuration
  };

  return (
    <div className="relative min-h-[100vh] dark:bg-gray-700 dark:text-white">
      
      <img src={tripImage} alt="Hotel" className="w-full" />
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
      {/* "One Second Thought" button */}
      <Button className="light-purple-button" variant="contained" size="large" onClick={handleOneSecondThoughtClick}>
        One Second Thought
      </Button>

      {/* "Looks Good" button */}
      <Button className="light-purple-button" variant="contained" size="large" onClick={handleLooksGoodClick}>
        Looks Good
      </Button>
    </div>
  );
}