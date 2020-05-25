import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './style/style.scss'
import CountriesList from './components/CountriesList'

const App = () => (
  <CountriesList />
)

ReactDOM.render(<App />, document.getElementById('app'))