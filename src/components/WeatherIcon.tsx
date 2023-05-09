import React from "react";

import getImageSrc from './../utils/getImageSrc';

interface WeatherIconProps {
  weather: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ weather }) => {
  const iconSrc: string = getImageSrc(weather, 'icon');

  return <img src={iconSrc} alt={weather} className="weather-icon" />;
};

export default WeatherIcon;
