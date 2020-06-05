import React, { Fragment } from 'react'
import CountriesList from './CountriesList'
import useCountriesAPI from '../hooks/useCountriesAPI'
import FiltersForm from './FiltersForm'
import Spinner from './Spinner'


const CountriesFetch = () => {
  const [{ data, error, }, fetchCountries] = useCountriesAPI()
  const { countries } = data

  return (
    <Fragment>
      <FiltersForm
        onChangeInput={e => e.target.value
          ? fetchCountries(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
          : fetchCountries('https://restcountries.eu/rest/v2/all')
        }
        onChangeSelect={e => e.target.innerText !== 'World'
          ? fetchCountries(`https://restcountries.eu/rest/v2/region/${e.target.innerText}`)
          : fetchCountries('https://restcountries.eu/rest/v2/all')}
      />

      {countries.length > 0
        ? (<CountriesList
          countries={countries}
          error={error}
        />)
        : (<Spinner />)}
    </Fragment>
  )
}

export default CountriesFetch
