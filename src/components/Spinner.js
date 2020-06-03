import React from 'react'
import styled, { keyframes } from 'styled-components'

const Spinner = () => (
  <LdsCircle>
    <LdsCircleDiv />
  </LdsCircle>
)

export default Spinner

const ldsCircleAnimation = keyframes`
  0%, 100% {
  animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`

const LdsCircle = styled.div`
  margin-top: 10rem;
  text-align: center;
  transform: translateZ(1px);
`

const LdsCircleDiv = styled.div`
  background: ${({ theme }) => theme.colors.standOut};
  border-radius: 50%;
  display: inline-block;
  height: 64px;
  margin: 8px;
  width: 64px;

  animation: ${ldsCircleAnimation} 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`




