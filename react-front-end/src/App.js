import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import NavBar from './components/NavBar';
import Flight from './components/flights//FlightSearch';
import Hotel from './components/hotels/HoteSearchPage';
import Button from '@mui/material/Button'
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MyTrips } from "./pages/MyTrips"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Click the button to load data!',
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

  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>{this.state.message}</h1>
        <Button variant="contained" onClick={this.fetchData}>Fetch Data</Button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trips" element={<MyTrips />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/hotel" element={<Hotel />} />
        </Routes>
      </div>
    );
  }

}

export default App;