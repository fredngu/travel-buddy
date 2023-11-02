//Trips Route
import { useEffect, useState } from "react";
import axios from "axios";
import TripTable from "../components/TripTable";
import tripImage from '../images/trips-hero.jpg';
import Footer from "../components/Footer"


export function MyTrips() {
  const [trips, setTrips] = useState([])
  useEffect(() => {
    // let traveller_id = window.sessionStorage.getItem('traveller_id')
    let traveller_id = 20;
    axios.get(`/trips/${traveller_id}`)
    .then(({data}) => {
      setTrips(data)
    })
  }, []);

  console.log(trips);

  return (
    <div>
      <img src={tripImage} alt="Hotel" className="w-full h-auto" style={{ height: '400px' }}/>
      <TripTable trips = {trips} />
      <Footer />
    </div>
  )
}