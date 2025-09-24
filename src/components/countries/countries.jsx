import React, { use, useState } from "react";
import Country from "./country/country";
import "./countries.css";

const Countries = ({ fetchCountries }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };
  const countriesData = use(fetchCountries);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <h1>In the Countries: {countries.length}</h1>
      <h3>Total visited countries:{visitedCountries.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <h3>Total Visited Flags:{visitedFlags.length}</h3>
      <div className="visited-flags">
        {visitedFlags.map((flags) => (
          <img src={flags} />
        ))}
      </div>
      <div className="grid">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
