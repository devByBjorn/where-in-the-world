import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './style/style.scss'
import CountriesPage from './components/CountriesPage'
import CountriesApp from './components/CountriesApp'
import MoreInfo from './components/MoreInfo'

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={CountriesPage} />
      <Route path="/country/:name" component={MoreInfo} />
    </Switch>
  </main>
)

//<CountriesApp />

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'))