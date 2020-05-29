import { useState, useEffect } from 'react'

const useDarkMode = () => {
  const [theme, setTheme] = useState('light')
  const [themeDidReload, setThemeDidReload] = useState(false)

  const setUserTheme = userTheme => {
    window.localStorage.setItem('theme', userTheme)
    setTheme(userTheme)
  }

  const toggle = () => {
    theme === 'light'
      ? setUserTheme('dark')
      : setUserTheme('light')
  }

  useEffect(() => {
    const storageTheme = window.localStorage.getItem('theme')

    window.matchMedia
      && window.matchMedia('(prefers-color-scheme: dark)').matches
      && !storageTheme

      ? setUserTheme('dark')
      : storageTheme
        ? setTheme(storageTheme)
        : setUserTheme('light')

    setThemeDidReload(true)
  }, [])

  return [theme, toggle, themeDidReload]
}

export default useDarkMode