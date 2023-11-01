import React, { useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const FlightList = ({ flightData, isLoading, onFlightCardClick }) => {
  const [displayCount, setDisplayCount] = useState(5);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const navigate = useNavigate();

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formatDuration = (minutes) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hrs}h ${mins}m`;
  };

  if (!Array.isArray(flightData)) {
    return null;
  }

  const handleShowMore = () => {
    setDisplayCount((displayCount) => {
      return displayCount + 5;
    });
  };

  const handleFlightCardClick = (flightItinerary) => {
    // Update the selected flight
    setSelectedFlight(flightItinerary);

    // Call the provided onFlightCardClick function
    onFlightCardClick(flightItinerary);
  };

  const flightListHeight = isLoading ? "40vh" : "auto";

  const sortedItineraries = flightData
    .sort((a, b) => a.legs[0].stopCount - b.legs[0].stopCount)
    .slice(0, displayCount);

  return (
    <div
      className="p-4 relative flex justify-center"
      style={{ height: flightListHeight }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 40,
        }}
      >
        {isLoading ? (
          <PacmanLoader
            loading={isLoading}
            color="#d5d5d5"
            size={100}
            width={"50%"}
            height={10}
            speedMultiplier={0.5}
          />
        ) : null}
      </div>
      <div className="w-full max-w-2xl">
        {sortedItineraries.map((itinerary, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-slate-600 p-6 rounded-lg shadow-lg transition duration-150 ease-in-out hover:shadow-xl space-y-3 border border-gray-200 mb-4 ${
              selectedFlight === itinerary ? "bg-yellow-100" : ""
            }`}
            onClick={() => handleFlightCardClick(itinerary)}
          >
            {itinerary.legs.map((leg, legIndex) => (
              <div
                key={legIndex}
                className="flex flex-col md:flex-row justify-between items-stretch pt-2 space-y-2 md:space-y-0"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={leg.carriers.marketing[0].logoUrl}
                    alt={leg.carriers.marketing[0].name}
                    className="h-10 w-10 mr-3 rounded-lg dark:border dark:outline"
                  />
                  <div>
                    <p className="text-lg md:xl font-semibold">
                      {formatTime(leg.departure)}
                    </p>
                    <p>
                      <strong className="text-xl md:2xl">
                        {leg.origin.displayCode}
                      </strong>
                    </p>
                  </div>
                  <ArrowLongRightIcon className="h-6 w-6 md:h-10 md:w-20" />
                  <div>
                    <p className="text-lg md:xl font-semibold">
                      {formatTime(leg.arrival)}
                    </p>
                    <p>
                      <strong className="text-xl md:2xl">
                        {leg.destination.displayCode}
                      </strong>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center md:items-end mt-2 md:mt-0">
                  <p className="text-lg font-semibold">
                    {formatDuration(leg.durationInMinutes)}
                  </p>
                  <p className="text-lg md:xl font-bold">
                    {" "}
                    {leg.stopCount === 0 ? (
                      "Nonstop"
                    ) : (
                      <>
                        {" "}
                        <strong>Stops:</strong> {leg.stopCount}{" "}
                      </>
                    )}{" "}
                  </p>
                </div>
              </div>
            ))}
            <p className="text-right text-xl md:2xl font-bold dark:text-slate-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Price: {itinerary.price.formatted}
            </p>
          </div>
        ))}
        <div className="flex justify-center mt-4 w-full">
          {flightData.length > displayCount && (
            <button
              onClick={handleShowMore}
              className="py-2 px-4 border border-gray-300 dark:bg-slate-500 dark:hover:bg-slate-700 rounded-xl bg-gray hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300 transition duration-150 ease-in-out"
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightList;
