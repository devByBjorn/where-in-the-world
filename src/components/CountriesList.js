import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import CountryInfoSquare from './CountryInfoSquare'

const CountriesList = () => {
  const [data, setData] = useState({ countries: [] })
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const [region, setRegion] = useState('')


  useEffect(() => {
    const fetchData = async () => {
      try {
        let url
        if (search) {
          url = `https://restcountries.eu/rest/v2/name/${search}`
        } else if (region) {
          url = `https://restcountries.eu/rest/v2/region/${region}`
        } else {
          url = `https://restcountries.eu/rest/v2/all`
        }
        const result = await axios(url)
        setData({ countries: result.data })
        setError('')

      } catch {
        setError('That\'s not a country...')
      }
    }
    fetchData()

  }, [search, region])

  const onChangeCountry = (value) => setSearch(value)
  const onChangeRegion = (value) => setRegion(value)
  const { countries } = data
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  return (
    <Fragment>
      <input
        type="text"
        value={search}
        placeholder="Search..."
        onChange={e => onChangeCountry(e.target.value)} />

      <select
        name="region"
        onChange={e => onChangeRegion(e.target.value)}
      >
        {regions.map((region) => (
          <option key={region} value={region}>{region}</option>
        ))}
      </select>
      <ul>

        {error
          ? <p>{error}</p>
          : countries.map(({ flag, name, population, region, capital }) => (
            <li key={name}>
              <CountryInfoSquare
                flag={flag}
                name={name}
                population={population}
                region={region}
                capital={capital}
              />
            </li>
          ))}
      </ul>
    </Fragment>
  )
}

export default CountriesList