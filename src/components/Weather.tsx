import React from "react";

interface WeatherProps {
  weather: string;
}

const Weather: React.FC<WeatherProps> = ({ weather }) => <p>{weather}</p>;

export default Weather;
