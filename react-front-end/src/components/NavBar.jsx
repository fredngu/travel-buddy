import React from 'react';
import { AppBar, Toolbar, Button, Typography, Container } from '@mui/material';
import { Auth0Provider } from '@auth0/auth0-react';
import LoginButton from '../api/login';
import LogoutButton from '../api/logout';
import Profile from '../api/profile';
import '../styles/NavBar.scss';

function NavBar() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
