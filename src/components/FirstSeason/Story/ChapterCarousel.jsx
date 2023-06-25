import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { keyframes } from '@emotion/react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

// TODO: FIX ANIMATON
// TODO: FIX IMAGE CAP
// TODO: MAYBE CHANGE THE NEXT PREV BUTTONS

const slideAnimation = keyframes`
   0% {
      transform: translateX(0);
   }
   100% {
      transform: translateX(-100%);
   }
`

export const ChapterCarousel = ({ activeButton }) => {
   const [currentImage, setCurrentImage] = useState(1)

   useEffect(() => {
      const timer = setTimeout(() => {
         handleImageChange(currentImage < 3 ? currentImage + 1 : 1)
      }, 3000)

      return () => clearTimeout(timer)
   }, [currentImage])

   const handleImageChange = (nextImage) => {
      setCurrentImage(nextImage)
   }

   return (
      <Box
         sx={{
            position: 'relative',
            padding: '40px 0',
            backgroundImage: 'url(../../src/assets/FirstSeason/bg_pink.gif)',
         }}
      >
         <Box
            sx={{
               position: 'relative',
               width: '900px',
               margin: '0 auto',
            }}
         >
            <Box
               sx={{
                  height: 'auto',
                  position: 'relative',
                  zIndex: '1',
                  margin: '0 auto',
                  padding: '0',
                  listStyle: 'none',
                  overflow: 'hidden',
               }}
            >
               <img
                  src={`../../src/assets/FirstSeason/Story/${activeButton}/${currentImage
                     .toString()
                     .padStart(2, '0')}.jpg`}
                  alt={`Image ${currentImage}`}
                  style={{
                     width: '100%',
                     maxWidth: '100%',
                     height: 'auto',
                     display: 'block',
                     animation: `${slideAnimation} 1s forwards`,
                  }}
               />
               <img
                  src={`../../src/assets/FirstSeason/Story/${activeButton}/${
                     currentImage === 3
                        ? '01'
                        : (currentImage + 1).toString().padStart(2, '0')
                  }.jpg`}
                  alt={`Next Image`}
                  style={{
                     width: '100%',
                     maxWidth: '100%',
                     height: 'auto',
                     display: 'block',
                     position: 'absolute',
                     top: 0,
                     left: '100%',
                     animation: `${slideAnimation} 1s forwards`,
                  }}
               />
            </Box>
         </Box>
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
               marginTop: '20px',
               fontFamily: 'Kreon, serif',
            }}
         >
            <Box
               onClick={() =>
                  handleImageChange(currentImage > 1 ? currentImage - 1 : 3)
               }
               sx={{
                  marginRight: '10px',
                  cursor: 'pointer',
                  backgroundColor: 'black',
                  color: '#fff',
                  padding: '4px',
               }}
            >
               <ArrowBackIcon />
            </Box>
            <Box
               onClick={() =>
                  handleImageChange(currentImage < 3 ? currentImage + 1 : 1)
               }
               sx={{
                  cursor: 'pointer',
                  backgroundColor: 'black',
                  color: '#fff',
                  padding: '4px',
               }}
            >
               <ArrowForwardIcon />
            </Box>
         </Box>
      </Box>
   )
}
