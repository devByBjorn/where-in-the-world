import React from 'react'
import ToggleTheme from './ToggleTheme'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  background: ${({ theme }) => theme.elementBg};
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

const Header = ({ toggle, theme }) => {
  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <Heading>Where in the world?</Heading>
        <ToggleTheme toggle={toggle} theme={theme} />
      </HeaderContentContainer>
    </HeaderContainer>
  )
}

export default Header