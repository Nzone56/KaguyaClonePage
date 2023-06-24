import { Box, Typography } from '@mui/material'
import { ChapterList } from './ChapterList'
import { ChapterBox } from './ChapterBox'
import { useState } from 'react'

export const Story = () => {
   const [activeButton, setActiveButton] = useState('01')

   return (
      <Box
         sx={{ position: 'relative', paddingTop: '80px', overflow: 'hidden' }}
      >
         <Box
            sx={{
               position: 'fixed',
               content: `""`,
               top: '0',
               left: '0',
               width: '100%',
               height: '100%',
               backgroundImage:
                  'url(../../src/assets/FirstSeason/Introduction/bg_box.png), linear-gradient(#000, #000) ',
               backgroundPosition: 'left center',
               backgroundSize: 'cover',
            }}
         />
         <Box
            sx={{
               position: 'relative',
               padding: '40px 0 110px',
            }}
         >
            <Box sx={{ position: 'absolute', top: '0', left: '0' }}>
               <img
                  src="../../src/assets/FirstSeason/Introduction/bg_pink-line_lt.png"
                  alt="Floating triangle"
                  style={{
                     width: '100%',
                     maxWidth: '100%',
                     height: 'auto',
                     display: 'block',
                  }}
               />
            </Box>
            {/* TODO: ALL FLOATING THINGS  */}
            {/* STORY TITTLE */}
            <Box
               sx={{
                  position: 'relative',
                  marginBottom: '40px',
                  display: 'block',
               }}
            >
               <Box
                  sx={{
                     position: 'absolute',
                     top: '20px',
                     right: '0',
                     height: '47px',
                  }}
               >
                  <img
                     src="../../src/assets/FirstSeason/Story/title_story.png"
                     alt="Floating triangle"
                     style={{
                        width: 'auto',
                        height: '100%',
                        display: 'block',
                     }}
                  />
               </Box>
            </Box>
            {/* STORY MAIN */}
            <Box
               sx={{
                  position: 'static',
                  width: '1080px',
                  minHeight: '60vh',
                  margin: '0 auto',
                  paddingTop: '55px',
               }}
            >
               <ChapterList
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
               />
               <ChapterBox
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
               />
            </Box>
         </Box>
      </Box>
   )
}
