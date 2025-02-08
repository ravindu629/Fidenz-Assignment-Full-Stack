import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import WeatherCard from "./WeatherCard";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

const WeatherList = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get("http://localhost:5000/weather");
        setWeatherData(response.data.list);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="container">
      <div className="row m-3">
        {loading && <Loading />}
        {error && <ErrorMessage message={error} />}
        {!loading &&
          !error &&
          weatherData.map((city, index) => (
            <WeatherCard key={city.id} city={city} index={index} />
          ))}
      </div>
    </div>
  );
};

export default WeatherList;
