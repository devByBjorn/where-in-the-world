import { useState, useEffect } from 'react'

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({ top: 0 })

  useEffect(() => {
    const handleScrollMove = () => {
      setScrollPosition({ top: window.scrollY })
    }
    document.addEventListener('scroll', handleScrollMove)

    return () => {
      document.removeEventListener('scroll', handleScrollMove)
    }
  }, [])


  return scrollPosition
}

export default useScrollPosition