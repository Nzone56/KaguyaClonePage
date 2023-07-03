import { LandingPage } from './pages/LandingPage'

export const KaguyaApp = () => {
   return (
      <ThemeProvider theme={theme}>
         <LandingPage />
      </ThemeProvider>
   )
}
