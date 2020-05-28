import React, { useState, useEffect, useReducer, Fragment } from 'react'
import CountriesList from './CountriesList'
import useCountriesAPI from '../hooks/useCountriesAPI'

const CountriesApp = () => {
  const [{ data, error }, fetchCountries] = useCountriesAPI()
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'World']

  return (
    <Fragment>

      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search..."
          onChange={e => e.target.value &&
            fetchCountries(`https://restcountries.eu/rest/v2/name/${e.target.value}`)} />

        <select
          name="region"
          onChange={e => e.target.value !== 'World'
            ? fetchCountries(`https://restcountries.eu/rest/v2/region/${e.target.value}`)
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
      {data.countries.length > 0
        ? (<CountriesList
          countries={data.countries}
          error={error}
        />)
        : (<p>Loading countries...</p>)}
    </Fragment>
  )
}

export default CountriesApp