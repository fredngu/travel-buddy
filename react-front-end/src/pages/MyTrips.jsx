//Trips Route
import { useEffect, useState } from "react";
import axios from "axios";


export function MyTrips() {
  const [trips, setTrips] = useState([])
  useEffect(() => {
    if (window.sessionStorage.getItem('traveller_id')) {
      axios.get("http://localhost:3000/trips")
      .then(({data}) => {
        console.log(data)
      })
    }
  }, []);

  return (
    
    <h1>This is the Trips</h1>
  )
}