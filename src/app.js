import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './style/style.scss'
import CountriesApp from './components/CountriesApp'
import MoreInfoPage from './components/MoreInfoPage'

const App = () => (
  <MoreInfoPage />
)

//<CountriesApp />

ReactDOM.render(<App />, document.getElementById('app'))