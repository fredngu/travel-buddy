import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Flight from "./components/flights/FlightSearch";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MyTrips } from "./pages/MyTrips";
import { Hotel } from "./pages/Hotel";
import { TripSummary } from "./pages/TripSummary";
import { MakeComparison } from "./pages/MakeComparison";
import { ItineraryDataProvider } from "./components/utils/ItineraryDataContext";
import { HotelDataProvider } from "./components/utils/HotelDataContext";
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontSize: 18,
  },
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ItineraryDataProvider>
            <HotelDataProvider>
            <div className="App">
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trips" element={<MyTrips />} />
                <Route path="/flight" element={<Flight />} />
                <Route path="/hotel" element={<Hotel />} />
                <Route path="/trip_summary" element={<TripSummary />} />
                <Route path="/make_comparisons" element={<MakeComparison />} />
              </Routes>
            </div>
            </HotelDataProvider>
        </ItineraryDataProvider>
      </ThemeProvider>
    );
  }
}

export default App;
