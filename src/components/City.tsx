import React from "react";

interface CityProps {
  name: string;
}

const City: React.FC<CityProps> = ({ name }) => <h2>{name}</h2>;

export default City;
