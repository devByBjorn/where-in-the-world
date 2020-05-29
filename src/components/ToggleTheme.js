import React from 'react'

const ToggleTheme = ({ theme, toggle }) => {
  const isLight = theme === 'light'
  return (
    <button onClick={toggle}>
      toggle
    </button>
  )
}

export default ToggleTheme