import { Box } from '@mui/material'
import { SideBar } from '../components/Landing/SideBar'
import { useEffect, useState } from 'react'
import { SeasonPreview } from '../components/Landing/SeasonPreview'

export const LandingPage = () => {
   const [season, setSeason] = useState('1')

   return (
      <Box
         sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
         }}
      >
         <SideBar season={season} setSeason={setSeason} />
         <SeasonPreview />
      </Box>
   )
}
