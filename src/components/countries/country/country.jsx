const Country = ({ country }) => {
  console.log(country);
  return (
    <div className="card-style">
      <div className="card-style">
        <h2>Common Name: {country.name.common}</h2>
        <h2>Official Name: {country.name.official}</h2>
        <p>Population: {country.population.population}</p>
        <p>
          Region:
          {country.region.region}
        </p>
      </div>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
    </div>
  );
};

export default Country;
