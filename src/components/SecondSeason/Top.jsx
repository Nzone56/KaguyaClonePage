import { Box, Typography } from '@mui/material'

export const Top = () => {
   return (
      <Box sx={{ position: 'relative', padding: '40px 0 138px' }}>
         <Box sx={{ position: 'relative' }}>
            <Typography
               component="h1"
               variant="h1"
               sx={{
                  position: 'absolute',
                  top: '-100px',
                  right: '28%',
                  bottom: '0',
                  marginTop: 'auto',
                  marginRight: '23%',
                  marginBottom: 'auto',
                  width: '450px',
               }}
            >
               <img
                  src="../../src/assets/img/SecondSeason/Top/logo.png"
                  alt="Logo second season"
                  style={{
                     display: 'block',
                     maxWidth: '100%',
                     height: 'auto',
                     verticalAlign: 'middle',
                  }}
               />
            </Typography>
            <Box
               sx={{
                  margin: '0 auto 28px',
                  boxShadow: '0px 20px 33px 0px rgb(0 0 0 / 40%)',
                  width: '52%',
                  maxWidth: '760px',
                  marginTop: '100px',
               }}
            >
               <img
                  src="../../src/assets/img/SecondSeason/Top/img_main02.jpg"
                  alt="Premier Date"
                  style={{
                     display: 'block',
                     maxWidth: '100%',
                     height: 'auto',
                     verticalAlign: 'middle',
                  }}
               />
            </Box>
            <Box
               sx={{
                  position: 'absolute',
                  top: '-90px',
                  left: '28%',
                  bottom: '0',
                  marginTop: 'auto',
                  marginLeft: '23%',
                  marginBottom: 'auto',
                  width: '400px',
               }}
            >
               <img
                  src="../../src/assets/img/SecondSeason/Top/text_catch.png"
                  alt="Premier Date"
                  style={{
                     display: 'block',
                     maxWidth: '100%',
                     height: 'auto',
                     verticalAlign: 'middle',
                  }}
               />
            </Box>
         </Box>
         <Typography> HOLAAAAAAAAAAAA </Typography>
         <Box
            sx={{
               position: 'absolute',
               right: '38%',
               bottom: '0',
               width: '367px',
            }}
         >
            {/* TODO: MAKE THIS A CAROUSEL  */}
            <Box
               sx={{
                  boxShadow: '0px 20px 33px 0px rgb(0 0 0 / 40%)',
                  position: 'relative',
                  zIndex: '1',
               }}
            >
               <a
                  href="/1st"
                  style={{
                     display: 'block',
                     position: 'relative',
                     width: '367px',
                     height: '100%',
                  }}
               >
                  <img
                     src="../../src/assets/img/SecondSeason/Top/bn_1stofficial.jpg"
                     alt="Premier Date"
                     style={{
                        display: 'block',
                        maxWidth: '100%',
                        height: 'auto',
                        verticalAlign: 'middle',
                     }}
                  />
               </a>
            </Box>
            <Box
               sx={{
                  fontWeight: 'bold',
                  textAlign: 'right',
                  position: 'relative',
                  zIndex: '1',
                  padding: '10px 4px 5px',
                  color: '#000',
                  fontFamily: ' "Cormorant Garamond", "Noto Serif JP", serif',
                  fontSize: '15px',
                  letterSpacing: '0.3em',
                  lineHeight: '1',
               }}
            >
               <span> 01 </span>
               <span> - 02 </span>
            </Box>
         </Box>
      </Box>
   )
}
