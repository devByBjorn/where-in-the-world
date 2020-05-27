import { useState, useEffect } from 'react'
import axios from 'axios'

const fetchMoreInfo = (name) => {
  const [country, setCountry] = useState('')
  const [error, setError] = useState(false)

  let borders 

  if(country) {
    
  }

  useEffect(() => {
    const fetchData = async () => {
      setError(false)
      try {
        const result = await axios(`https://restcountries.eu/rest/v2/name/${name}`)
        setCountry(result.data[0])
      } catch {
        setError(true)
      }
    }
    fetchData()
  }, [])

  return [country, error]
}

export default fetchMoreInfo