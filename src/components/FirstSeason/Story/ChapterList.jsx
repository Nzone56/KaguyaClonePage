import { Box } from '@mui/material'
import { ChapterButton } from './ChapterButton'

export const ChapterList = ({ activeButton, setActiveButton }) => {
   const chapters = [
      { number: '01', img: [] },
      { number: '02', img: [] },
      { number: '03', img: [] },
      { number: '04', img: [] },
      { number: '05', img: [] },
      { number: '06', img: [] },
      { number: '07', img: [] },
      { number: '08', img: [] },
      { number: '09', img: [] },
      { number: '10', img: [] },
      { number: '11', img: [] },
      { number: '12', img: [] },
   ]

   return (
      <Box
         sx={{
            position: 'absolute',
            top: '51.7%',
            left: '30px',
            zIndex: '1',
            transform: 'translate(0%, -50%)',
            width: '100px',
         }}
      >
         <Box
            sx={{
               height: '100%',
               position: 'relative',
               zIndex: '1',
               margin: '0 auto',
               padding: '0',
               overflow: 'hidden',
            }}
         >
            <Box component="ul" sx={{ display: 'block' }}>
               {chapters.map((chapter) => (
                  <ChapterButton
                     key={chapter.number}
                     number={chapter.number}
                     img={chapter.img}
                     activeButton={activeButton}
                     setActiveButton={setActiveButton}
                  />
               ))}
            </Box>
         </Box>
      </Box>
   )
}
