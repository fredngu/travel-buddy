import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Flight from './components/Flight';
import HotelSearch from './components/hotels/HotelSearch';
import Button from '@mui/material/Button';

function App() {
  const [message, setMessage] = useState('Click the button to load data!');
  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: 51.049999, lng: -114.066666 });

  const fetchData = () => {
    axios.get('/api/data')
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
      });
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (location) {
      const newCoordinates = await fetchCoordinates(location);
      setCoordinates(newCoordinates);
    }
  };

  const fetchCoordinates = async (location) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      );
      const data = await response.json();
      if (data.status === 'OK' && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry.location;
        return { lat, lng };
      } else {
        console.error('Location not found');
        return coordinates;
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
      return coordinates;
    }
  };

  return (
    <div className="App">
      <NavBar />
      <h1>{message}</h1>
      <Button variant="contained" onClick={fetchData}>Fetch Data</Button>
      <Flight />
      <form onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Enter location (e.g., city name)"
          value={location}
          onChange={handleLocationChange}
        />
        <button className="search-button" type="submit">Search</button>
      </form>
      <HotelSearch initialCenter={coordinates} />
      <Footer />
    </div>
  );
}

export default App;
