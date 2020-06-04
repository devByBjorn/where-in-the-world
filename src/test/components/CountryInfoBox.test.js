import React from "react"
import ReactDOM from "react-dom"
import { shallow } from 'enzyme'
import CountryInfoBox from '../../components/CountryInfoBox'

const country = {
  flag: 'https://restcountries.eu/data/afg.svg',
  name: 'Afghanistan',
  population: 27657145,
  region: 'Asia',
  capital: 'Kabul',
}

const { flag, name, population, region, capital } = country

let wrapper

beforeEach(() => {
  wrapper = shallow(
    <CountryInfoBox
      flag={flag}
      name={name}
      population={population}
      region={region}
      capital={capital}
    />)
})

test('should render <CountryInfoBox/> with data', () => {
  expect(wrapper).toMatchSnapshot()
})
