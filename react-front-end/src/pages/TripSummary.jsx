// TripSummary.js
import React from "react";
import FlightSummary from "../components/FlightSummary";
import { useLocation } from "react-router-dom";

export function TripSummary(props) {
  const { state } = useLocation();
  const {itineraryData, hotelData} = state
  console.log(itineraryData);
  console.log(hotelData);

  return (
    <div className="relative min-h-[100vh] dark:bg-gray-700 dark:text-white">
      <br />
      <h1 className="text-2xl font-semibold text-center mb-4">Trip Summary</h1>
      {itineraryData ? (
        <FlightSummary itineraryData={itineraryData} />
      ) : (
        <p>No flight selected</p>
      )}


      {/* Display the selected hotel data */}
      {props.selectedHotelData ? (
        <div className="hotelInfoContainer">
          <h2>Selected Hotel Details</h2>
          <p>Hotel Name: {props.selectedHotelData.name}</p>
          <p>Hotel Address: {props.selectedHotelData.vicinity}</p>
          {/* Add more hotel details as needed */}
        </div>
      ) : null}
    </div>
  );
}
