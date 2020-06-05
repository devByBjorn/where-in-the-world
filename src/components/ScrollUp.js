import React from 'react'
import { ButtonDiv } from './scrollUpStyled'
import IconFA from './IconFA'
import { arrowUp } from '../icons/iconsLib'


const ScrollUp = () => {

  const navigateOnClick = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  return (
    <ButtonDiv
      onClick={navigateOnClick}
    >
      <IconFA
        style={{ color: '#ffc600', fontSize: '2rem' }}
        icon={arrowUp}
      />
    </ButtonDiv>
  )
}

export default ScrollUp