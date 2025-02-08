import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-primary text-white">
      <h1 className="m-0">🌤️ Weather App</h1>
      <div>{!isAuthenticated ? <LoginButton /> : <LogoutButton />}</div>
    </header>
  );
};

export default Header;
