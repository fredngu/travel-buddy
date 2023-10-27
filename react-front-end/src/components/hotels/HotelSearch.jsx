import './HotelSearch.css';
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { getPriceRange } from '../utils/PriceUtils';

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

class HotelSearch extends Component {
  state = {
    hotels: [],
    map: null,
    numHotelsToShow: 3,
    mapCenter: this.props.initialCenter,
    selectedHotel: null,
    isMounted: false,
  };

  componentDidMount() {
    this.setState({ isMounted: true });
  }

  componentDidUpdate(prevProps) {
    if (this.props.google) {
      if (this.props.initialCenter !== prevProps.initialCenter) {
        this.updateMapCenter();
      } else {
        this.searchForHotels();
      }
    }
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
  }

  updateMapCenter() {
    if (this.state.map && this.state.isMounted) {
      this.state.map.setCenter(this.props.initialCenter);
      this.setState({ mapCenter: this.props.initialCenter }, () => {
        this.searchForHotels();
      });
    }
  }

  addMarkersToMap = () => {
    const { google } = this.props;
    const map = this.state.map;
    const { hotels } = this.state;

    hotels.forEach((hotel) => {
      const marker = new google.maps.Marker({
        position: {
          lat: hotel.geometry.location.lat(),
          lng: hotel.geometry.location.lng(),
        },
        map: map,
      });

      marker.addListener("click", () => {
        this.handleMarkerClick(hotel);
      });
    });
  };

  searchForHotels() {
    const { google } = this.props;
    const service = new google.maps.places.PlacesService(this.state.map);

    const request = {
      location: this.state.mapCenter,
      radius: 5000,
      type: ['lodging'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        this.setState({ hotels: results }, () => {
          // Call this function after setting state
          this.addMarkersToMap();
        });
      }
    });
  }

  loadMoreHotels = () => {
    if (this.state.isMounted) {
      this.setState((prevState) => ({ numHotelsToShow: prevState.numHotelsToShow + 4 }));
    }
  };

  // Handle marker click to select the hotel
  handleMarkerClick = (hotel) => {
    this.setState({ selectedHotel: hotel });
  };

  render() {
    const { hotels, numHotelsToShow, selectedHotel } = this.state;
    const visibleHotels = hotels.slice(0, numHotelsToShow);

    return (
      <div className="container">
        <div className="hotelList">
          <h2>Hotels Near Your Location:</h2>
          {visibleHotels.map((hotel) => (
            <div key={hotel.place_id} className="hotelCard">
              <div className="hotelImageContainer">
                {hotel.photos && hotel.photos[0] ? (
                  <img
                    src={hotel.photos[0].getUrl()}
                    alt="Hotel"
                    className="hotelImage"
                  />
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
          ))}
          {numHotelsToShow < hotels.length && (
            <div className="buttonContainer">
              <button className="seeMoreButton" onClick={this.loadMoreHotels}>
                See more
              </button>
            </div>
          )}
        </div>
        <div className="mapContainer">
          <Map
            google={this.props.google}
            zoom={14}
            initialCenter={this.props.initialCenter}
            onReady={(mapProps, map) => this.setState({ map })}
            style={{ width: '50%', height: '50vh' }}
          >
            {visibleHotels.map((hotel) => {
              const position = {
                lat: hotel.geometry.location.lat(),
                lng: hotel.geometry.location.lng(),
              };

              return (
                <Marker
                  key={hotel.place_id}
                  name={hotel.name}
                  position={position}
                  onClick={() => this.handleMarkerClick(hotel)}
                />
              );
            })}
          </Map>
        </div>
        {selectedHotel && (
          <div className="hotelSelected">
            <h2>Selected Hotel:</h2>
            <h3 className="hotelName">{selectedHotel.name}</h3>
            <p className="hotelAddress">Address: {selectedHotel.vicinity}</p>
            <p className="hotelRating">Rating: {selectedHotel.rating}</p>
            <p className="hotelPrice">
              Price Range: {getPriceRange(selectedHotel.price_level) || 'Not available (VISIT HOTEL WEBSITE)'}
            </p>
            {selectedHotel.photos && selectedHotel.photos[0] ? (
              <img
                src={selectedHotel.photos[0].getUrl()}
                alt="Hotel"
                className="hotelImage"
              />
            ) : (
              <p>No Photo Available</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey,
})(HotelSearch);
