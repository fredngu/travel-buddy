import React, { useEffect } from "react";
import HotelSearch from "../components/hotels/HotelSearchPage";
import { useLocation } from "react-router-dom";
import { useItineraryData } from "../components/utils/ItineraryDataContext";
import hotelImage from '../images/hotel-hero.jpg';
import Footer from "../components/Footer"

export function Hotel() {
  const { state } = useLocation();
  const { dispatch } = useItineraryData();

  useEffect(() => {
    // Check if state and itineraryData exist before dispatching
    if (state && state.itineraryData) {
      dispatch({ type: "SET_ITINERARY_DATA", payload: state.itineraryData });
    }
  }, [state, dispatch]);

  return (
    <>
      <img src={hotelImage} alt="Hotel" className="w-full h-auto" style={{ height: '400px' }}/>
      <br />
        <div style={{ background: '#9C27B0' }} className="p-4 text-white">
          <h1 className="text-5xl font-bold mb-4">Plan your stay</h1>
          <p className="text-2xl">Nothing better than relaxing in style</p>
        </div>
      <h1 className="text-4xl font-semibold text-center mt-4">Find a good hotel</h1>
      <HotelSearch />      
      <Footer />
    </>
  );
}
