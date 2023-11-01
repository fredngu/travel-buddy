import React, { useState } from "react";
import { FlightList, Input } from "../flights";
import { Link } from "react-router-dom";
import { useItineraryData } from "../utils/ItineraryDataContext";
import { Button } from "@mui/material";

const FlightSearch = () => {
  const [flightData, setFlightData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { state, dispatch } = useItineraryData();

  // Define the onFlightCardClick function
  const onFlightCardClick = (flightItinerary) => {
    // Handle the click event for a flight card
    // We can add more logic here, e.g., opening a modal with detailed flight information
    dispatch({ type: "SET_ITINERARY_DATA", payload: flightItinerary });
  };

  console.log(flightData);
  console.log(state.itineraryData);
  return (
    <div className="relative min-h-[100vh] dark:bg-gray-700 dark:text-white">
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
      <Button variant="contained">
        <Link
          to="/trip_summary"
          style={{ textDecoration: "none", color: "white" }}
        >
          Looks good
        </Link>
      </Button>
    </div>
  );
};

export default FlightSearch;
