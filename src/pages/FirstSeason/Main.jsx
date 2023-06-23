import { Box } from '@mui/material'
import { BubbleArea } from './BubbleArea'
import { NewsPreview } from './NewsPreview'
import { useEffect, useState } from 'react'
import { Introduction } from './Introduction'

export const Main = () => {
   const [scrollDistance, setScrollDistance] = useState(0)
   const maxScrollDistance = 70

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

   const transformValue =
      scrollDistance <= maxScrollDistance ? `${scrollDistance / 2}px` : '35px'
   return (
      <Box
         sx={{
            marginTop: '8rem',
            position: 'relative',
            overflow: 'hidden',
         }}
      >
         {/* MAIN ARTICLE BACKGROUND WITH POP UPS  */}
         <Box
            component="article"
            sx={{
               position: 'relative',
               display: 'block',
            }}
         >
            {/* MAIN SCENE */}
            <Box
               sx={{
                  position: 'relative',
                  width: '100%',
                  minHeight: '980px',
                  overflow: 'hidden',
               }}
            >
               {/* MAIN BACKGROUND   */}
               <Box
                  sx={{
                     position: 'absolute',
                     top: '-153.6px',
                     left: '0',
                     width: '100%',
                     height: '300%',
                     backgroundImage:
                        'url(../../src/assets/FirstSeason/img_main.jpg)',
                     backgroundSize: '100% auto',
                     backgroundRepeat: 'no-repeat',
                     transition:
                        'transform .7s ease-out, top 1.5s ease-out .7s',
                     transform: `translateY(${transformValue})`,
                     //TODO: ANIMATION FROM SCROLLING DOWN SLOW DOWN, MORE HEIGHT
                  }}
               />
               {/* POP UP SECOND SEASON  */}
               <Box
                  sx={{
                     maxWidth: '39rem',
                     position: 'absolute',
                     top: '1rem',
                     right: '1rem',
                  }}
               >
                  <a href="/2nd">
                     <img
                        src="../../src/assets/FirstSeason/bnr_second.jpg"
                        alt="Logo de la empresa"
                        style={{
                           width: '100%',
                           maxWidth: '100%',
                           height: 'auto',
                           display: 'block',
                        }}
                     />
                  </a>
               </Box>
               {/* POP UP LOGO DIAGONAL  */}
               <Box
                  sx={{
                     maxWidth: '80.2rem',
                     position: 'absolute',
                     top: '64rem',
                  }}
               >
                  <img
                     src="../../src/assets/FirstSeason/img_main-logo.png"
                     alt="Logo de la empresa"
                     style={{
                        width: '100%',
                        maxWidth: '100%',
                        height: 'auto',
                        display: 'block',
                     }}
                  />
               </Box>
            </Box>
            {/* BLUE RAY AVALIBLE POP UP  */}
            <Box
               sx={{
                  position: 'absolute',
                  left: '50%',
                  bottom: '-134px',
                  width: '69rem',
                  zIndex: '5',
                  transform: 'translateX(-50%)',
               }}
            >
               <img
                  src="../../src/assets/FirstSeason/text_onair.png"
                  alt="On Air"
                  style={{
                     width: '100%',
                     maxWidth: '100%',
                     height: 'auto',
                     display: 'block',
                  }}
               />
            </Box>
         </Box>
         {/* NEWS PREVIEW SECTION AREA */}
         <Box
            component="article"
            sx={{
               position: 'relative',
               backgroundImage: 'url(../../src/assets/FirstSeason/bg_pink.gif)',
            }}
         >
            <Box
               sx={{
                  position: 'relative',
                  padding: '19.6rem 0 5rem',
                  overflow: 'hidden',
                  textAlign: 'center',
               }}
            >
               <BubbleArea />
               <NewsPreview />
            </Box>
         </Box>
         {/* INTRODUCTION ARTICLE  */}
         <Introduction />
      </Box>
   )
}
