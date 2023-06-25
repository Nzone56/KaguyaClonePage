import { Box } from '@mui/material'
import { ChapterCarousel } from './ChapterCarousel'
import { ChapterText } from './ChapterText'

//TODO: FIX SELECTED BOX OF BIG CHAPTERS(4-11)
export const ChapterBox = ({ activeButton, setActiveButton }) => {
   return (
      <Box
         component="section"
         sx={{
            position: 'relative',
            width: '980px',
            margin: '0 auto',
            padding: '3px',
            border: 'solid 1px #000',
         }}
      >
         <ChapterCarousel activeButton={activeButton} />
         <ChapterText activeButton={activeButton} />
      </Box>
   )
}
