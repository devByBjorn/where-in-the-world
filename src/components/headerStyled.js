import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.elementBg};
  -moz-box-shadow: ${({ theme }) => theme.boxShadow};
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 2rem 0;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9999;
`

export const HeaderContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 90vw;
  width: 140rem;
`

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.typogrophy.xlTypo};
  letter-spacing: .2rem;

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.typogrophy.standardTypo};
  }
`
export const LinkStyled = styled(Link)`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
`