import React from "react";
import FlightSummary from "../components/FlightSummary";
import { useLocation, useNavigate } from "react-router-dom";
import { useItineraryData } from "../components/utils/ItineraryDataContext";
import { useHotelData } from "../components/utils/HotelDataContext";
import { getPriceRange } from '../components/utils/PriceUtils';
import { Button } from "@mui/material";
import "../styles/TripSummary.scss";
import tripImage from '../images/trip-summary.jpg';
import Footer from "../components/Footer";
import axios from "axios";

export function TripSummary(props) {
  const location = useLocation();
  const navigate = useNavigate();
// Use the context to access the itineraryData
  const { state } = useItineraryData();
// Access the selected hotel data from the context
  const { selectedHotelData } = useHotelData();

  // Check if itineraryData is available from the location or context
  const itineraryData = location.state?.itineraryData || state.itineraryData;

  const areFlightAndHotelSelected = itineraryData && selectedHotelData;

  const handleFlightSearchClick = () => {
    navigate("/flight");
  };

  const handleOneSecondThoughtClick = () => {
    // Redirect the user back to the Hotel page
    navigate("/hotel");
  };

  const handleLooksGoodClick = () => {
    pushTripToDB(itineraryData, selectedHotelData);
// Redirect the user to the My Trip page
    // You should adjust the route as per your application's routing configuration
  };

  const pushTripToDB = (itineraryData, hotelData) => {
    const price = parseInt(itineraryData.price.raw);
    const newTrip = {
      hotel_price: getPriceRange(hotelData.price_level),
      hotel_name: hotelData.name,
      traveller_id: window.sessionStorage.getItem("traveller_id"),
      city_name: itineraryData.legs[0].destination.city,
      trip_name: `${itineraryData.legs[0].destination.city} Trip`,
      flight_price: price,
      start_date: itineraryData.legs[0].departure,
      end_date: itineraryData.legs[1].arrival,
      city_image_url: "image",
    };
    console.log(newTrip);
    axios.post("/trips", newTrip).then(() => navigate("/trips"));
  };

  return (
    <div className="relative min-h-[100vh] dark:bg-gray-700 dark:text-white">
      <img
        src={tripImage}
        alt="Hotel"
        className="w-full h-auto"
        style={{ height: "400px" }}
      />
      <div style={{ background: "#9C27B0" }} className="p-4 text-white">
        <h1 className="text-4xl font-bold mb-4">Get your options</h1>
        <p className="text-lg">Here are your best choices!</p>
      </div>
      <br />
      {areFlightAndHotelSelected && (
        <h1 className="text-2xl font-semibold text-center mb-4">
          Your Trip to {itineraryData?.legs[0]?.destination.city}
        </h1>
      )}
      {itineraryData ? (
        <FlightSummary
          itineraryData={itineraryData}
          destinationCity={itineraryData.legs[0].destination.city}
        />
      ) : (
        <div>
          <h1 className="text-2xl font-semibold text-center mb-4">
            No flight selected
          </h1>
          <Button
            className="light-purple-button"
            variant="contained"
            size="large"
            onClick={handleFlightSearchClick}
          >
            Choose a Flight First
          </Button>
        </div>
      )}
      {selectedHotelData && itineraryData ? (
        <div className="flex justify-center items-center">
          <div
            className={`bg-white dark-bg-slate-600 p-6 py-12 rounded-lg shadow-lg transition duration-150 ease-in-out hover:shadow-xl space-y-3 border border-gray-200 mb-4 max-w-3xl`}
          >
            <img
              src={selectedHotelData.photos[0]?.getUrl()}
              alt="Hotel"
              className="hotelImage"
            />
            <div className="flex flex-col md:flex-row justify-between items-stretch pt-2 space-y-2 md:space-y-0">
              <h3 className="text-lg md:text-xl font-semibold">
                {selectedHotelData.name}
              </h3>
              <p className="hotelRating font-semibold">
                Address:{" "}
                <span className="font-semibold">
                  {selectedHotelData.vicinity}
                </span>
              </p>
              <p className="hotelRating font-semibold">
                Rating: {selectedHotelData.rating}
              </p>
              <p className="hotelRating font-semibold">
                Price Range:{" "}
                <span className="hotelPrice">
                  {getPriceRange(selectedHotelData.price_level) ||
                    "Not available (VISIT HOTEL WEBSITE)"}
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : null}
      {/* Conditionally render buttons if both flight and hotel are selected */}
      {areFlightAndHotelSelected && (
        <div className="bottom-4 left-0 right-0 flex justify-center mb-20">
          <div className="transition duration-150 ease-in-out hover:shadow-xl space-x-3 mb-4 flex items-center">
            <Button
              className="light-purple-button"
              variant="contained"
              size="large"
              onClick={handleOneSecondThoughtClick}
            >
              One Second Thought
            </Button>
            <Button
              className="light-purple-button"
              variant="contained"
              size="large"
              onClick={() => handleLooksGoodClick()}
            >
              Looks Good
            </Button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
