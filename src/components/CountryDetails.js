import React from 'react';
import countriesJson from '../countries';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  let country = countriesJson.find((eachCountry) => {
    return eachCountry.cca3 === props.match.params.id;
  });
  console.log(country.borders);

  let countryBorders = country.borders.map((eachBorderCountry) => {
    return (
      <li key={eachBorderCountry}>
        <Link to={`/${eachBorderCountry}`}>{eachBorderCountry}</Link>
      </li>
    );
  });

  return (
    <div>
      <h1>{country.name.common}</h1>
      <table>
        <tbody>
          <tr>
            <th>Capital</th>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <th>Area</th>
            <td>{country.area}</td>
          </tr>
          <tr>
            <th>Borders</th>
            <td>
              <ul>{countryBorders}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
