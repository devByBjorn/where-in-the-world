import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.mainBg};
    box-sizing: border-box;
    color: ${({ theme }) => theme.text};
    font-family: Nunito Sans, Helvetica, Arial, sans-serif;
    font-size:  ${({ theme }) => theme.typogrophy.standardTypo};
    font-weight:  ${({ theme }) => theme.fontWeight.standardWeight};
  }
`

export default GlobalStyles
