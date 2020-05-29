import React, { Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'
import useMoreInfo from '../hooks/useMoreInfo'
import fetchCountriesAPI from '../hooks/useCountriesAPI'

const MoreInfo = () => {
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

  const listPrimitives = {
    nativeName,
    population: new Intl.NumberFormat().format(population),
    region,
    subregion,
    capital
  }

  // Find bordering countries full name, borders has 
  // the same format as the countries alpha3Code.
  const countries = data.countries
  let borderingCountries = []


  if (countries && borders) {
    // 1 - 2 millisecond
    countries.forEach((country) =>
      borders.find((border) =>
        border === country.alpha3Code
          ? borderingCountries.push(country.name)
          : false))

    // 1 - 2 millisecond
    // const t0 = performance.now()
    // borders.forEach((border) =>
    //   countries.find((country) =>
    //     country.alpha3Code === border
    //       ? borderingCountries.push(country.name)
    //       : false
    //   )
    // )
    // const t1 = performance.now()
    // console.log(`loop took ${t1 - t0} milliseconds.`)

    // 9-11 milliseconds
    // const t0 = performance.now()
    // for (let i = 0; i < countries.length; i++) {
    //   countries
    //     .filter((country) => country.alpha3Code === borders[i])
    //     .map((country) => borderingCountries.push(country.name))
    // }
    // const t1 = performance.now();
    // console.log(`loop took ${t1 - t0} milliseconds.`)
  }

  return (
    country
      ? (<Fragment>
        <Link to="/">Back</Link>
        <h3>{name}</h3>
        <ul>{// This can't possible be more efficient than just typing out each li
          Object.entries(listPrimitives).map((item) =>
            item[0] === 'nativeName'
              ? (<li key={nativeName}>{`Native Name : ${item[1]}`}</li>)
              : (<li key={item[0]}>{`${item[0].charAt(0).toUpperCase() + item[0].slice(1)} : ${item[1]}`}</li>)
          )
        }</ul>
        <ul>
          <li key={"top level domain"}>Top Level Domain: {topLevelDomain}</li>
          <li key={"currencies"}>Currencies:
          {<span>{currencies.map((currency) => currency.name).join(', ')}</span>}
          </li>
          <li key={"languages"}>Languages:
          {<span>{languages.map((language) => language.name).join(', ')}</span>}
          </li>
        </ul>
        <div>
          Bordering Countries:
        {borderingCountries.length > 0
            ? (
              borderingCountries.map((border) => (
                <div key={border}>
                  <Link
                    to={`/country/${border}`}>{border}</Link>
                </div>
              )))
            : (<span> No bordering countries. Could it be an island?</span>)}
        </div>
      </Fragment>)
      : (<div>...loading country</div>)
  )
}

export default MoreInfo