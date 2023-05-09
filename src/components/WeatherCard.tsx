import { Weather } from '../types/Interfaces';

import getImageSrc from './../utils/getImageSrc';

import { WeatherIcon, Temperature, City } from './';


interface WeatherCardProps {
  cityWeather: Weather;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ cityWeather: { city, temperature, weather } }) => {
  const imageSrc: string = getImageSrc(weather, 'image');

  return (
    <div className='weather-card' style={{ backgroundImage: `url(${imageSrc})` }}>
      <City name={city} />
      <WeatherIcon weather={weather} />
      <Temperature value={temperature} />
    </div>
  );
};

export default WeatherCard;