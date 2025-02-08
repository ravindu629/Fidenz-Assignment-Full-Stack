const express = require("express");
const axios = require("axios");
const NodeCache = require("node-cache");
const fs = require("fs");

const router = express.Router();
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const cache = new NodeCache({ stdTTL: 300 }); // Cache expiration: 5 minutes

// Read city codes from JSON file
const citiesData = JSON.parse(fs.readFileSync("cities.json", "utf8"));
const cityIds = citiesData.List.map((city) => city.CityCode).join(",");

// Weather API route
router.get("/", async (req, res) => {
  const cachedData = cache.get("weatherData");
  if (cachedData) {
    return res.json(cachedData);
  }
  try {
    const response = await axios.get(
      "http://api.openweathermap.org/data/2.5/group",
      {
        params: { id: cityIds, units: "metric", appid: WEATHER_API_KEY },
      }
    );
    const weatherData = response.data;
    cache.set("weatherData", weatherData);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

module.exports = router;
