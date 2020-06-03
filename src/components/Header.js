import React from 'react'
import { Link } from 'react-router-dom'
import ToggleTheme from './ToggleTheme'
import styled from 'styled-components'

const Header = ({ toggle, theme }) => {
  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <Heading><LinkStyled to="/">Where in the world?</LinkStyled></Heading>
        <ToggleTheme toggle={toggle} theme={theme} />
      </HeaderContentContainer>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  background: ${({ theme }) => theme.elementBg};
  -moz-box-shadow: ${({ theme }) => theme.boxShadow};
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 2rem 0;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9999;
`

const HeaderContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 90vw;
  width: 140rem;
`

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.typogrophy.xlTypo};
  letter-spacing: .2rem;
`
const LinkStyled = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`