import { Box } from '@mui/material'
import { Background } from './Background'
import { NavigationBar } from './NavigationBar'
import { Top } from './Top'

export const Main = () => {
   return (
      <Box
         sx={{
            minWidth: '1080px',
            position: 'relative',
            width: '100%',
            overflow: 'hidden',
         }}
      >
         <Background />
         <Box sx={{ position: 'relative', display: 'block' }}>
            <NavigationBar />
            <Top />
         </Box>
      </Box>
   )
}
