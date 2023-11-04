import React from 'react';
import LoginButton from '../api/login';
import { Button } from '@mui/material';

const LoginForm = () => {
  return (
    <div>
      <div className="login-form mx-auto mt-8 p-6 bg-white rounded-lg shadow-md max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Login to Organize Your Trips</h2>

        <Button variant="contained" size="large">
          <LoginButton />
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
