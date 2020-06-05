import React from 'react'
import {
  HeadingCountry,
  ImgStyled,
  InfoBox,
  Item,
  LinkStyled,
  List,
  ListItem,
  ListItemSpan,
  OverLay,
  TextWrapper,
} from './countryInfoBoxStyled'
import useMediaQuery from '../hooks/useMediaQuery'

const CountryInfoBox = ({
  flag,
  name,
  population,
  region,
  capital }) => {

  const mediaQuery = useMediaQuery()

  return (
    <LinkStyled to={`/country/${name}`}>
      {mediaQuery.width > 1025 && <OverLay />}
      <InfoBox>
        <Item>
          <ImgStyled src={`${flag}`} alt={`Flag of ${name}`} />
        </Item>
        <Item>
          <TextWrapper>
            <HeadingCountry>
              {name}
            </HeadingCountry>
            <List>
              <ListItem>
                <ListItemSpan>Population: </ListItemSpan>
                {new Intl.NumberFormat().format(population)}</ListItem>
              <ListItem>
                <ListItemSpan>Region: </ListItemSpan>
                {region}</ListItem>
              <ListItem>
                <ListItemSpan>Capital: </ListItemSpan>
                {capital}</ListItem>
            </List>
          </TextWrapper>
        </Item>
      </InfoBox>
    </LinkStyled>
  )

}

export default CountryInfoBox


