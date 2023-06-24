import { Box } from '@mui/material'
import { Header } from '../../components/FirstSeason/Header'
import { Footer } from '../../components/FirstSeason/Footer'
import { Story } from '../../components/FirstSeason/Story/Index'

export const FirstSeasonStoryPage = () => {
   return (
      <Box>
         <Header />
         <Story />
         <Footer />
      </Box>
   )
}
