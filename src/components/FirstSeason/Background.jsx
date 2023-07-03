import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { keyframes } from '@emotion/react'

//TODO: CHANGE THE ANIMATION FOR THE WHOLE PAGE
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Background = ({ pageComponent, title }) => {
   const [scrollDistance, setScrollDistance] = useState(0)
   useEffect(() => {
      const handleScroll = () => {
         const scrollTop = window.scrollY || document.documentElement.scrollTop
         setScrollDistance(scrollTop)
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])
   const transformValue = scrollDistance ? `-${scrollDistance / 5}px` : '0px' //For Introduction moving triangles
   const transformValuePink = scrollDistance
      ? `${scrollDistance / 20}px`
      : '0px' //For Introduction moving pink triangles

   return (
      <Box
         sx={{
            position: 'relative',
            paddingTop: '80px',
            overflow: 'hidden',
            opacity: 0,
            animation: `${fadeIn} 2.3s forwards`,
         }}
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
                  'url(../../src/assets/img/FirstSeason/Introduction/bg_box.png), linear-gradient(#000, #000) ',
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
                  src="../../src/assets/img/FirstSeason/Introduction/bg_pink-line_lt.png"
                  alt="Floating triangle"
                  style={{
                     width: '100%',
                     maxWidth: '100%',
                     height: 'auto',
                     display: 'block',
                  }}
               />
            </Box>
            {/* TODO: MAYBE COMPONENT FOR FLOATING  */}
            {/* FLOATING TRIANGLE 1  */}
            <Box
               sx={{
                  position: 'absolute',
                  top: '25%',
                  left: '-10%',
                  overflow: 'hidden',
                  transition:
                     'transform 5s cubic-bezier(0.19, 1, 0.22, 1), -webkit-transform 5s cubic-bezier(0.19, 1, 0.22, 1)',
                  transform: `translateY(${transformValue})`,
               }}
            >
               <img
                  src="../../src/assets/img/FirstSeason/Story/triangle0004.png"
                  alt="Floating triangle"
                  style={{
                     width: '100%',
                     maxWidth: '100%',
                     height: 'auto',
                     display: 'block',
                  }}
               />
            </Box>
            {/* FLOATING TRIANGLE 2  */}
            <Box
               sx={{
                  position: 'absolute',
                  top: '45%',
                  right: '0',
                  overflow: 'hidden',
                  transition:
                     'transform 5s cubic-bezier(0.19, 1, 0.22, 1), -webkit-transform 5s cubic-bezier(0.19, 1, 0.22, 1)',
                  transform: `translateY(${transformValue})`,
               }}
            >
               <img
                  src="../../src/assets/img/FirstSeason/Story/triangle0012.png"
                  alt="Floating triangle"
                  style={{
                     width: '100%',
                     maxWidth: '100%',
                     height: 'auto',
                     display: 'block',
                  }}
               />
            </Box>
            {/* FLOATING TRIANGLE 3  */}
            <Box
               sx={{
                  position: 'absolute',
                  bottom: '100px',
                  left: '-150px',
                  overflow: 'hidden',
                  transition:
                     'transform 5s cubic-bezier(0.19, 1, 0.22, 1), -webkit-transform 5s cubic-bezier(0.19, 1, 0.22, 1)',
                  transform: `translateY(${transformValue})`,
               }}
            >
               <img
                  src="../../src/assets/img/FirstSeason/Introduction/triangle0010.png"
                  alt="Floating triangle"
                  style={{
                     width: '100%',
                     maxWidth: '100%',
                     height: 'auto',
                     display: 'block',
                  }}
               />
            </Box>
            {/* FLOATING PINK TRIANGLE 1 */}
            <Box
               sx={{
                  position: 'absolute',
                  top: '25%',
                  right: '0',
                  overflow: 'hidden',
                  transition:
                     'transform 5s cubic-bezier(0.19, 1, 0.22, 1), -webkit-transform 5s cubic-bezier(0.19, 1, 0.22, 1)',
                  transform: `translateY(${transformValuePink})`,
               }}
            >
               <img
                  src="../../src/assets/img/FirstSeason/Introduction/bg_triangle01-2.png"
                  alt="Floating triangle"
                  style={{
                     width: '100%',
                     maxWidth: '100%',
                     height: 'auto',
                     display: 'block',
                  }}
               />
            </Box>
            {/* FLOATING PINK TRIANGLE 2 */}
            <Box
               sx={{
                  position: 'absolute',
                  bottom: '20%',
                  right: '-50px',
                  overflow: 'hidden',
                  transition:
                     'transform 5s cubic-bezier(0.19, 1, 0.22, 1), -webkit-transform 5s cubic-bezier(0.19, 1, 0.22, 1)',
                  transform: `translateY(${transformValuePink})`,
               }}
            >
               <img
                  src="../../src/assets/img/FirstSeason/Introduction/bg_triangle02-2.png"
                  alt="Floating triangle"
                  style={{
                     width: '100%',
                     maxWidth: '100%',
                     height: 'auto',
                     display: 'block',
                  }}
               />
            </Box>
            {/* FLOATING PINK TRIANGLE 3 */}
            <Box
               sx={{
                  position: 'absolute',
                  top: '55%',
                  left: '55px',
                  overflow: 'hidden',
                  transition:
                     'transform 5s cubic-bezier(0.19, 1, 0.22, 1), -webkit-transform 5s cubic-bezier(0.19, 1, 0.22, 1)',
                  transform: `translateY(${transformValuePink})`,
               }}
            >
               <img
                  src="../../src/assets/img/FirstSeason/Introduction/bg_triangle02-2.png"
                  alt="Floating triangle"
                  style={{
                     width: '100%',
                     maxWidth: '100%',
                     height: 'auto',
                     display: 'block',
                  }}
               />
            </Box>
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
                     src={`../../src/assets/img/FirstSeason/${title}`}
                     alt="Floating triangle"
                     style={{
                        width: 'auto',
                        height: '100%',
                        display: 'block',
                        maxWidth: '100%',
                     }}
                  />
               </Box>
            </Box>
            {pageComponent}
         </Box>
      </Box>
   )
}
