import React, { Fragment } from 'react'
import styled from 'styled-components'
import IconFA from './IconFA'
import { sun, moon } from '../icons/iconsLib'

const ButtonMode = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};

  &:focus {
    outline:none;
  }

  span {
    font-weight: ${({ theme }) => theme.fontWeight.largeWeight};
    padding-left: ${({ theme }) => theme.padding.standardPadding};
  }

  @media (min-width: 1025px) {
    &:hover {
      span {
        color: ${({ theme }) => theme.text};
      }
      color: #ffc600;
      cursor:pointer;
    }
  }
`

const ToggleTheme = ({ theme, toggle }) => {
  return (
    <ButtonMode onClick={toggle}>
      {theme === 'light'
        ? (
          <Fragment>
            <IconFA
              icon={moon}
            /><span>Go dark</span>
          </Fragment>
        )
        : (
          <Fragment>
            <IconFA
              icon={sun}
            /><span>Get light</span>
          </Fragment>
        )}
    </ButtonMode>
  )
}

export default ToggleTheme