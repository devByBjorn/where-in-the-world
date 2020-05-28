import React, { Fragment, useState, useEffect } from 'react'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import fetchMoreInfo from '../hooks/fetchMoreInfo'
import fetchCountriesAPI from '../hooks/fetchCountriesAPI'

const MoreInfo = () => {
  const history = useHistory()
  const param = useParams()
  const [country] = fetchMoreInfo(param.name)
  const [{ data }] = fetchCountriesAPI()

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

  const countries = data.countries
  let borderCountries = []

  if (countries && borders) {
    for (let i = 0; i < countries.length; i++) {
      countries
        .filter((country) => country.alpha3Code === borders[i])
        .map((country) => borderCountries.push(country.name))
    }
  }


  return (
    country
      ? (<Fragment>
        <Link to="/">Countries</Link>
        <h3>{name}</h3>
        <ul>
          <li key="native name">Native name: {nativeName}</li>
          <li key="population">Population: {new Intl.NumberFormat().format(population)}</li>
          <li key="region">Region: {region}</li>
          <li key="subregion">Subregion: {subregion}</li>
          <li key="capital">Capital: {capital}</li>
        </ul>
        <ul>
          <li key="top level domain">Top Level Domain: {topLevelDomain}</li>
          <li key="currencies">Currencies: {currencies.map((currency) => <span>{currency.name}</span>)}</li>
          <li key="languages">Languages: {languages.map((language) => <span>{language.name}</span>)}</li>
        </ul>
        <div>
          Bordering Countries:
        {borders ? (
            borderCountries.map((border) => (
              <div>
                <Link
                  to={`/country/${border}`} key={border}>{border}</Link>
              </div>
            )))
            : 'No bordering countries'}
        </div>
      </Fragment>)
      : (<div>...loading country</div>)
  )
}

export default MoreInfo