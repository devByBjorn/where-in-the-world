import React, { Fragment, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './components/Theme'
// import 'normalize.css/normalize.css'
import './style/style.scss'
import CountriesPage from './components/CountriesPage'
import MoreInfoPage from './components/MoreInfoPage'
import Header from './components/Header'
import GlobalStyle from './components/GlobalStyle'
import ToggleTheme from './components/ToggleTheme'
import useDarkMode from './hooks/useDarkMode'

const App = () => {
  const [theme, toggle, themeDidReload] = useDarkMode()
  const userTheme = theme === 'light' ? lightTheme : darkTheme

  if (!themeDidReload) {
    return <div />
  }

  return (
    <ThemeProvider theme={userTheme}>
      <GlobalStyle />
      <Fragment>
        <Header />
        <ToggleTheme toggle={toggle} theme={theme} />
        <main>
          <Switch>
            <Route exact path="/" component={CountriesPage} />
            <Route path="/country/:name" component={MoreInfoPage} />
          </Switch>
        </main>
      </Fragment>
    </ThemeProvider>
  )
}

//<CountriesApp />

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'))