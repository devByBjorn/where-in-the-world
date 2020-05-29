import React from 'react'
import IconFA from './IconFA'
import { sun, moon } from '../icons/iconsLib'

const ToggleTheme = ({ theme, toggle }) => {
  const isLight = theme === 'light'
  return (
    <button onClick={toggle}>
      {
        theme === 'light'
          ? (
            <IconFA
              icon={moon}
            />
          )
          : (
            <IconFA
              icon={sun}
            />
          )
      }
    </button>
  )
}

export default ToggleTheme