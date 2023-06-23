import { Box } from '@mui/material'

export const Footer = () => {
   return (
      <Box component="footer" sx={{ posirion: 'relative', display: 'block' }}>
         <Box
            sx={{
               position: 'absolute',
               top: '52px',
               right: '0',
               left: '0',
               width: '100px',
               margin: 'auto',
               cursor: 'pointer',
               transition: 'all .5s ease',
            }}
         >
            <img
               src="../../src/assets/FirstSeason/Footer/btn_pagetop.png"
               alt="Footer botton"
               style={{
                  width: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block',
               }}
            />
         </Box>
         <Box
            sx={{
               position: 'relative',
               padding: '50px 0 45px',
               background: '#2a2a2a',
            }}
         ></Box>
      </Box>
   )
}
