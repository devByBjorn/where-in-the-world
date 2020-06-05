import React, { Fragment } from 'react'
import { ToggleThemeButton } from './toogleThemeStyled'
import IconFA from './IconFA'
import { sun, moon } from '../icons/iconsLib'

const ToggleTheme = ({ theme, toggle }) => {
  return (
    <ToggleThemeButton onClick={toggle}>
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
    </ToggleThemeButton>
  )
}

export default ToggleTheme

