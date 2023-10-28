import React from 'react';
import { getPriceRange } from '../utils/PriceUtils';

const SelectedHotel = ({ hotel, onClose }) => (
  <div className="hotelSelected">
    <h2>Selected Hotel:</h2>
    <h3 className="hotelName">{hotel.name}</h3>
    <p className="hotelAddress">Address: {hotel.vicinity}</p>
    <p className="hotelRating">Rating: {hotel.rating}</p>
    <p className="hotelPrice">
      Price Range: {getPriceRange(hotel.price_level) || 'Not available (VISIT HOTEL WEBSITE)'}
    </p>
    {hotel.photos && hotel.photos[0] ? (
      <img src={hotel.photos[0].getUrl()} alt="Hotel" className="hotelImage" />
    ) : (
      <p>No Photo Available</p>
    )}
    <button className="close-button" onClick={onClose}>Close</button>
  </div>
);

export default SelectedHotel;
