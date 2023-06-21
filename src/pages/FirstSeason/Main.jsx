import { Box } from '@mui/material'

export const Main = () => {
   return (
      <Box
         sx={{
            marginTop: '8rem',
            position: 'relative',
            width: '100%',
            minHeight: '980px',
            overflow: 'hidden',
            backgroundImage: 'url(../../src/assets/FirstSeason/img_main.jpg)',
            backgroundSize: '100% auto',
            backgroundPosition: '100% -23rem',
            backgroundRepeat: 'no-repeat',
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
   )
}
