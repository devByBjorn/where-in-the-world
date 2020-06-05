import React, { Fragment, useContext } from 'react'
import { ToggleThemeButton } from './ToogleThemeStyled'
import ThemeContext from '../contexts/ThemeContext'
import IconFA from './IconFA'
import { sun, moon } from '../icons/iconsLib'


const ToggleTheme = () => {
  const { theme, toggle } = useContext(ThemeContext)
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

