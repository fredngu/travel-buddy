import React, { Component } from 'react';
import { getPriceRange } from '../utils/PriceUtils';

class HotelCard extends Component {
  handleClick = () => {
    const { hotel, handleMarkerClick } = this.props;
    handleMarkerClick(hotel);
  };

  render() {
    const { hotel, isSelected, isHighlighted } = this.props;

    return (
      <div
        className={`hotelCard ${isSelected ? 'highlighted' : ''} ${isHighlighted ? 'highlighted' : ''}`}
        onClick={this.handleClick}
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
        </div>
      </div>
    );
  }
}

export default HotelCard;
