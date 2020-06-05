import { useState, useEffect } from 'react'

const useMediaQuery = () => {
  const [mediaQuery, setMediaQuery] = useState({ height: 0, width: 0 })

  useEffect(() => {
    setMediaQuery({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }, [])

  return mediaQuery
}

export default useMediaQuery