import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Header from "./components/Header";
import WeatherList from "./components/WeatherList";
import Home from "./Home";
import "./App.css";

const App = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/weatherinfo");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weatherinfo" element={<WeatherList />} />
      </Routes>
    </div>
  );
};

export default App;
