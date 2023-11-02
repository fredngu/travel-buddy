import React, { createContext, useContext, useState } from "react";

const HotelDataContext = createContext();

export function HotelDataProvider({ children }) {
  const [selectedHotelData, setSelectedHotelData] = useState(null);

  return (
    <HotelDataContext.Provider value={{ selectedHotelData, setSelectedHotelData }}>
      {children}
    </HotelDataContext.Provider>
  );
}

export function useHotelData() {
  return useContext(HotelDataContext);
}
