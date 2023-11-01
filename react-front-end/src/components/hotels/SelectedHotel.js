import React from 'react';
import { getPriceRange } from '../utils/PriceUtils';
import './selectedHotel.css';

const SelectedHotel = ({ hotel, onClose }) => (
  <div className="modal">
    <div className="modal-content">
    <h1 className="text-2xl font-semibold text-center mb-4">Selected Hotel:</h1>
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
  </div>
);

export default SelectedHotel;
