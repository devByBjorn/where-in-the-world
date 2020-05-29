import React, { useState, useEffect, useReducer, Fragment } from 'react'
import CountriesList from './CountriesList'
import useCountriesAPI from '../hooks/useCountriesAPI'
import FiltersForm from './FiltersForm'

const CountriesApp = () => {
  const [{ data, error }, fetchCountries] = useCountriesAPI()

  return (
    <Fragment>
      <FiltersForm
        onChangeInput={e => e.target.value
          ? fetchCountries(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
          : fetchCountries('https://restcountries.eu/rest/v2/all')
        }
        onChangeSelect={e => e.target.value !== 'World'
          ? fetchCountries(`https://restcountries.eu/rest/v2/region/${e.target.value}`)
          : fetchCountries('https://restcountries.eu/rest/v2/all')}
      />

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

