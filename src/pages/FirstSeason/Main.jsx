import { Box } from '@mui/material'
import { BubbleArea } from './BubbleArea'
import { NewsPreview } from './NewsPreview'

export const Main = () => {
   return (
      <Box
         sx={{
            marginTop: '8rem',
            position: 'relative',
            overflow: 'hidden',
         }}
      >
         <Box
            component="article"
            sx={{
               position: 'relative',
               width: '100%',
               minHeight: '980px',
               overflow: 'hidden',
               backgroundImage:
                  'url(../../src/assets/FirstSeason/img_main.jpg)',
               backgroundSize: '100% auto',
               backgroundPosition: '100% -23rem',
               backgroundRepeat: 'no-repeat',
               // transform: 'translateY(-5px)',
            }}
            //TODO: ANIMATION FROM SCROLLING DOWN
         >
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
         <Box
            sx={{
               position: 'absolute',
               left: '50%',
               bottom: '53.4rem',
               width: '69rem',
               zIndex: '10',
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
      </Box>
   )
}
