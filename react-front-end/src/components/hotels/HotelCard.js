import React from 'react';
import { useNavigate } from "react-router-dom";
import { getPriceRange } from '../utils/PriceUtils';
import { Button } from '@mui/material';
import { useHotelData } from '../utils/HotelDataContext';

function HotelCard({ hotel, isSelected, isHighlighted, handleMarkerClick, onStoreHotel }) {
  const { setSelectedHotelData } = useHotelData();
  const navigate = useNavigate();

  const handleStoreButtonClick = (event) => {
    event.stopPropagation();
    setSelectedHotelData(hotel);

    navigate("/trip_summary");
  };

  return (
    <div
      className={`hotelCard ${isSelected ? 'highlighted' : ''} ${isHighlighted ? 'highlighted' : ''}`}
      onClick={() => handleMarkerClick(hotel)}
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
        <Button variant="contained" size="small" onClick={handleStoreButtonClick}>
          Looks Good!
        </Button>
      </div>
    </div>
  );
}

export default HotelCard;
