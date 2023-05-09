import React from 'react';
import { City, WeatherIcon, WeatherName, Temperature } from './';

interface WeatherCardContentProps {
  city: string;
  weather: string;
  temperature: number;
}

const WeatherCardContent: React.FC<WeatherCardContentProps> = ({ city, weather, temperature }) => (
  <>
    <div className="weather-card-top">
      <City name={city} />
      <WeatherIcon weather={weather} />
      <WeatherName weather={weather} />
    </div>
    <div className="weather-card-bottom">
      <Temperature value={temperature} />
    </div>
  </>
);

export default WeatherCardContent;
