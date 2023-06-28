import { Box } from '@mui/material'
import { CharacterSelector } from './CharacterSelector'
import { CharacterBox } from './CharacterBox'
import { useState } from 'react'

export const Character = () => {
   //TODO: Anmimation of switching character
   const [activeButton, setActiveButton] = useState('Kaguya')
   return (
      <Box
         sx={{
            position: 'static',
            width: '1080px',
            minHeight: '60vh',
            margin: '0 auto',
            paddingTop: '55px',
         }}
      >
         <Box>
            <CharacterSelector
               activeButton={activeButton}
               setActiveButton={setActiveButton}
            />
            <CharacterBox activeButton={activeButton} />
         </Box>
      </Box>
   )
}
