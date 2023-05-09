import React from "react";

import { Weather } from '../types/Interfaces';

import getImageSrc from '../utils/getImageSrc';

interface WeatherCardProps {
  children: React.ReactNode;
  weather: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ children, weather }) => {
  const imageSrc: string = getImageSrc(weather, 'image');

  return (
    <div className='weather-card' style={{ backgroundImage: `url(${imageSrc})` }}>
      {children}
    </div>);
};

export default WeatherCard;