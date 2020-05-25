import React, { useState, useEffect, useReducer, Fragment } from 'react'
import countriesReducer from '../reducers/countriesReducer'
import CountriesList from './CountriesList'
import CountriesContext from '../context/CountriesContext'
import fetchCountriesAPI from '../hooks/fetchCountriesAPI'
const CountriesApp = () => {

  const [{ data, error, url }, fetchCountries] = fetchCountriesAPI()
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'World']

  return (
    <Fragment>
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search..."
          onChange={e => e.target.value &&
            fetchCountries(`https://restcountries.eu/rest/v2/name/${e.target.value.toLowerCase()}`)} />

        <select
          name="region"
          onChange={e => e.target.value !== 'World'
            ? fetchCountries(
              `https://restcountries.eu/rest/v2/region/${e.target.value.toLowerCase()}`)
            : fetchCountries('https://restcountries.eu/rest/v2/all')
          }
        >
          <option value="World" defaultValue>Filter by region</option>
          {regions.map((region) => (
            <option
              key={region}
              value={region}
            >{region}</option>
          ))}
        </select>
      </form>
      <CountriesList
        countries={data.countries}
        error={error}
      />
    </Fragment>
  )
}

export default CountriesApp