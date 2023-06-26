import { Box } from '@mui/material'
import { Header } from '../../components/FirstSeason/Header'
import { Footer } from '../../components/FirstSeason/Footer'
import { Background } from '../../components/FirstSeason/Background'
import { Streaming } from '../../components/FirstSeason/Streaming'

export const FirstSeasonStreamingPage = () => {
   return (
      <Box>
         <Header />
         <Background
            pageComponent={<Streaming />}
            title={'Streaming/title_onair.png'}
         />
         <Footer />
      </Box>
   )
}
