import React, { useState } from "react";
import { FlightList, Input } from "../flights";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";
import { mockData as mockItineraryData } from "../../mockData/mockItineraryData";
import { FlightSummary } from "../FlightSummary";

const FlightSearch = () => {
  const [flightData, setFlightData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [itineraryData, setItineraryData] = useState(mockItineraryData);
  const navigate = useNavigate();

  // Define the onFlightCardClick function
  const onFlightCardClick = (flightItinerary) => {
    // Handle the click event for a flight card
    // navigate("/hotel");
    // We can add more logic here, e.g., opening a modal with detailed flight information
    setItineraryData(flightItinerary);
  };

  console.log(flightData);
  console.log(itineraryData);
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

      {/* This component can be used in trip summary page
      */}

      <Button variant="contained">
        <Link
          to="/hotel"
          style={{ textDecoration: "none", color: "green" }}
          state={{ itineraryData: itineraryData }}
        >
          Looks good
        </Link>
      </Button>
    </div>
  );
};

export default FlightSearch;
