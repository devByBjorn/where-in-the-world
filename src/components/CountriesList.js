import React, { Fragment } from 'react'
import { GridListContainer, GridListItem } from './countriesListStyled'
import useScrollPosition from '../hooks/useScrollPosition'
import CountryInfoBox from './CountryInfoBox'
import ScrollUp from './ScrollUp'

const CountriesList = ({ countries, error }) => {
  const scrollPositon = useScrollPosition()

  return (
    <Fragment>
      <GridListContainer>
        {error
          ? <p>No country by that name...</p>
          : countries.map(({ flag, name, population, region, capital }) => (
            population > 0
              ? (<GridListItem key={name}>
                <CountryInfoBox
                  flag={flag}
                  name={name}
                  population={population}
                  region={region}
                  capital={capital}
                />
              </GridListItem>)
              : null
          ))}
      </GridListContainer>
      {scrollPositon.top > 20 && <ScrollUp />}
    </Fragment>
  )
}

export default CountriesList



