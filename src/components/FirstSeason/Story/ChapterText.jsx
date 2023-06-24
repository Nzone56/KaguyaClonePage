import { Box, Typography } from '@mui/material'
import { firstSeasonChapters } from '../../../data/firstSeasonChapters'
import React from 'react'

export const ChapterText = ({ activeButton }) => {
   const chapter = firstSeasonChapters[activeButton]
   const parts = Object.values(chapter.title)

   return (
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
                     Episode {activeButton}
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
               {parts.map((part, index) => (
                  <React.Fragment key={index}>
                     {part}
                     <br />
                  </React.Fragment>
               ))}
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
            Shuchiin Academy is a beacon for talented students with a bright
            future ahead of them. The vice-president of the student council,
            Kaguya Shinomiya, and the president, Miyuki Shirogane, are attracted
            to each other, but they are both too proud to be honest about their
            feelings. As a result, all they do is think about how to get the
            other person to confess their love. Six months pass without anything
            happening, when one day, a pair of tickets to “the movie that turns
            boys and girls who see it together into a couple” won by the
            secretary, Chika Fujiwara, triggers the cunning battle of love…
         </p>
      </Box>
   )
}
