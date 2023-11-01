import React, { Component } from 'react';
import { getPriceRange } from '../utils/PriceUtils';
import { Button } from '@mui/material';

class HotelCard extends Component {
  handleMarkerClick = () => {
    const { hotel, handleMarkerClick } = this.props;
    handleMarkerClick(hotel);
  };

  handleStoreButtonClick = (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the parent div
    const { hotel, onStoreHotel } = this.props;
    onStoreHotel(hotel);
  };

  render() {
    const { hotel, isSelected, isHighlighted } = this.props;

    return (
      <div
        className={`hotelCard ${isSelected ? 'highlighted' : ''} ${isHighlighted ? 'highlighted' : ''}`}
        onClick={this.handleMarkerClick} // Handle card click for marker highlight
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
          <Button variant="contained" size="small" onClick={this.handleStoreButtonClick}>
            Looks Good!
          </Button>
        </div>
      </div>
    );
  }
}

export default HotelCard;
