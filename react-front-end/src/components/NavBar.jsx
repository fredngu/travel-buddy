import React from 'react';
import '../styles/NavBar.scss'

import { Auth0Provider } from '@auth0/auth0-react';
import LoginButton from '../api/login';
import LogoutButton from '../api/logout';
import Profile from '../api/profile';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul>
        <Auth0Provider
          domain="dev-6jhms23po3hoo2lj.us.auth0.com"
          clientId="TybkdIkTe6Yd8FMUl78uDXEy6dREGsry"
          authorizationParams={{
          redirect_uri: window.location.origin
          }}
        >
        <li className="nav-item">
          <LoginButton />
        </li>
        <li className="nav-item">
          <LogoutButton />
        </li>
        <li className="nav-item">
          <Profile />
        </li>
          </Auth0Provider>
        </ul>
    </nav>
  );
}

export default NavBar;