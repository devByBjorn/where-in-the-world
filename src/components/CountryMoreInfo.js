import React, { Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'
import useMoreInfo from '../hooks/useMoreInfo'
import fetchCountriesAPI from '../hooks/useCountriesAPI'

const CountryMoreInfo = () => {
  const param = useParams()
  const [country] = useMoreInfo(param.name)
  const [{ data }] = fetchCountriesAPI()

  const { countries } = data

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
    flag,
  } = country

  const listPrimitives = {
    nativeName,
    population: new Intl.NumberFormat().format(population),
    region,
    subregion,
    capital
  }

  // Find bordering countries full name, borders has 
  // the same format as the countries alpha3Code.
  let borderingCountries = []

  if (countries && borders) {
    countries.forEach((country) =>
      borders.find((border) =>
        border === country.alpha3Code
          ? borderingCountries.push(country.name)
          : false))
  }

  return (
    country &&
    <Fragment>
      <Link to="/">Back</Link>
      <div>
        <img src={flag} alt={`flag of ${name}`} />
      </div>
      <h3>{name}</h3>
      <ul>{// This can't possible be more efficient than just typing out each li
        Object.entries(listPrimitives).map((item) =>
          item[0] === 'nativeName'
            ? (<li key={nativeName}>{`Native Name: ${item[1]}`}</li>)
            : (<li key={item[0]}>{`${item[0].charAt(0).toUpperCase() + item[0].slice(1)}: ${item[1]}`}</li>)
        )
      }</ul>
      <ul>
        <li key={"top level domain"}>Top Level Domain: {topLevelDomain}</li>
        <li key={"currencies"}>Currencies:
          {<span> {currencies.map((currency) => currency.name).join(', ')}</span>}
        </li>
        <li key={"languages"}>Languages:
          {<span> {languages.map((language) => language.name).join(', ')}</span>}
        </li>
      </ul>
      <div>
        Bordering Countries:
        {borderingCountries.length > 0
          ? (
            borderingCountries.map((border) => (
              <div key={border}>
                <Link to={`/country/${border}`}>{border}</Link>
              </div>
            )))
          : (<span> No bordering countries. Could it be an island?</span>)}
      </div>
    </Fragment>
  )
}

export default CountryMoreInfo