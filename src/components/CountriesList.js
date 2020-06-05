import React, { Fragment } from 'react'
import styled from 'styled-components'
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
            <GridListItem key={name}>
              <CountryInfoBox
                flag={flag}
                name={name}
                population={population}
                region={region}
                capital={capital}
              />
            </GridListItem>
          ))}
      </GridListContainer>
      {scrollPositon.top > 20 && <ScrollUp />}
    </Fragment>
  )
}

export default CountriesList


const GridListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8rem;
  justify-content: center;
  list-style-type: none;

  @media (max-width: 1410px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1025px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 720px) {
    grid-template-columns: 27rem;
  }
`

const GridListItem = styled.li`
  background: ${({ theme }) => theme.elementBg};
  transition: transform .3s ease-in;

  @media (min-width: 1025px) {
    &:hover {
      transform: scale(1.05)
    }
  }
`