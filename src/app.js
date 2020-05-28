import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './style/style.scss'
import CountriesPage from './components/CountriesPage'
import CountriesApp from './components/CountriesApp'
import MoreInfoPage from './components/MoreInfoPage'

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={CountriesPage} />
      <Route path="/country/:name" component={MoreInfoPage} />
    </Switch>
  </main>
)

//<CountriesApp />

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'))