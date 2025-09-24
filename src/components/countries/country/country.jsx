import { useState } from "react";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false);

  //   console.log(country);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    <div
      className={`card-style ${visited ? `country-visited` : `not-visited`} `}
    >
      <div>
        <h2>Common Name: {country.name.common}</h2>
        <h2>Official Name: {country.name.official}</h2>
        <p>Population: {country.population.population}</p>
        <p>
          Region:
          {country.region.region}
        </p>
      </div>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big country" : "Small country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button
        onClick={() => {
          handleVisitedFlags(country.flags.flags.png);
        }}
      >
        Add visited flag
      </button>
    </div>
  );
};

export default Country;
