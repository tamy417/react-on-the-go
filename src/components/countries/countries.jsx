import React, { use } from "react";
import Country from "./country/country";

const Countries = ({ fetchCountries }) => {
  const countriesData = use(fetchCountries);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <h1>In the Countries: {countries.length}</h1>
      {countries.map((country) => (
        <Country key={country.cca3.cca3} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
