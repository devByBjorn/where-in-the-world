import React from 'react'
const CountryInfoSquare = ({ flag, name, population, region, capital }) => {

  return (
    <div>
      <div><img src={`${flag}`} alt={`Flag of ${name}`} /></div>
      <div>
        <h4>{name}</h4>
        <ul>
          <li>Population: {population}</li>
          <li>Region: {region}</li>
          <li>Capital: {capital}</li>
        </ul>
      </div>
    </div>
  )
}

export default CountryInfoSquare