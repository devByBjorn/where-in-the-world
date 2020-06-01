import React from 'react'
import styled from 'styled-components'
import CountryInfoBox from './CountryInfoBox'
// justify-content: center;
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
    grid-template-columns: 30rem;
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

const CountriesList = ({ countries, error }) => (
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
)

export default CountriesList