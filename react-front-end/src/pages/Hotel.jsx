//Page for hotel search
import HotelSearch from "../components/hotels/HotelSearchPage";
import { useLocation } from "react-router-dom";

export function Hotel() {
  // const location = useLocation();
  // const { itineraryData } = location.state;
  const { state } = useLocation();
  console.log(state.itineraryData);
  return (
    <>
      <h1>Find a good hotel</h1>
      <HotelSearch />
    </>
  );
}
