import { Box } from '@mui/material'
import { Header } from '../../components/FirstSeason/Header'
import { Footer } from '../../components/FirstSeason/Footer'
import { Background } from '../../components/FirstSeason/Background'
import { News } from '../../components/FirstSeason/News'

export const FirstSeasonNewsPage = () => {
   return (
      <Box>
         <Header />
         <Background pageComponent={<News />} title={'News/title_news.png'} />
         <Footer />
      </Box>
   )
}
