import React, { Fragment } from 'react'
import CountrySquare from './CountrySquare'

const CountriesList = ({ countries, error }) => (
  <ul>
    {error
      ? <p>No country by that name...</p>
      : countries.map(({ flag, name, population, region, capital }) => (
        <li key={name}>
          <CountrySquare
            flag={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
        </li>
      ))}
  </ul>
)

export default CountriesList