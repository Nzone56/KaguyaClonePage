import { Box } from '@mui/material'
import { BubbleArea } from './Animated/BubbleArea'
import { NewsPreview } from './News/NewsPreview'
import { useEffect, useState } from 'react'
import { Introduction } from './Introduction/Index'
import { StaffCast } from './StaffCast/Index'
import { Trailer } from './Trailer/Index'

//TODO: Animation of render in every page
export const Main = () => {
   const [scrollDistance, setScrollDistance] = useState(0)
   const [screenWidth, setScreenWidth] = useState(window.innerWidth)
   const maxScrollDistance = 1000
   const triggerIntroductionDistance = 1200
   const triggerStaffDistance = 2050
   const triggerCastDistance = 2500
   const triggerTrailerDistance = 3000

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

   useEffect(() => {
      setScreenWidth(window.innerWidth)
   }, [window.innerWidth])

   const transformValueImage =
      scrollDistance <= maxScrollDistance
         ? `-${scrollDistance / 20}px`
         : '-50px'
   // For Main Background image animation
   const transformValueTriangle = scrollDistance
      ? `-${scrollDistance / 5}px`
      : '0px' //For Introduction moving triangles
   const introductionAnimated = scrollDistance >= triggerIntroductionDistance // For Introcution aniamted text
   const staffAnimated = scrollDistance >= triggerStaffDistance // For Staff aniamted text
   const castAnimated = scrollDistance >= triggerCastDistance // For Cast aniamted text
   const trailerAnimated = scrollDistance >= triggerTrailerDistance // For Cast aniamted text
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
            id="main"
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
                  minWidth: '1300px',
                  margin: '0 auto',
                  textAlign: 'center',
               }}
            >
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
                        top: `calc(-${screenWidth}px / 8.5)`,
                        left: '0',
                        width: '100%',
                        minHeight: '300%',
                        backgroundImage:
                           'url(../../src/assets/img/FirstSeason/img_main.jpg)',
                        backgroundSize: '100% auto',
                        backgroundPosition: 'center top',
                        backgroundRepeat: 'no-repeat',
                        transition:
                           'transform .7s ease-out, top 1.5s ease-out .7s',
                        transform: `translateY(${transformValueImage})`,
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
                           src="../../src/assets/img/FirstSeason/bnr_second.jpg"
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
                        src="../../src/assets/img/FirstSeason/img_main-logo.png"
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
                  src="../../src/assets/img/FirstSeason/text_onair.png"
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
               backgroundImage:
                  'url(../../src/assets/img/FirstSeason/bg_pink.gif)',
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
         <Introduction
            transformValue={transformValueTriangle}
            isAnimated={introductionAnimated}
         />
         <StaffCast staffAnimated={staffAnimated} castAnimated={castAnimated} />
         <Trailer trailerAnimated={trailerAnimated} />
      </Box>
   )
}
