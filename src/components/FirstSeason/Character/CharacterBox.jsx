import { Box } from '@mui/material'
import { CharacterDescription } from './CharacterDescription'

export const CharacterBox = ({ activeButton }) => {
   return (
      <Box sx={{ position: 'relative' }}>
         <Box sx={{ overflow: 'hidden' }}>
            <Box component="ul" sx={{ listStyle: 'none' }}>
               <li
                  style={{
                     height: '1010px',
                     verticalAlign: 'top',
                     display: 'inline-block',
                     width: '1080px',
                     opacity: '1',
                     transform: 'translate3d(0px, 0px, 0px)',
                     transitionDuration: '600ms',
                  }}
               >
                  <Box sx={{ position: 'relative' }}>
                     <Box
                        sx={{
                           width: '1000px',
                           margin: '0 auto',
                           position: 'relative',
                        }}
                     >
                        {/* FULL BODY IMG  */}
                        <Box
                           sx={{
                              marginLeft: '10px',
                              width: '482px',
                              opacity: '1',
                              transform: 'rotateY(0)',
                              transformOrigin: '55% 50%',
                              transition:
                                 'all 1.45s cubic-bezier(.19, 1, .22, 1);',
                           }}
                        >
                           <img
                              src={`../../src/assets/img/FirstSeason/Character/${activeButton}/img_main01.png`}
                              alt={`${activeButton} full image`}
                              style={{
                                 width: '100%',
                                 maxWidth: '100%',
                                 height: 'auto',
                                 display: 'block',
                              }}
                           />
                        </Box>
                        {/* FACE IMAGES  */}
                        <Box
                           sx={{
                              position: 'absolute',
                              right: '0px',
                              bottom: '-67px',
                              width: '500px',
                              opacity: '1',
                              transform: 'rotateY(0)',
                              transition:
                                 'all 1.45s cubic-bezier(.19, 1, .22, 1)',
                              transformOrigin: 'center',
                           }}
                        >
                           <Box
                              sx={{
                                 textAlign: 'right',
                                 opacity: '1',
                                 transform: 'rotateY(0)',
                                 transformOrigin: '55% 50%',
                                 transition:
                                    'all 1.45s cubic-bezier(.19, 1, .22, 1);',
                              }}
                           >
                              <img
                                 src={`../../src/assets/img/FirstSeason/Character/${activeButton}/img_face01-02.png`}
                                 alt={`${activeButton} face`}
                                 style={{
                                    width: '250px',
                                    maxWidth: '100%',
                                    height: 'auto',
                                    display: 'inline-block',
                                 }}
                              />
                           </Box>
                           <Box
                              sx={{
                                 marginTop: '-45px',
                                 textAlign: 'left',
                                 display: 'block',
                                 opacity: '1',
                                 transform: 'rotateY(0)',
                                 transformOrigin: '55% 50%',
                                 transition:
                                    'all 1.45s cubic-bezier(.19, 1, .22, 1);',
                              }}
                           >
                              <img
                                 src={`../../src/assets/img/FirstSeason/Character/${activeButton}/img_face01-01.png`}
                                 alt={`${activeButton} face`}
                                 style={{
                                    width: '250px',
                                    maxWidth: '100%',
                                    height: 'auto',
                                    display: 'inline-block',
                                 }}
                              />
                           </Box>
                        </Box>
                     </Box>
                     <CharacterDescription activeButton={activeButton} />
                  </Box>
               </li>
            </Box>
         </Box>
      </Box>
   )
}
