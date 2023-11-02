import React from 'react';
import { getPriceRange } from '../utils/PriceUtils';
import { Link, useLocation } from "react-router-dom";
import { Button } from '@mui/material';
import { useItineraryData } from "../utils/ItineraryDataContext";

function HotelCard(props) {
  const location = useLocation();
  // Use the context to access the itineraryData
  const { state } = useItineraryData();

  // Check if itineraryData is available from the location or context
  const itineraryData = location.state?.itineraryData || state.itineraryData;
  const handleMarkerClick = () => {
    const { hotel, handleMarkerClick } = props;
    handleMarkerClick(hotel);
  };

  // const handleStoreButtonClick = (event) => {
  //   event.stopPropagation();
  //   const { hotel, onStoreHotel } = props;
  //   onStoreHotel(hotel);
  // };

  const { hotel, isSelected, isHighlighted } = props;

  return (
    <div
      className={`hotelCard ${isSelected ? 'highlighted' : ''} ${isHighlighted ? 'highlighted' : ''}`}
      onClick={() => handleMarkerClick()}
    >
      <div className="hotelImageContainer">
        {hotel.photos && hotel.photos[0] ? (
          <img src={hotel.photos[0].getUrl()} alt="Hotel" className="hotelImage" />
        ) : (
          <p>No Photo Available</p>
        )}
      </div>
      <div className="hotelInfoContainer">
        <h3 className="hotelName">{hotel.name}</h3>
        <p className="hotelAddress">Address: {hotel.vicinity}</p>
        <p className="hotelRating">Rating: {hotel.rating}</p>
        <p className="hotelPrice">
          Price Range: {getPriceRange(hotel.price_level) || 'Not available (VISIT HOTEL WEBSITE)'}
        </p>
        <Button variant="contained">
          <Link
            to="/trip_summary"
            style={{ textDecoration: "none", color: "green" }}
            state={{ hotelData: hotel, itineraryData: itineraryData }}
          >
            Looks good
          </Link>
        </Button>
        {/* <Button variant="contained" size="small" onClick={this.handleStoreButtonClick}>
            Looks Good!
          </Button> */}
      </div>
    </div>
  );
}

export default HotelCard;
