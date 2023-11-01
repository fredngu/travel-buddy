import React from "react";
import { AppBar, Toolbar, Button, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "../api/login";
import LogoutButton from "../api/logout";
import Profile from "../api/profile";
import Logo from "../images/TravelBuddyLogo.png";
import "../styles/NavBar.scss";
import { mockData as itineraryData } from "../mockData/mockItineraryData";

function NavBar() {

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
          <Auth0Provider
            domain="dev-6jhms23po3hoo2lj.us.auth0.com"
            clientId="TybkdIkTe6Yd8FMUl78uDXEy6dREGsry"
            authorizationParams={{
              redirect_uri: window.location.origin,
            }}
          >
              <Button color="inherit">
                <Link
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                  Home
                </Link>
              </Button>
            <Button color="inherit">
              <Link
                to="/trips"
                style={{ textDecoration: "none", color: "white" }}
              >
                Trips
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                to="/flight"
                style={{ textDecoration: "none", color: "white" }}
              >
                Flight
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                to="/hotel"
                state={{ itineraryData: itineraryData }}
                style={{ textDecoration: "none", color: "white" }}
              >
                Hotel
              </Link>
            </Button>
            <Button color="inherit">
              <Link
                to="/trip_summary"
                style={{ textDecoration: "none", color: "white" }}
              >
                Trip Summary
              </Link>
            </Button>
            <Button color="inherit">
              <LoginButton />
            </Button>
            <Button color="inherit">
              <LogoutButton />
            </Button>
            <Button color="inherit">
              <Profile />
            </Button>
          </Auth0Provider>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
