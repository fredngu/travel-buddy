import React, { useState } from "react";
import HotelSearch from "./HotelSearch";
import LocationSearch from "./LocationSearch";
import "./HotelSearch.css";

function HotelSearchPage() {
  const [coordinates, setCoordinates] = useState({
    lat: 51.049999,
    lng: -114.066666,
  });

  // Define a function to handle location change
  const handleLocationChange = (newCoordinates) => {
    setCoordinates(newCoordinates);
  };

  return (
    <div className="HotelSearchPage">
      {/* Include the LocationSearch component for autocomplete functionality */}
      <LocationSearch onLocationChange={handleLocationChange} />

      {/* The rest of your existing HotelSearchPage code */}
      <HotelSearch initialCenter={coordinates} />
    </div>
  );
}

export default HotelSearchPage;
