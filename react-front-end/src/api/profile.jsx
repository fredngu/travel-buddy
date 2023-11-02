import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect }from "react";
import axios from 'axios';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (user) {
      axios.post("http://localhost:3000/travellers", user)
      .then(({data})=>{
        window.sessionStorage.setItem('traveller_id', data[0].traveller_id)
      })
    }
  }, [user]);

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