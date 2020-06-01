import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, designTheme } from './Theme'
import CountriesFetch from './CountriesFetch'
import CountryMoreInfo from './CountryMoreInfo'
import Header from './Header'
import GlobalStyle from './GlobalStyle'
import useDarkMode from '../hooks/useDarkMode'
import '../style/style.scss'

const App = () => {
  const [theme, toggle, themeDidReload] = useDarkMode()
  const userTheme = theme === 'light' ? lightTheme : darkTheme

  if (!themeDidReload) {
    return <div />
  }

  return (
    <ThemeProvider theme={userTheme}>
      <ThemeProvider theme={designTheme}>
        <GlobalStyle />
        <Header
          toggle={toggle}
          theme={theme}
        />
        <main>
          <Switch>
            <Route exact path="/" component={CountriesFetch} />
            <Route path="/country/:name" component={CountryMoreInfo} />
          </Switch>
        </main>
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default App