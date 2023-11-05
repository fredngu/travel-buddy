import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import "../styles/NavBar.scss";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="link" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      <strong>LOG OUT</strong>
    </button>
  );
};

export default LogoutButton;