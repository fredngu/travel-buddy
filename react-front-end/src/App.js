import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Flight from './components/flights//FlightSearch';
import Hotel from './components/hotels/HoteSearchPage';
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MyTrips } from "./pages/MyTrips"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
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