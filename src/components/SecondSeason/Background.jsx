import { Box } from '@mui/material'
import React from 'react'

export const Background = () => {
   return (
      <Box
         sx={{
            display: 'flex',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
         }}
      >
         <Box
            sx={{
               backgroundImage:
                  'url(../../src/assets/img/SecondSeason/Background/bg_black.gif)',
               backgroundPosition: 'right top',
               backgroundColor: '#000',
               backgroundRepeat: 'repeat',
               backgroundSize: '100px auto',
               width: '50%',
               height: '100%',
            }}
         />
         <Box
            sx={{
               backgroundImage:
                  'url(../../src/assets/img/SecondSeason/Background/bg_white.gif)',
               backgroundPosition: 'left top',
               backgroundColor: '#fff',
               backgroundRepeat: 'repeat',
               backgroundSize: '100px auto',
               width: '50%',
               height: '100%',
            }}
         />
         {/* //FLOATING THINGS */}
      </Box>
   )
}
