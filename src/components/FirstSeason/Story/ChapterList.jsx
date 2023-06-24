import { Box } from '@mui/material'
import { ChapterButton } from './ChapterButton'
import { useState } from 'react'

export const ChapterList = () => {
   const [activeButton, setActiveButton] = useState('01')

   return (
      <Box
         component="ul"
         sx={{
            display: 'block',
         }}
      >
         <ChapterButton
            number={'01'}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
         />
         <ChapterButton
            number={'02'}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
         />
         <ChapterButton
            number={'03'}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
         />
         <ChapterButton
            number={'04'}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
         />
         <ChapterButton
            number={'05'}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
         />
         <ChapterButton
            number={'06'}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
         />
         <ChapterButton
            number={'07'}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
         />
         <ChapterButton
            number={'08'}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
         />
         <ChapterButton
            number={'09'}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
         />
         <ChapterButton
            number={'10'}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
         />
         <ChapterButton
            number={'11'}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
         />
         <ChapterButton
            number={'12'}
            activeButton={activeButton}
            setActiveButton={setActiveButton}
         />
      </Box>
   )
}
