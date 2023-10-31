//Trips Route
import { useEffect, useState } from "react";
import axios from "axios";


export function MyTrips() {
  const [trips, setTrips] = useState([])
  useEffect(() => {
    if (window.sessionStorage.getItem('traveller_id')) {
      axios.get("/trips")
      .then(({data}) => {
        setTrips(data)
      })
    }
  }, []);

  console.log(trips);

  return (
    <div>
      {trips.map(trip => (
        <p key={trip.trip_id}>{trip.trip_name}</p>
      ))}
    </div>
  )
}