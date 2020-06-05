import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { userMode, designTheme } from './Theme'
import CountriesFetch from './CountriesFetch'
import CountryMoreInfo from './CountryMoreInfo'
import Header from './Header'
import ScrollUp from './ScrollUp'
import GlobalStyle from './GlobalStyle'
import useDarkMode from '../hooks/useDarkMode'

const Container = styled.div`
  margin: 0 auto;
  max-width: 90vw;
  width: 140rem;
`

const MainContent = styled.main`
  margin: 10rem 0;
`

const App = () => {
  const [theme, toggle, themeDidReload] = useDarkMode()
  const userTheme = theme === 'light' ? userMode.lightTheme : userMode.darkTheme

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
        <Container>
          <MainContent>
            <Switch>
              <Route exact path="/" component={CountriesFetch} />
              <Route path="/country/:name" component={CountryMoreInfo} />
            </Switch>
            <ScrollUp />
          </MainContent>
        </Container>
      </ThemeProvider>
    </ThemeProvider>
  )
}

export default App