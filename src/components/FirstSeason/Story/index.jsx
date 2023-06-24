import { Box, Typography } from '@mui/material'
import { ChapterList } from './ChapterList'

export const Story = () => {
   return (
      <Box
         sx={{ position: 'relative', paddingTop: '80px', overflow: 'hidden' }}
      >
         <Box
            sx={{
               position: 'fixed',
               content: `""`,
               top: '0',
               left: '0',
               width: '100%',
               height: '100%',
               backgroundImage:
                  'url(../../src/assets/FirstSeason/Introduction/bg_box.png), linear-gradient(#000, #000) ',
               backgroundPosition: 'left center',
               backgroundSize: 'cover',
            }}
         />
         <Box
            sx={{
               position: 'relative',
               padding: '40px 0 110px',
            }}
         >
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
                     top: '51.7%',
                     left: '30px',
                     zIndex: '1',
                     transform: 'translate(0%, -50%)',
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
                        overflow: 'hidden',
                     }}
                  >
                     <ChapterList />
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
                  {/* IMG CAROUSEL  */}
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
                              src={`../../src/assets/FirstSeason/Story/01/02.jpg`}
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
                  {/* STORY TEXT  */}
                  <Box
                     sx={{
                        padding: '45px 85px',
                        background: '#000',
                        fontFamily: 'Kreon, serif',
                     }}
                  >
                     <Box sx={{ display: 'table', marginBottom: '45px' }}>
                        <Box
                           sx={{
                              display: 'table-cell',
                              width: '100px',
                              verticalAlign: 'top',
                           }}
                        >
                           <p
                              style={{
                                 width: '100%',
                                 padding: '13px 0',
                                 background: '#636363',
                                 textAlign: 'center',
                              }}
                           >
                              <span
                                 style={{
                                    color: '#fff',
                                    fontSize: '18px',
                                    lineHeight: '1.3em',
                                    letterSpacing: '1.3px',
                                 }}
                              >
                                 Episode 01
                              </span>
                           </p>
                        </Box>
                        <Typography
                           component="h3"
                           variant="h3"
                           sx={{
                              display: 'table-cell',
                              paddingLeft: '20px',
                              verticalAlign: 'top',
                              color: '#ea2e8f',
                              fontWeight: '500',
                              fontSize: '41px',
                              lineHeight: '1.3em',
                              fontFamily: 'Kreon, serif',
                           }}
                        >
                           I Will Make You Invite Me to a Movie
                           <br />
                           Kaguya Wants to Be Stopped
                           <br />
                           Kaguya Wants It
                        </Typography>
                     </Box>
                     <p
                        style={{
                           marginBottom: '50px',
                           color: '#fff',
                           fontSize: '18px',
                           lineHeight: '2em',
                           letterSpacing: '1.3px',
                           textAlign: 'jusitfy',
                        }}
                     >
                        Shuchiin Academy is a beacon for talented students with
                        a bright future ahead of them. The vice-president of the
                        student council, Kaguya Shinomiya, and the president,
                        Miyuki Shirogane, are attracted to each other, but they
                        are both too proud to be honest about their feelings. As
                        a result, all they do is think about how to get the
                        other person to confess their love. Six months pass
                        without anything happening, when one day, a pair of
                        tickets to “the movie that turns boys and girls who see
                        it together into a couple” won by the secretary, Chika
                        Fujiwara, triggers the cunning battle of love…
                     </p>
                  </Box>
               </Box>
            </Box>
         </Box>
      </Box>
   )
}
