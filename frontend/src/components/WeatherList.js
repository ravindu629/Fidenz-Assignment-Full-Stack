import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

const CACHE_KEY = "weatherData";
const CACHE_EXPIRATION = 300000; // 5 minutes

const WeatherList = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      // Check if cached data exists and is still valid
      const cachedData = localStorage.getItem(CACHE_KEY);
      const cachedTime = localStorage.getItem(`${CACHE_KEY}_time`);
      const now = Date.now();

      if (cachedData && cachedTime && now - cachedTime < CACHE_EXPIRATION) {
        // Use cached data
        setWeatherData(JSON.parse(cachedData));
        setLoading(false);
        return;
      }

      try {
        // Fetch new data from API if cache is expired or doesn't exist
        const response = await axios.get("http://localhost:5000/weather");
        setWeatherData(response.data.list);

        // Store fetched data and current timestamp in localStorage
        localStorage.setItem(CACHE_KEY, JSON.stringify(response.data.list));
        localStorage.setItem(`${CACHE_KEY}_time`, now);
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
