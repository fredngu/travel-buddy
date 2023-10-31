import React from 'react';
import LoginButton from '../api/login';
import { Auth0Provider } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const LoginForm = () => {
  return (
    <div className="login-form mx-auto mt-8 p-6 bg-white rounded-lg shadow-md max-w-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Login to Organize Your Trips</h2>
      <Auth0Provider
            domain="dev-6jhms23po3hoo2lj.us.auth0.com"
            clientId="TybkdIkTe6Yd8FMUl78uDXEy6dREGsry"
            authorizationParams={{
              redirect_uri: window.location.origin,
            }}
          >
        <Button variant="contained" size="large">
          <LoginButton/>
        </Button>
      </Auth0Provider>
    </div>
  );
};

export default LoginForm;
