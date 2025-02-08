import React from "react";
import { motion } from "framer-motion";
import { FaTemperatureHigh, FaCloud, FaMapMarkerAlt } from "react-icons/fa";

const WeatherCard = ({ city, index }) => {
  return (
    <motion.div
      className="col-md-4 mb-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="card shadow-lg border-0 rounded-lg text-center">
        <div className="card-body">
          <h2 className="card-title">
            <FaMapMarkerAlt className="text-danger" /> {city.name}
          </h2>
          <p className="card-text">
            <FaCloud className="text-primary" /> {city.weather[0].description}
          </p>
          <h4>
            <FaTemperatureHigh className="text-warning" /> {city.main.temp}°C
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherCard;
