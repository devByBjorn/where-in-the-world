import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Theme'
import CountriesFetch from './CountriesFetch'
import MoreInfo from './MoreInfo'
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
      <GlobalStyle />
      <Header
        toggle={toggle}
        theme={theme}
      />
      <main>
        <Switch>
          <Route exact path="/" component={CountriesFetch} />
          <Route path="/country/:name" component={MoreInfo} />
        </Switch>
      </main>
    </ThemeProvider>
  )
}

export default App