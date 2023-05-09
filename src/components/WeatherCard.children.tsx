import React from "react";

import { Weather } from '../types/Interfaces';

interface WeatherCardProps {
  children: React.ReactNode;
  cityWeather: Weather;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ children, cityWeather: { weather } }) => {
  return (
    <div className='weather-card' style={{ backgroundImage: `/assets/weather-images/${weather}.jpg` }}>
      {children}
    </div>);
};

export default WeatherCard;