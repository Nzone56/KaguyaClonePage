import { Box } from '@mui/material'
import { Header } from './header'
import { Main } from './Main'

export const FirstSeasonPage = () => {
   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
         }}
      >
         <Header />
         <Main />
      </Box>
   )
}
