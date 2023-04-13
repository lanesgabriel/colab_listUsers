import { createGlobalStyle} from 'styled-components'
import { DefaultTheme } from '../interfaces/ITheme'

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  *{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.white}};
  }

  body {
    background: ${({ theme }) => theme.colors.gray900};
    color: ${({ theme }) => theme.colors.gray300};
    -webkit-font-smoothing: antialised;
  }

  body, input, textarea, button {
    font: 400 1rem 'Open Sans', sans-serif;
  }
`