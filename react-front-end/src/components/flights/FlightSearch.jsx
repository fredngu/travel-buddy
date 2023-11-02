import React, { useState } from "react";
import { FlightList, Input } from "../flights";
import { useNavigate } from "react-router-dom";
import { useItineraryData } from "../utils/ItineraryDataContext";
import { Button } from "@mui/material";
import flightImage from '../../images/flight-hero.jpg';

const FlightSearch = () => {
  const [flightData, setFlightData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { state, dispatch } = useItineraryData();
  const navigate = useNavigate();

  // Define the onFlightCardClick function
  const onFlightCardClick = (flightItinerary) => {
    // Handle the click event for a flight card
    // We can add more logic here, e.g., opening a modal with detailed flight information
    dispatch({ type: "SET_ITINERARY_DATA", payload: flightItinerary });
  };

  const handleOneSecondThoughtClick = () => {
    // Redirect the user back to the Hotel page
    navigate("/");
  };

  console.log(flightData);
  console.log(state.itineraryData);
  return (
    <div className="relative min-h-[100vh] dark:bg-gray-700 dark:text-white">
      <img src={flightImage} alt="Hotel" className="w-full" />
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
      <Button className="light-purple-button" variant="contained" size="large" onClick={handleOneSecondThoughtClick}>
        One Second Thought
      </Button>
      <Button className="light-purple-button" variant="contained" onClick={() => navigate("/hotel")}>
        Looks good
      </Button>
    </div>
  );
};

export default FlightSearch;
