import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

export default function FlightSummary({ itineraryData, destinationCity }) {
  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formatDuration = (minutes) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hrs}h ${mins}m`;
  };

  return (
    <div className="bg-white dark:bg-slate-600 p-6 rounded-lg shadow-lg transition duration-150 ease-in-out hover:shadow-xl space-y-3 border border-gray-200 mb-4  mx-auto  max-w-3xl">
      {itineraryData.legs.map((leg, legIndex) => (        
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
          <p>
            <strong className="text-xl md:2xl">
              {destinationCity}
            </strong>
          </p>
          </div>
        </div>
      ))}
      <p className="text-right text-xl md:2xl font-bold dark:text-slate-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        Price: {itineraryData.price.formatted}
      </p>
    </div>
  );
}
