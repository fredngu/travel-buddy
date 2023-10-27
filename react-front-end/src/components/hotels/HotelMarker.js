import React from 'react';
import { Marker } from 'google-maps-react';

const HotelMarker = ({ hotel, handleMarkerClick }) => (
  <Marker
    key={hotel.place_id}
    name={hotel.name}
    position={{
      lat: hotel.geometry.location.lat(),
      lng: hotel.geometry.location.lng(),
    }}
    onClick={() => handleMarkerClick(hotel)}
  />
);

export default HotelMarker;
