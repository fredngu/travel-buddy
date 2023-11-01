//Home Route
import LoginForm from "../components/LoginForm";
import { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";

export function Home() {
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const traveller_id = window.sessionStorage.getItem('traveller_id');
    if (traveller_id) {
      setauthenticated(traveller_id);
    }
  }, [authenticated])
  if (authenticated) {
    return <Navigate replace to="/trips" />
  } else {
    return (
      <div>
        <LoginForm />
      </div>
    )
  }

}