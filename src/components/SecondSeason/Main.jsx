import { Box, Button, Typography } from '@mui/material'
import { Background } from './Background'
import { NavigationBar } from './NavigationBar'

export const Main = () => {
   return (
      <Box
         sx={{
            minWidth: '1080px',
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
            height: '100vh',
         }}
      >
         <Background />
         <Box sx={{ position: 'relative', display: 'block' }}>
            <NavigationBar />
         </Box>
      </Box>
   )
}
