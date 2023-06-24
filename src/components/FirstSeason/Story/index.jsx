import { Box, Typography } from '@mui/material'
import { ChapterButton } from './ChapterButton'
export const Story = () => {
   return (
      <Box
         sx={{ position: 'relative', paddingTop: '80px', overflow: 'hidden' }}
      >
         <Box sx={{ position: 'relative', padding: '40px 0 110px' }}>
            <Box sx={{ position: 'absolute', top: '0', left: '0' }}>
               <img
                  src="../../src/assets/FirstSeason/Introduction/bg_pink-line_lt.png"
                  alt="Floating triangle"
                  style={{
                     width: '100%',
                     maxWidth: '100%',
                     height: 'auto',
                     display: 'block',
                  }}
               />
            </Box>
            {/* TODO: ALL FLOATING THINGS  */}
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
                     src="../../src/assets/FirstSeason/Story/title_story.png"
                     alt="Floating triangle"
                     style={{
                        width: 'auto',
                        height: '100%',
                        display: 'block',
                     }}
                  />
               </Box>
            </Box>
            {/* STORY MAIN */}
            <Box
               sx={{
                  position: 'static',
                  width: '1080px',
                  minHeight: '60vh',
                  margin: '0 auto',
                  paddingTop: '55px',
               }}
            >
               {/* CHAPTER SELECTOR */}
               <Box
                  sx={{
                     position: 'absolute',
                     top: '50%',
                     left: '30px',
                     zIndex: '1',
                     transform: 'translate(0%, 50%)',
                     width: '100px',
                  }}
               >
                  <Box
                     sx={{
                        height: '100%',
                        position: 'relative',
                        zIndex: '1',
                        margin: '0 auto',
                        padding: '0',
                     }}
                  >
                     <Box component="ul" sx={{ display: 'block' }}>
                        <ChapterButton number={'01'} />
                        <ChapterButton number={'02'} />
                     </Box>
                  </Box>
               </Box>
               {/* CHAPTER BOX  */}
               <Box
                  component="section"
                  sx={{
                     position: 'relative',
                     width: '980px',
                     margin: '0 auto',
                     padding: '3px',
                     border: 'solid 1px #000',
                  }}
               >
                  <Box
                     sx={{
                        position: 'relative',
                        padding: '40px 0',
                        backgroundImage:
                           'url(../../src/assets/FirstSeason/bg_pink.gif)',
                     }}
                  >
                     <Box
                        sx={{
                           position: 'relative',
                           width: '900px',
                           margin: '0 auto',
                        }}
                     >
                        <Box
                           sx={{
                              height: 'auto',
                              position: 'relative',
                              zIndex: '1',
                              margin: '0 auto',
                              padding: '0',
                              listStyle: 'none',
                           }}
                        >
                           <img
                              src="../../src/assets/FirstSeason/Story/11.jpg"
                              alt="Floating triangle"
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
            </Box>
         </Box>
      </Box>
   )
}
