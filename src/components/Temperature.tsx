import React from "react";

interface TemperatureProps {
  value: number;
}

const Temperature: React.FC<TemperatureProps> = ({ value }) => <p>{value}°F</p>;

export default Temperature;
