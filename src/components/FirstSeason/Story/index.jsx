import { Box } from '@mui/material'
import { ChapterList } from './ChapterList'
import { ChapterBox } from './ChapterBox'
import { useState } from 'react'

export const Story = () => {
   const [activeButton, setActiveButton] = useState('01')
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
         <ChapterList
            activeButton={activeButton}
            setActiveButton={setActiveButton}
         />
         <ChapterBox
            activeButton={activeButton}
            setActiveButton={setActiveButton}
         />
      </Box>
   )
}
