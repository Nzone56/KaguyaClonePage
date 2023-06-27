import { Box } from '@mui/material'
import { Header } from '../../components/FirstSeason/Header'
import { Footer } from '../../components/FirstSeason/Footer'
import { Background } from '../../components/FirstSeason/Background'
import { BluRay } from '../../components/FirstSeason/BluRay'

export const FirstSeasonBluRayPage = () => {
   return (
      <Box>
         <Header />
         <Background
            pageComponent={<BluRay />}
            title={'BluRay/title_bd-dvd.png'}
         />
         <Footer />
      </Box>
   )
}
