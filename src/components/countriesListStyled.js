import styled from 'styled-components'

export const GridListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8rem;
  justify-content: center;
  list-style-type: none;

  @media (max-width: 1410px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 1025px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 720px) {
    grid-template-columns: 27rem;
  }
`

export const GridListItem = styled.li`
  background: ${({ theme }) => theme.elementBg};
  position: relative;
  transition: transform .3s ease-in;

  @media (min-width: 1025px) {
    &:hover {
      transform: scale(1.05)
    }
  }
`