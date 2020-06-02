import React, { Fragment } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import useMoreInfo from '../hooks/useMoreInfo'
import fetchCountriesAPI from '../hooks/useCountriesAPI'
import IconFA from './IconFA'
import { arrowLeft } from '../icons/iconsLib'

const MoreInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
  max-height: 120rem; 
  max-width: 90vw;
  padding: 2rem 0;
  width: 140rem;

  @media (max-width: 720px) {
    flex-direction: column;
    max-width: 95vw;
  }
`
const MoreInfoItem = styled.div`
  flex: 1;
  max-width: 65rem;
`

const LinkStyled = styled(Link)`
  color: ${({ theme }) => theme.text};
  display: block;
  text-decoration: none;
  width: 100%;
`

const Button = styled.div.attrs(props => ({
  borderRadius: props.borderRadius || '2px',
  margin: props.margin || '5px',
  padding: props.padding || '1rem',
  width: props.width || 'auto',
}))`
  background: ${({ theme }) => theme.elementBg};
  border-radius: ${props => props.borderRadius};
  -moz-box-shadow: ${({ theme }) => theme.boxShadow};
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: inline-block;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  text-align: center;
  transition: all .2s ease;
  width: ${props => props.width};

  &:hover {
    cursor: pointer;
    transform: scale(1.03);
  }
`

const FlagImg = styled.img`
  height: auto;
  width: 100%;
`

const FactsSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`

const FactsContainer = styled.div`
  display:flex;
  justify-content: space-between;
`
const FactsContent = styled.div`
  width: 80%;
`

const FactsHeading = styled.h3`
  font-size: ${({ theme }) => theme.typogrophy.xlTypo};
  padding-bottom: ${({ theme }) => theme.padding.xlPadding};
`
const FactListsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const FactsList = styled.ul`
  list-style-type: none;
`

const FactsListItem = styled.li`
  padding-bottom: ${({ theme }) => theme.padding.smallPadding};
`

const BoldSpan = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.largeWeight};
  padding-right: ${({ theme }) => theme.padding.smallPadding};
`

const BorderingContainer = styled.div`
  displa: flex;
  align-items: center;
  flex-wrap: wrap;
  whidth: 100%,
  white-space: none;
`

const CountryMoreInfo = () => {
  const param = useParams()
  const [country] = useMoreInfo(param.name)
  const [{ data }] = fetchCountriesAPI()

  const { countries } = data

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    borders,
    currencies,
    languages,
    flag,
  } = country

  const listPrimitives = {
    nativeName,
    population: new Intl.NumberFormat().format(population),
    region,
    subregion,
    capital
  }

  // Find bordering countries full name, borders has 
  // the same format as the countries alpha3Code.
  let borderingCountries = []

  if (countries && borders) {
    countries.forEach((country) =>
      borders.find((border) =>
        border === country.alpha3Code
          ? borderingCountries.push(country.name)
          : false))
  }

  return (
    country &&
    <Fragment>
      <Button
        borderRadius="5px"
        margin="4rem 0"
        width="15rem"
      >
        <LinkStyled
          to="/">{<IconFA icon={arrowLeft} />} Back</LinkStyled>
      </Button>
      <MoreInfoContainer>
        <MoreInfoItem>
          <div>
            <FlagImg src={flag} alt={`flag of ${name}`} />
          </div>
        </MoreInfoItem>
        <MoreInfoItem>
          <FactsSection>
            <FactsContainer>
              <FactsContent>
                <FactsHeading>{name}</FactsHeading>
                <FactListsContainer>
                  <FactsList>{// This can't possible be more efficient than just typing out each li
                    Object.entries(listPrimitives).map((item) =>
                      item[0] === 'nativeName'
                        ? (<FactsListItem key={nativeName}>
                          <BoldSpan>Native Name:</BoldSpan>{`${item[1]}`}</FactsListItem>)
                        : (<FactsListItem key={item[0]}>
                          <BoldSpan>
                            {`${item[0].charAt(0).toUpperCase() + item[0].slice(1)}:`}
                          </BoldSpan>{`${item[1]}`}</FactsListItem>)
                    )
                  }</FactsList>
                  <FactsList>
                    <FactsListItem key={"top level domain"}>
                      <BoldSpan>Top Level Domain:</BoldSpan>{topLevelDomain}
                    </FactsListItem>
                    <FactsListItem key={"currencies"}><BoldSpan>Currencies:</BoldSpan>
                      {currencies.map((currency) => currency.name).join(', ')}
                    </FactsListItem>
                    <FactsListItem key={"languages"}><BoldSpan>Languages:</BoldSpan>
                      {languages.map((language) => language.name).join(', ')}
                    </FactsListItem>
                  </FactsList>
                </FactListsContainer>
              </FactsContent>
            </FactsContainer>
            <BorderingContainer>
              <BoldSpan>Bordering Countries:</BoldSpan>
              {borderingCountries.length > 0
                ? (
                  borderingCountries.map((border) => (
                    <Button
                      padding="5px 1rem"
                    >
                      <LinkStyled key={border} to={`/country/${border}`}>{border}</LinkStyled>
                    </Button>

                  )))
                : (<span> No bordering countries. Could it be an island?</span>)}
            </BorderingContainer>
          </FactsSection>

        </MoreInfoItem>


      </MoreInfoContainer>
    </Fragment>
  )
}

export default CountryMoreInfo