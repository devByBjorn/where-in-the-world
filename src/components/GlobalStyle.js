import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${({ theme }) => theme.mainBg};
    color: ${({ theme }) => theme.text};
    font-family: Nunito Sans, Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    box-sizing: border-box;
  }
`

export default GlobalStyles
