import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-8bh2rldwe8ab77wh.us.auth0.com"
    clientId="8nUV89PlCkGfM25Fa8ZTBdSY5vmWfb0c"
    authorizationParams={{
      redirect_uri: window.location.origin + "/weatherinfo",
    }}
  >
    <Router>
      <App />
    </Router>
  </Auth0Provider>
);
