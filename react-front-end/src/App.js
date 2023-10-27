import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import Flight from './components/Flight';
import HotelSearch from './components/hotels/HotelSearch';
import Button from '@mui/material/Button'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Click the button to load data!',
      flightData: [],
      isLoading: false,
      location: '',
      coordinates: { lat: 51.049999, lng: -114.066666 },
    };
  }

  fetchData = () => {
    axios
      .get('/api/data')
      .then((response) => {
        // handle success
        console.log(response.data);

        console.log(response.data.message);
        this.setState({
          message: response.data.message,
        });
      });
  }

  handleLocationChange = (e) => {
    this.setState({ location: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.location) {
      const newCoordinates = await this.fetchCoordinates(this.state.location);
      this.setState({ coordinates: newCoordinates });
    }
  };

  fetchCoordinates = async (location) => {
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
        return this.state.coordinates; // Return the current coordinates if the location is not found
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
      return this.state.coordinates; // Return the current coordinates on error
    }
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>{this.state.message}</h1>
        <Button variant="contained" onClick={this.fetchData}>Fetch Data</Button>
        <Flight />
        {/* Render the HotelSearch component */}
        <form onSubmit={this.handleSubmit}>
          <input
            className="input-field"
            type="text"
            placeholder="Enter location (e.g., city name)"
            value={this.state.location}
            onChange={this.handleLocationChange}
          />
          <button className="search-button" type="submit">Search</button>
        </form>
        <HotelSearch initialCenter={this.state.coordinates} />
      </div>
    );
  }
}

export default App;
