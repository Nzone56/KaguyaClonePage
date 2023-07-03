import { BubbleArea } from '../Animated/BubbleArea'
import { Box, Typography } from '@mui/material'
import { TrailerButton } from './TrailerButton'
import { useEffect, useState } from 'react'

export const Trailer = ({ trailerAnimated }) => {
   //TODO: TRAILER FROM HEADER BUG
   const [activeButton, setActiveButton] = useState(0)
   const [videoSource, setvideoSource] = useState(
      'https://www.youtube.com/embed/S6p_PjK7naQ?rel=0&autoplay=0'
   )
   useEffect(() => {
      if (activeButton === 0)
         setvideoSource(
            'https://www.youtube.com/embed/rZ95aZmQu_8?rel=0&autoplay=0'
         )
      if (activeButton === 1)
         setvideoSource(
            'https://www.youtube.com/embed/IwpJJiQkZzI?rel=0&autoplay=0'
         )

      if (activeButton === 2)
         setvideoSource(
            'https://www.youtube.com/embed/S6p_PjK7naQ?rel=0&autoplay=0'
         )
   }, [activeButton])

   const handleButtonClick = (index) => {
      setActiveButton(index)
   }

   return (
      <Box
         id="movie"
         component="article"
         sx={{
            position: 'relative',
            padding: '8.5rem 0',
            backgroundImage: `
      url(../../src/assets/img/FirstSeason/Introduction/bg_pink-line_lt.png),
      url(../../src/assets/img/FirstSeason/Introduction/bg_pink-line_rb.png),
        url(../../src/assets/img/FirstSeason/Introduction/bg_box.png),linear-gradient(#000, #000)`,

            backgroundPosition: ' top left, bottom right, center center',
            backgroundSize: ' 364px 332px, 832px 170px, cover, cover',
            backgroundRepeat: 'no-repeat',
         }}
      >
         <BubbleArea />
         {/* TRAILER TITTLE */}
         <Typography
            component="h2"
            variant="h2"
            sx={{
               display: 'block',
               position: 'relative',
               width: '236px',
               transform: trailerAnimated
                  ? 'translateX(0) translateY(0)'
                  : 'translateX(-10px)',
               transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 0)',
               opacity: trailerAnimated ? '1' : '0',
            }}
         >
            <img
               src="../../src/assets/img/FirstSeason/title_trailer.png"
               alt="Logo de la empresa"
               style={{
                  width: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block',
               }}
            />
         </Typography>
         {/* TRAILER SECTION */}
         <Box
            sx={{
               position: 'relative',
               width: '98rem',
               margin: '0 auto',
               padding: '45px 0 0 ',
            }}
         >
            {/* TRAILER VIDEO */}
            <Box
               sx={{
                  position: 'relative',
                  zIndex: '1',
                  marginBottom: '3rem',
                  paddingTop: '56.25%',
               }}
            >
               <iframe
                  width="920"
                  height="520"
                  src={videoSource}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{
                     position: 'absolute',
                     top: '0',
                     left: '0',
                     width: '100%',
                     height: '100%',
                     border: 'none',
                  }}
               ></iframe>
            </Box>
            {/* TRAILER SELECT */}
            <Box
               component="ul"
               sx={{
                  position: 'relative',
                  textAlign: 'center',
                  listStyle: 'none',
                  padding: '0',
               }}
            >
               <TrailerButton
                  content={'Trailer 1'}
                  isActive={activeButton === 0}
                  onClick={() => handleButtonClick(0)}
               />
               <TrailerButton
                  content={'Trailer 2 '}
                  isActive={activeButton === 1}
                  onClick={() => handleButtonClick(1)}
               />
               <TrailerButton
                  content={'Blu-ray Release'}
                  isActive={activeButton === 2}
                  onClick={() => handleButtonClick(2)}
               />
            </Box>
         </Box>
      </Box>
   )
}
