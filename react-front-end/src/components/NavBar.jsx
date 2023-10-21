import React from "react";
import "../styles/NavBar.scss";

import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "../api/login";
import LogoutButton from "../api/logout";
import Profile from "../api/profile";

function NavBar() {
  return (
    <div className="navbar navbar-dark bg-primary">
      <Auth0Provider
        domain="dev-6jhms23po3hoo2lj.us.auth0.com"
        clientId="TybkdIkTe6Yd8FMUl78uDXEy6dREGsry"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <LoginButton />
        <LogoutButton />
        <Profile />
      </Auth0Provider>
      <h1>This is the Navigation Bar</h1>
    </div>
  );
}

export default NavBar;
