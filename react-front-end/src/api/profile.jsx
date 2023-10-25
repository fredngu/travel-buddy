import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState }from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [ travellers, setTravellers ] = useState([]);

  const getTravellers = async () => {
    try {
      const response = await fetch("http://localhost:3000/travellers")
      const travellerData = await response.json()
      console.log(travellerData)
      setTravellers(travellerData)
    } catch (err) {
      console.error(err.message);
    }
  }

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
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;