import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
    background-color: ${theme.primary};
    font-size: 10px;
  }

  // * Sorting out position for the animated switch

  .switch-wrapper {
    position: relative;
    height: 100%;
  }

  .switch-wrapper > div {
    position: absolute;
    height: 100%;
    width: 100%;
  }
`
