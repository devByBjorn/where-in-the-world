import React from 'react'
import { Link } from 'react-router-dom'

const CountrySquare = ({ flag, name, population, region, capital }) => (
  <div>
    <div><img src={`${flag}`} alt={`Flag of ${name}`} /></div>
    <div>
      <h4>{name}</h4>
      <ul>
        <li>Population: {new Intl.NumberFormat().format(population)}</li>
        <li>Region: {region}</li>
        <li>Capital: {capital}</li>
      </ul>
    </div>
  </div>
)

export default CountrySquare