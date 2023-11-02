//Home Route
import LoginForm from "../components/LoginForm";
import { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import heroImage from '../images/main-hero.jpg';

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
        <img src={heroImage} alt="HeroImage" className="w-full" />
        <div style={{ background: '#9C27B0' }} className="p-4 text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to Travel Buddy</h1>
          <p className="text-lg">Discover amazing trips and organize your dream vacation today!</p>
        </div>
        <LoginForm />
      </div>
    )
  }
}