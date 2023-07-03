import { Box, Typography } from '@mui/material'

export const Streaming = () => {
   return (
      <Box
         sx={{
            position: 'relative',
            width: '1080px',
            minHeight: '60vh',
            margin: '0 auto',
            paddingTop: '55px',
         }}
      >
         <Box
            sx={{
               position: 'relative',
               margin: '40px 0 90px',
               padding: '40px 48px 50px',
               background: '#000',
               color: '#fff',
            }}
         >
            <Typography
               component="h2"
               variant="h2"
               style={{ width: '620px', margin: '0 auto 20px' }}
            >
               <img
                  src={`../../src/assets/img/FirstSeason/Streaming/cap_onair.png`}
                  alt="Floating triangle"
                  style={{
                     width: 'auto',
                     height: '100%',
                     display: 'block',
                     maxWidth: '100%',
                  }}
               />
            </Typography>
            <Box sx={{ marginBottom: '0', textAlign: 'center' }}>
               <center>
                  <a href="https://www.crunchyroll.com/" target="_blank">
                     <img
                        src={`../../src/assets/img/FirstSeason/Streaming/crunchyroll.png`}
                        alt="Floating triangle"
                        style={{
                           width: '282px',
                           height: '122px',
                           display: 'block',
                           maxWidth: '100%',
                        }}
                     />
                  </a>
                  <a href="https://www.hulu.com/welcome" target="_blank">
                     <img
                        src={`../../src/assets/img/FirstSeason/Streaming/hulu.png`}
                        alt="Floating triangle"
                        style={{
                           width: '282px',
                           height: '122px',
                           display: 'block',
                           maxWidth: '100%',
                        }}
                     />
                  </a>
                  <a href="http://www.funimationnow.com/" target="_blank">
                     <img
                        src={`../../src/assets/img/FirstSeason/Streaming/funimation.png`}
                        alt="Floating triangle"
                        style={{
                           width: '282px',
                           height: '122px',
                           display: 'block',
                           maxWidth: '100%',
                        }}
                     />
                  </a>
               </center>
            </Box>
         </Box>
      </Box>
   )
}
