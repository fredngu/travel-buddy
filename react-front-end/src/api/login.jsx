import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "../styles/NavBar.scss";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="link">
      <button onClick={() => loginWithRedirect()}>LOG IN</button>
    </div>
  );
};

export default LoginButton;
