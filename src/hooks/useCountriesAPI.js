import { useState, useEffect } from 'react'
import axios from 'axios'

const useCountriesAPI = () => {
  const [data, setData] = useState({ countries: [] })
  const [url, setUrl] = useState('https://restcountries.eu/rest/v2/all')
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setError(false)
      try {
        const result = await axios(url)
        setData({ countries: result.data })
      } catch {
        setError(true)
      }
    }
    fetchData()
  }, [url])

  return [{ data, error }, setUrl]
}

export default useCountriesAPI
