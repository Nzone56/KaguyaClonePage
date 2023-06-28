import { Box } from '@mui/material'
import { Header } from '../../components/FirstSeason/Header'
import { Footer } from '../../components/FirstSeason/Footer'
import { Background } from '../../components/FirstSeason/Background'
import { Character } from '../../components/FirstSeason/Character'

export const FirstSeasonCharacterPage = () => {
   return (
      <Box>
         <Header />
         <Background
            pageComponent={<Character />}
            title={'Character/title_chara.png'}
         />
         <Footer />
      </Box>
   )
}
