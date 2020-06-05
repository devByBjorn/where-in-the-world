import React from 'react'
import styled from 'styled-components'
import IconFA from './IconFA'
import { caretUp, arrowUp } from '../icons/iconsLib'


const ButtonDiv = styled.div`
    position: fixed;
    bottom: 4rem;
    right: 2rem;

    display: block;
    background: ${({ theme }) => theme.elementBg};
    border-radius: 50%;
    -moz-box-shadow: ${({ theme }) => theme.boxShadow};
    -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
    box-shadow: ${({ theme }) => theme.boxShadow};
    margin-left: auto;
    margin-right: auto;
    padding: ${({ theme }) => theme.padding.xlPadding};

    &:hover {
      cursor: pointer;
    }

    @media (min-width: 1500px) {
      bottom: 6rem;
      right: 6rem;
      padding: ${({ theme }) => theme.padding.xxlPadding};
    }
`

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