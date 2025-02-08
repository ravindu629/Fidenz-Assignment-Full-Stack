import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="btn btn-light  d-flex align-items-center gap-2"
    >
      <h4>Log In</h4>
    </button>
  );
};

export default LoginButton;
