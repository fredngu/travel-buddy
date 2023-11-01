// ItineraryDataContext.js
import React, { createContext, useContext, useReducer } from "react";

// Create a context
const ItineraryDataContext = createContext();

// Initial state
const initialState = {
  itineraryData: null,
};

// Reducer function to update state
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ITINERARY_DATA":
      return { ...state, itineraryData: action.payload };
    default:
      return state;
  }
};

// Context Provider component
export const ItineraryDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ItineraryDataContext.Provider value={{ state, dispatch }}>
      {children}
    </ItineraryDataContext.Provider>
  );
};

// Custom hook to consume the context
export const useItineraryData = () => {
  return useContext(ItineraryDataContext);
};
