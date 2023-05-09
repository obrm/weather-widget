import { Weather } from '../types/Interfaces';

import getImageSrc from '../utils/getImageSrc';

import { WeatherIcon, Temperature, City } from './';


interface WeatherCardProps {
  cityWeather: Weather;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ cityWeather: { city, temperature, weather } }) => {
  const imageSrc: string = getImageSrc(weather, 'image');

  return (
    <div className='weather-card' style={{ backgroundImage: `url(${imageSrc})` }}>
      <div className="weather-card-top">
        <City name={city} />
        <WeatherIcon weather={weather} />
      </div>
      <div className="weather-card-bottom">
        <Temperature value={temperature} />
      </div>
    </div>
  );
};

export default WeatherCard;