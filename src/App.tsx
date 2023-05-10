import React from "react";

import weatherData from './data/weatherData';

import { WeatherCard, WeatherCardContent } from './components';

import "./styles/global.scss";

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <h1>Weather Widget</h1>
      <div className='weather-cards-container'>
        {weatherData.map(({ city, weather, temperature }) => (
          <WeatherCard
            key={city}
            weather={weather}>
            <WeatherCardContent
              city={city}
              weather={weather}
              temperature={temperature}
            />
          </WeatherCard>
        ))}
      </div>
    </div>
  );
};

export default App;
