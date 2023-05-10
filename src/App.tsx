import React from "react";

import weatherData from './data/weatherData';

import { WeatherCard } from './components';

import "./styles/global.scss";

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <h1>Weather Widget</h1>
      <div className='weather-cards-container'>
        {weatherData.map((cityWeather) => (
          <WeatherCard key={cityWeather.city} cityWeather={cityWeather} />
        ))}
      </div>
    </div>
  );
};

export default App;
