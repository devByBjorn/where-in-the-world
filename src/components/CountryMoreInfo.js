import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import useMoreInfo from '../hooks/useMoreInfo'
import fetchCountriesAPI from '../hooks/useCountriesAPI'
import { arrowLeft } from '../icons/iconsLib'
import ButtonWithLink from './ButtonWithLink'

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
      <ButtonWithLink
        borderRadius="5px"
        height="5rem"
        margin="3rem 0"
        width="15rem"
        to="/"
        icon={arrowLeft}
        linkText="Back"
        paddingText="0 0 0 2rem"
      />
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
                  <List>{
                    Object.entries(listPrimitives).map((item) =>
                      item[0] === 'nativeName'
                        ? (<ListItem key={nativeName}>
                          <BoldSpan>Native Name:</BoldSpan>{`${item[1]}`}</ListItem>)
                        : (<ListItem key={item[0]}>
                          <BoldSpan>
                            {`${item[0].charAt(0).toUpperCase() + item[0].slice(1)}:`}
                          </BoldSpan>{`${item[1]}`}</ListItem>)
                    )
                  }</List>

                  <List>
                    <ListItem key={"top level domain"}>
                      <BoldSpan>Top Level Domain:</BoldSpan>{topLevelDomain}
                    </ListItem>
                    <ListItem key={"currencies"}><BoldSpan>Currencies:</BoldSpan>
                      {currencies.map((currency) => currency.name).join(', ')}
                    </ListItem>
                    <ListItem key={"languages"}><BoldSpan>Languages:</BoldSpan>
                      {languages.map((language) => language.name).join(', ')}
                    </ListItem>
                  </List>
                </FactListsContainer>

              </FactsContent>
            </FactsContainer>
            <div>
              <BordersBoldSpan>Bordering Countries:</BordersBoldSpan>
              {borderingCountries.length > 0
                ? (
                  borderingCountries.map((border) => (
                    <ButtonWithLink
                      key={border}
                      height="2rem"
                      to={`/country/${border}`}
                      linkText={border}
                    />
                  )))
                : (<span> No bordering countries. Could it be an island?</span>)}
            </div>
          </FactsSection>
        </MoreInfoItem>
      </MoreInfoContainer>
    </Fragment>
  )
}

export default CountryMoreInfo

const MoreInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
  max-height: 120rem; 
  max-width: 90vw;
  padding: 2rem 0;
  width: 140rem;

  @media (max-width: 1020px) {
    flex-direction: column;
    max-width: 95vw;
  }
`
const MoreInfoItem = styled.div`
  flex: 1;
  max-width: 65rem;
`

const FlagImg = styled.img`
  height: auto;
  width: 100%;
  max-width: 90vw;
`

const FactsSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  margin-left: 5rem;

  @media (max-width: 1020px) {
    margin-left: 0;
  }
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

  @media (max-width: 1020px) {
    padding-top: ${({ theme }) => theme.padding.xxlPadding};
  }
`
const FactListsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1020px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

const List = styled.ul`
  list-style-type: none;
  
  @media (max-width: 1020px) {
    padding-bottom: ${({ theme }) => theme.padding.xxlPadding};
  }
`

const ListItem = styled.li`
  padding-bottom: ${({ theme }) => theme.padding.smallPadding};
`

const BoldSpan = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.largeWeight};
  padding-right: ${({ theme }) => theme.padding.smallPadding};
`

const BordersBoldSpan = styled(BoldSpan)`
@media (max-width: 1020px) {
  display: block;
  padding-bottom: ${({ theme }) => theme.padding.standardPadding};
  margin: 0 2px 2px 2px;
}
`