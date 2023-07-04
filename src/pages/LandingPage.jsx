import { Box } from '@mui/material'
import { SideBar } from '../components/Landing/SideBar'
import { useState } from 'react'
import { SeasonPreview } from '../components/Landing/SeasonPreview'
import { keyframes } from '@emotion/react'

const fade = keyframes`
   0% {
      opacity:0

   }
   100% {
      opacity: 1
   }
`

export const LandingPage = () => {
   //TODO: THE CHANGE BETWEEN SEASONS ITS TOO HARSH
   const [season, setSeason] = useState('first')

   return (
      <Box
         sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            animation: `${fade} 1.5s linear`,
         }}
      >
         <SideBar season={season} setSeason={setSeason} />
         <SeasonPreview season={season} />
      </Box>
   )
}
