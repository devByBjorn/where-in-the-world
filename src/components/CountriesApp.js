import React, { useState, useEffect, useReducer, Fragment } from 'react'
import countriesReducer from '../reducers/countriesReducer'
import CountriesList from './CountriesList'
import CountriesContext from '../context/CountriesContext'
import fetchCountriesAPI from '../hooks/fetchCountriesAPI'
const CountriesApp = () => {

  const [{ data, error }, fetchCountries] = fetchCountriesAPI()
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

  return (
    <Fragment>
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search..."
          onChange={e => e.target.value && fetchCountries(`https://restcountries.eu/rest/v2/name/${e.target.value.toLowerCase()}`)} />

        <select
          name="region"
          onChange={e => fetchCountries(`https://restcountries.eu/rest/v2/region/${e.target.value.toLowerCase()}`)}
        >
          <option defaultValue hidden>Filter by region</option>
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
        //isLoading={isLoading}
        error={error}
      />
    </Fragment>
  )
}

export default CountriesApp