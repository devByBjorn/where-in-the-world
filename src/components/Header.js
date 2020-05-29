import React from 'react'
import ToggleTheme from './ToggleTheme'

const Header = ({ toggle, theme }) => {
  return (
    <div >
      <h2>Where in the world?</h2>
      <ToggleTheme toggle={toggle} theme={theme} />
    </div>
  )
}

export default Header