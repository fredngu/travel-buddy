import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import HotelSearchPage from './components/hotels/HoteSearchPage';

import heroImage from './images/hero-image.jpg';
import logo from './images/TravelBuddyLogo.png';

function App() {
  return (
    <div className="App">
      <NavBar />
      <img
        src={heroImage}
        alt="Hero"
        className="img-fluid"
        style={{ width: '100%', height: '500px' }}
      />
      <LoginForm />       
      <img
        src={logo}
        alt="Log Travel Buddy"
        className="img-fluid mx-auto my-4"
      />
      <HotelSearchPage />
    </div>
  );
}

export default App;