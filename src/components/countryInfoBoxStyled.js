import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const OverLay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  right: 0;
  z-index: 99;
  transition: background .3s ease;
  background: ${({ theme }) => theme.overlay};
  &:hover {
    background: transparent;
  }
`

export const LinkStyled = styled(Link)`
  color: ${({ theme }) => theme.text};
  display: block;
  position: relative;
  text-decoration: none;
`
export const InfoBox = styled.div`
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  height: 35rem;
  flex-direction: column;
`
export const Item = styled.div`
  height: 50%;
  flex: 1;
`
export const ImgStyled = styled.img`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  height: 17.5rem;
  object-fit: cover;
  width: 100%;
`
export const TextWrapper = styled.div`
  background: ${({ theme }) => theme.elementBg};
  padding: ${({ theme }) => theme.padding.largePadding};
`
export const HeadingCountry = styled.h4`
  font-size: ${({ theme }) => theme.typogrophy.largeTypo};
  font-weight: ${({ theme }) => theme.fontWeight.xlWeight};
`
export const List = styled.ul`
  height: 100%;
  list-style-type: none;
  padding-top: ${({ theme }) => theme.padding.largePadding};
  width: 100%;
`

export const ListItem = styled.li`
  padding-top: ${({ theme }) => theme.padding.smallPadding};
  &:first-child {
    padding-top: 0;
  }
`
export const ListItemSpan = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.largeWeight};
`

