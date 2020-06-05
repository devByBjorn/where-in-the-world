import styled from 'styled-components'

export const ButtonDiv = styled.div`
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
    z-index: 999;
    &:hover {
      cursor: pointer;
    }

    @media (min-width: 1500px) {
      bottom: 6rem;
      right: 6rem;
      padding: ${({ theme }) => theme.padding.xxlPadding};
    }
`