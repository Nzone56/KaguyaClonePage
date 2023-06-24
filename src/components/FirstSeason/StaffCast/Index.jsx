import { Box, Typography } from '@mui/material'
import { BubbleArea } from '../Animated/BubbleArea'

export const StaffCast = ({ staffAnimated, castAnimated }) => {
   return (
      <Box
         id="staff"
         component="article"
         sx={{
            position: 'relative',
            backgroundImage: 'url(../../src/assets/FirstSeason/bg_pink.gif)',
         }}
      >
         <Box
            sx={{
               position: 'relative',
               padding: '85px 0 140px',
               overflow: 'hidden',
            }}
         >
            <BubbleArea />
            {/* STAFF TITTLE */}
            <Typography
               component="h2"
               variant="h2"
               sx={{
                  position: 'relative',
                  width: '240px',
                  transform: staffAnimated
                     ? 'translateX(0) translateY(0)'
                     : 'translateX(-10px)',
                  transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 0)',
                  opacity: staffAnimated ? '1' : '0',
               }}
            >
               <img
                  src="../../src/assets/FirstSeason/Staff/title_staff.png"
                  alt="Staff Title"
                  style={{
                     width: '100%',
                     maxWidth: '100%',
                     height: 'auto',
                     display: 'block',
                  }}
               />
            </Typography>
            <Box
               sx={{
                  position: 'relative',
                  width: '1080px',
                  margin: '0 auto',
                  paddingTop: '70px',
               }}
            >
               <Box
                  sx={{
                     position: 'relative',
                     transform: staffAnimated
                        ? 'translateX(0) translateY(0)'
                        : 'translateX(-10px)',
                     transition:
                        'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 0)',
                     opacity: staffAnimated ? '1' : '0',
                  }}
               >
                  <img
                     src="../../src/assets/FirstSeason/Staff/text_staff.png"
                     alt="Staff Text"
                     style={{
                        width: '100%',
                        maxWidth: '100%',
                        height: 'auto',
                        display: 'block',
                     }}
                  />
               </Box>
            </Box>
            <Typography
               component="h2"
               variant="h2"
               sx={{
                  position: 'relative',
                  width: '240px',
                  paddingTop: '140px',
                  transform: castAnimated
                     ? 'translateX(0) translateY(0)'
                     : 'translateX(-10px)',
                  transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 0)',
                  opacity: castAnimated ? '1' : '0',
               }}
            >
               <img
                  src="../../src/assets/FirstSeason/Staff/title_cast.png"
                  alt="Staff Title"
                  style={{
                     width: '100%',
                     maxWidth: '100%',
                     height: 'auto',
                     display: 'block',
                  }}
               />
            </Typography>
            <Box
               sx={{
                  position: 'relative',
                  width: '1080px',
                  margin: '0 auto',
                  paddingTop: '70px',
               }}
            >
               <Box
                  sx={{
                     position: 'relative',
                     transform: castAnimated
                        ? 'translateX(0) translateY(0)'
                        : 'translateX(-10px)',
                     transition:
                        'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 0)',
                     opacity: castAnimated ? '1' : '0',
                  }}
               >
                  <img
                     src="../../src/assets/FirstSeason/Staff/text_cast.png"
                     alt="Staff Text"
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
      </Box>
   )
}
