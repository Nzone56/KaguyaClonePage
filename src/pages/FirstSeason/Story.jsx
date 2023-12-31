import { Box } from '@mui/material'
import { Header } from '../../components/FirstSeason/Header'
import { Footer } from '../../components/FirstSeason/Footer'
import { Story } from '../../components/FirstSeason/Story/Index'
import { Background } from '../../components/FirstSeason/Background'

export const FirstSeasonStoryPage = () => {
   return (
      <Box>
         <Header />
         <Background
            pageComponent={<Story />}
            title={'Story/title_story.png'}
         />
         <Footer />
      </Box>
   )
}
