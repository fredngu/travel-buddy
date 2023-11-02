import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import HotelCard from './HotelCard';
import HotelMarker from './HotelMarker';
import SelectedHotel from './SelectedHotel';
import { Button } from '@mui/material';

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

class HotelSearch extends Component {
  state = {
    hotels: [],
    map: null,
    numHotelsToShow: 3,
    mapCenter: this.props.initialCenter,
    selectedHotel: null,
    highlightedHotel: null,
  };

  componentDidMount() {
    this.searchForHotels();
  }

  componentDidUpdate(prevProps) {
    if (this.props.initialCenter !== prevProps.initialCenter) {
      this.updateMapCenter();
    }
  }

  updateMapCenter() {
    if (this.state.map) {
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

      marker.addListener('click', () => {
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
          this.addMarkersToMap();
        });
      }
    });
  }

  loadMoreHotels = () => {
    this.setState((prevState) => ({ numHotelsToShow: prevState.numHotelsToShow + 4 }));
  };

  handleMarkerClick = (hotel) => {
    this.setState({ selectedHotel: hotel, highlightedHotel: hotel });
  };

  closeSelectedHotel = () => {
    this.setState({ selectedHotel: null });
  };

  onStoreHotel = (hotel) => {
    // Store the selected hotel data in the component state
    this.setState({ selectedHotelData: hotel });
    // You can also pass it to other parts of your application if needed
    console.log('Storing hotel:', hotel);
  };

  render() {
    const { hotels, numHotelsToShow, selectedHotel, highlightedHotel } = this.state;
    const visibleHotels = hotels.slice(0, numHotelsToShow);

    return (
      <div className="container">
        <div className="hotelList">
          <h1 className="text-2xl font-semibold text-center mb-4">Hotels Near location searched</h1>
          {visibleHotels.map((hotel) => (
            <HotelCard
              key={hotel.place_id}
              hotel={hotel}
              handleMarkerClick={this.handleMarkerClick}
              isSelected={hotel === selectedHotel}
              isHighlighted={hotel === highlightedHotel}
              onStoreHotel={this.onStoreHotel}
            />
          ))}
          {numHotelsToShow < hotels.length && (
            <div className="buttonContainer">
              <Button variant="contained" size="large" onClick={this.loadMoreHotels}>
                See more
              </Button>
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
                <HotelMarker
                  key={hotel.place_id}
                  hotel={hotel}
                  handleMarkerClick={this.handleMarkerClick}
                  isHighlighted={hotel === highlightedHotel}
                  position={position}
                />
              );
            })}
          </Map>
        </div>
        {selectedHotel && (
          <SelectedHotel hotel={selectedHotel} onClose={this.closeSelectedHotel} />
        )}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey,
})(HotelSearch);
