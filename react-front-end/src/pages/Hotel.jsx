import React, { useEffect } from "react";
import HotelSearch from "../components/hotels/HotelSearchPage";
import { useLocation } from "react-router-dom";
import { useItineraryData } from "../components/utils/ItineraryDataContext";

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
      <br />
      <h1 className="text-2xl font-semibold text-center mb-4">Find a good hotel</h1>
      <HotelSearch />
    </>
  );
}
