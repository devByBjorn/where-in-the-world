import React, { Fragment, useState, useEffect } from 'react'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import useMoreInfo from '../hooks/useMoreInfo'
import fetchCountriesAPI from '../hooks/useCountriesAPI'

const MoreInfo = () => {
  const history = useHistory()
  const param = useParams()
  const [country] = useMoreInfo(param.name)
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

  let theBorders = []

  if (countries && borders) {
    borders.forEach((border) =>
      countries.find((country) =>
        country.alpha3Code === border
          ? theBorders.push(country.name)
          : false
      )
    )
  }

  return (
    country
      ? (<Fragment>
        <Link to="/">Back</Link>
        <h3>{name}</h3>
        <ul>
          <li key={"native name"}>Native name: {nativeName}</li>
          <li key={"population"}>Population: {new Intl.NumberFormat().format(population)}</li>
          <li key={"region"}>Region: {region}</li>
          <li key={"subregion"}>Subregion: {subregion}</li>
          <li key={"capital"}>Capital: {capital}</li>
        </ul>
        <ul>
          <li key={"top level domain"}>Top Level Domain: {topLevelDomain}</li>
          <li key={"currencies"}>Currencies: {currencies.map((currency) => <span>{currency.name}</span>)}</li>
          <li key={"languages"}>Languages: {languages.map((language) => <span>{language.name}</span>)}</li>
        </ul>
        <div>
          Bordering Countries:
        {theBorders.length > 0
            ? (
              theBorders.map((border) => (
                <div key={border}>
                  <Link
                    to={`/country/${border}`}>{border}</Link>
                </div>
              )))
            : (<span> No bordering countries</span>)}
        </div>
      </Fragment>)
      : (<div>...loading country</div>)
  )
}

export default MoreInfo