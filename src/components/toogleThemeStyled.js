import styled from 'styled-components'


export const ToggleThemeButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};

  &:focus {
    outline:none;
  }

  span {
    font-weight: ${({ theme }) => theme.fontWeight.largeWeight};
    letter-spacing: 0.1rem;
    padding-left: ${({ theme }) => theme.padding.standardPadding};
  }

  @media (min-width: 1025px) {
    &:hover {
      span {
        color: ${({ theme }) => theme.text};
      }
      color: ${({ theme }) => theme.colors.standOut};
      cursor:pointer;
    }
  }
`
