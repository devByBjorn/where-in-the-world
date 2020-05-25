import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './style/style.scss'
import CountriesApp from './components/CountriesApp'

const App = () => (
  <CountriesApp />
)

ReactDOM.render(<App />, document.getElementById('app'))