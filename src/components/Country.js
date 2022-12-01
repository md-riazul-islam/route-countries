import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Country.css";

const Country = () => {
  const country = useLoaderData()[0];
  console.log(country);
  return (
    <div className="card">
      <h1>Name : {country.name.common}</h1>
      <img className="country-img" src={country.flags.png} alt="" />
      <img className="country-image" src={country.coatOfArms.png} alt="" />
      <h3>Capital: {country.capital}</h3>
      <p>
        <small>Area : {country.area}</small>
      </p>
    </div>
  );
};

export default Country;
