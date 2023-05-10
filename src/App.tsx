import React from "react";

import weatherData from './data/weatherData';

import {
  WeatherCard,
  WeatherIcon,
  Temperature,
  City,
  WeatherName
} from './components';

import "./styles/App.scss";

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <h1>Weather Widget</h1>
      <div className='weather-cards-container'>
        {weatherData.map(({ city, weather, temperature }) => (
          <WeatherCard key={city} weather={weather}>
            <div className="weather-card-top">
              <City name={city} />
              <WeatherIcon weather={weather} />
              <WeatherName weather={weather} />
            </div>
            <div className="weather-card-bottom">
              <Temperature value={temperature} />
            </div>
          </WeatherCard>
        ))}
      </div>
    </div>
  );
};

export default App;
