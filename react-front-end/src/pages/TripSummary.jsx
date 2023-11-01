//TripSummary Route
import FlightSummary from "../components/FlightSummary";
import { mockData as ItineraryData } from "../mockData/mockItineraryData";

export function TripSummary() {
  return (
    <>
      <FlightSummary itineraryData={ItineraryData} />
    </>
  );
}
