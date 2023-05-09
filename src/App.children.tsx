import React from "react";

import weatherData from './data/weatherData';

import { WeatherCardChildren, WeatherCardContent } from './components';

import "./styles/App.scss";

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <h1>Weather Widget</h1>
      <div className='weather-cards-container'>
        {weatherData.map(({ city, weather, temperature }) => (
          <WeatherCardChildren key={city} weather={weather}>
            <WeatherCardContent city={city} weather={weather} temperature={temperature} />
          </WeatherCardChildren>
        ))}
      </div>
    </div>
  );
};

export default App;
