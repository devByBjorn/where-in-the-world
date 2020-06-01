import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkStyled = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`
const InfoBox = styled.div`
  border-radius: 2px;
  box-shadow: 0px 0px 15px 0px ${({ theme }) => theme.boxShadow};
  display: flex;
  height: 35rem;
  flex-direction: column;
`
const Item = styled.div`
  height: 50%;
  flex: 1;
`
const ImgStyled = styled.img`
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  height: 17.5rem;
  object-fit: cover;
  width: 100%;
`
const TextWrapper = styled.div`
  background: ${({ theme }) => theme.elementBg};
  padding: ${({ theme }) => theme.padding.largePadding};
`
const HeadingCountry = styled.h4`
  font-size: ${({ theme }) => theme.typogrophy.largeTypo};
  font-weight: ${({ theme }) => theme.fontWeight.xlWeight};
`
const List = styled.ul`
  list-style-type: none;
  padding-top: ${({ theme }) => theme.padding.largePadding};
`

const ListItem = styled.li`
  padding-top: ${({ theme }) => theme.padding.smallPadding};
  &:first-child {
    padding-top: 0;
  }
`

const ListItemSpan = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.largeWeight};
`

const CountrySquare = ({ flag, name, population, region, capital }) => (
  <LinkStyled to={`/country/${name}`}>
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

export default CountrySquare