import React from "react";
import { AppBar, Toolbar, Button, Typography, Container } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import LoginButton from "../api/login";
import LogoutButton from "../api/logout";
import Profile from "../api/profile";
import Logo from "../images/TravelBuddyLogo.png";
import "../styles/NavBar.scss";
import { mockData as itineraryData } from "../mockData/mockItineraryData";
import { useAuth0 } from "@auth0/auth0-react";


function NavBar() {
  const { isAuthenticated } = useAuth0();
  const location = useLocation();

  // Define a function to check if a link is active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src={Logo}
              alt="Logo"
              className="logo"
              style={{ maxWidth: 100, maxHeight: 50 }}
            />
          </Link>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            Travel Buddy
          </Typography>
          <Button color="inherit">
            <Link
              to="/"
              className={`link ${isActiveLink("/") ? "selected" : ""}`}
            >
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/trips"
              className={`link ${isActiveLink("/trips") ? "selected" : ""}`}
            >
              Trips
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/flight"
              className={`link ${isActiveLink("/flight") ? "selected" : ""}`}
            >
              Flight
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/hotel"
              state={{ itineraryData: itineraryData }}
              className={`link ${isActiveLink("/hotel") ? "selected" : ""}`}
            >
              Hotel
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              to="/trip_summary"
              className={`link ${isActiveLink("/trip_summary") ? "selected" : ""}`}
            >
              Trip Summary
            </Link>
            </Button>
              {!isAuthenticated ? (
            <Button color="inherit">
              <LoginButton />
            </Button>
          ) : (
            <Button color="inherit">
              <LogoutButton />
            </Button>
          )}
          <Profile />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;