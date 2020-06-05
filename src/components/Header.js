import React from 'react'
import {
  Heading,
  HeaderContainer,
  HeaderContentContainer,
  LinkStyled,
} from './headerStyled'
import ToggleTheme from './ToggleTheme'


const Header = ({ toggle, theme }) => {
  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <Heading>
          <LinkStyled to="/">
            Where in the world?
          </LinkStyled>
        </Heading>
        <ToggleTheme toggle={toggle} theme={theme} />
      </HeaderContentContainer>
    </HeaderContainer>
  )
}

export default Header

