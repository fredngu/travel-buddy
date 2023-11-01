// TripSummary.js
import React from "react";
import FlightSummary from "../components/FlightSummary";
import { useLocation } from "react-router-dom";
import { useItineraryData } from "../components/utils/ItineraryDataContext";

export function TripSummary(props) {
  const location = useLocation();
   // Use the context to access the itineraryData
  const { state } = useItineraryData();

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
    </div>
  );
}
