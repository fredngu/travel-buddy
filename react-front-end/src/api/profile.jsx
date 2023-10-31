import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState }from "react";
import axios from 'axios';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [ travellers, setTravellers ] = useState([]);
 
  const getTravellers = async () => {
    try {
      const response = await fetch("http://localhost:3000/travellers")
      const travellerData = await response.json()
      setTravellers(travellerData)
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    if (user) {
      axios.post("http://localhost:3000/travellers", user)
      .then(({data})=>{
        window.sessionStorage.setItem('traveller_id', data[0].traveller_id)
      })
    }
  }, [user]);

  useEffect(() => {
    getTravellers()
  }, []);

  console.log(travellers);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;