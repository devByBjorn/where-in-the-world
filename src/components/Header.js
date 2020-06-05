import React from 'react'
import {
  Heading,
  HeaderContainer,
  HeaderContentContainer,
  LinkStyled,
} from './headerStyled'
import ToggleTheme from './ToggleTheme'


const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <Heading>
          <LinkStyled to="/">
            Where in the world?
          </LinkStyled>
        </Heading>
        <ToggleTheme />
      </HeaderContentContainer>
    </HeaderContainer>
  )
}

export default Header

