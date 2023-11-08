import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "../styles/NavBar.scss";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const buttonStyle = {
    backgroundColor: '#9C27B0',
    color: 'white',
    padding: '10px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '-25px'
  };

  return (
    <div>
      <button onClick={() => loginWithRedirect()}  style={buttonStyle}>
        LOG IN
      </button>
    </div>
  );
};

export default LoginButton;
