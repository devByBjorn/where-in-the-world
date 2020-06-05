import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Container, MainContent } from './appStyled'
import { userMode, designTheme } from './themes'
import CountriesFetch from './CountriesFetch'
import CountryMoreInfo from './CountryMoreInfo'
import Header from './Header'
import GlobalStyles from './GlobalStyles'
import useDarkMode from '../hooks/useDarkMode'

const App = () => {
  const [theme, toggle, themeDidReload] = useDarkMode()
  const userTheme = theme === 'light' ? userMode.lightTheme : userMode.darkTheme

  if (!themeDidReload) {
    return <div />
  }

  return (
    <ThemeProvider theme={userTheme}>
      <ThemeProvider theme={designTheme}>
        <GlobalStyles />
        <Header
          toggle={toggle}
          theme={theme}
        />
        <Container>
          <MainContent>
            <Switch>
              <Route exact path="/" component={CountriesFetch} />
              <Route path="/country/:name" component={CountryMoreInfo} />
            </Switch>
          </MainContent>
        </Container>
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default App