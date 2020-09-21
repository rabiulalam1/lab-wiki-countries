import React from 'react';
import { Link } from 'react-router-dom';
import countriesJson from '../countries';

function CountriesList(props) {
  let countryLinks = countriesJson.map((eachCountry) => {
    return (
      <li key={eachCountry.cca3}>
        <Link to={`/${eachCountry.cca3}`}>{eachCountry.name.common}</Link>
      </li>
    );
  });
  return (
    <div>
      <nav>
        <ul>{countryLinks}</ul>
      </nav>
    </div>
  );
}
export default CountriesList;
