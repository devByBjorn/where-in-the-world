import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import fetchMoreInfo from '../hooks/fetchMoreInfo'
import fetchCountriesAPI from '../hooks/fetchCountriesAPI'

const MoreInfo = ({ currentCountry }) => {
  const [country] = fetchMoreInfo(currentCountry)
  const [{ data }] = fetchCountriesAPI()

  console.log(data)

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    borders,
    currencies,
    languages,
  } = country


  return (
    country
      ? (<Fragment>
        <Link to="/">Back</Link>
        <h3>{name}</h3>
        <ul>
          <li>Native name: {nativeName}</li>
          <li>Population: {new Intl.NumberFormat().format(population)}</li>
          <li>Region: {region}</li>
          <li>Subregion: {subregion}</li>
          <li>Capital: {capital}</li>
        </ul>
        <ul>
          <li>Top Level Domain: {topLevelDomain}</li>
          <li>Currencies: {currencies.map((currency) => <span>{currency.name}</span>)}</li>
          <li>Languages: {languages.map((language) => <span>{language.name}</span>)}</li>
        </ul>
        <div>
          Bordering Countries:
        {borders.map((border) => (
          <div>
            <a key={border}>{border}</a>
          </div>
        ))}
        </div>
      </Fragment>)
      : (<div>...loading country</div>)
  )
}

export default MoreInfo