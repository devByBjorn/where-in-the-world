import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import {
  BoldSpan,
  BordersBoldSpan,
  FlagImg,
  FactsSection,
  FactsContainer,
  FactsContent,
  FactsHeading,
  FactListsContainer,
  List,
  ListItem,
  MoreInfoContainer,
  MoreInfoItem,
} from './countryMoreInfoStyled'
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
        margin="2rem 0"
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
                      padding="5px 1rem"
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

