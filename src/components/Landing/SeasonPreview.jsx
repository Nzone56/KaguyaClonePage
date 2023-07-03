import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { keyframes } from '@emotion/react'

const fade = keyframes`
   0%  {background-image: url(../../src/assets/img/Landing/1season-01.jpg);}
   25%  {background-image: url(../../src/assets/img/Landing/3season-02.png);}
   50%  {background-image: url(../../src/assets/img/Landing/1season-03.png);}
   75%  {background-image: url(../../src/assets/img/Landing/4season-01.jpg);}
   100%  {background-image: url(../../src/assets/img/Landing/1season-01.jpg);}

}`

export const SeasonPreview = () => {
   const [backgroundIndex, setBackgroundIndex] = useState(0)
   useEffect(() => {
      const images = [
         'url(../../src/assets/img/Landing/1season-01.jpg)',
         'url(../../src/assets/img/Landing/1season-02.jpg)',
         'url(../../src/assets/img/Landing/1season-03.jpg)',
         'url(../../src/assets/img/Landing/1season-04.jpg)',
      ]

      const intervalId = setInterval(() => {
         setBackgroundIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 3000)

      return () => {
         clearInterval(intervalId)
      }
   }, [])

   return (
      <Box
         sx={{
            width: '70%',
            height: '100vh',
            backgroundColor: '#111',
            zIndex: '-1',
         }}
      >
         <Box
            sx={{
               width: '100%',
               height: '100%',
               backgroundSize: '100% 100%',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
               opacity: '0.8',
               animation: `${fade} 10s infinite;`,
            }}
         />
      </Box>
   )
}
