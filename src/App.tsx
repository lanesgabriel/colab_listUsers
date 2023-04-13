import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { Router } from './routes'
import { defaultTheme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}
