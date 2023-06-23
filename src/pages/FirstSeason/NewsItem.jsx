import { Box, Typography } from '@mui/material'

export const NewsItem = ({ date, text, article, lastOne }) => {
   return (
      <li>
         <a
            href={article}
            target="_blank"
            rel="noopener noreferrer"
            style={{
               textDecoration: 'none',
            }}
         >
            <Box
               sx={{
                  position: 'relative',
                  padding: '2rem 0',
                  margin: '0',
                  '&:hover': {
                     '& > div:first-of-type': {
                        textDecoration: 'underline',
                        textDecorationColor: '#d9177a',
                     },
                     '& > div:last-of-type': {
                        textDecoration: 'underline',
                        textDecorationColor: '#fff',
                        //TODO: CHANGE THE SECOND UNDERLINE COLOR FROM HOVER
                     },
                  },
               }}
            >
               <Box>
                  <Typography
                     sx={{
                        marginBottom: '0.9rem',
                        color: '#d9177a',
                        fontWeight: 'bold',
                        fontSize: '12px',
                        lineHeight: '1em',
                        letterSpacing: '.05em',
                     }}
                  >
                     {date}
                  </Typography>
                  <Typography
                     sx={{
                        overflow: 'hidden',
                        color: '#fff',
                        fontSize: '14px',
                        lineHeight: '1em',
                        letterSpacing: '.05em',
                        whiteSpace: 'noWrap',
                        textOverflow: 'ellipsis',
                     }}
                  >
                     {text}
                  </Typography>
               </Box>
               {!lastOne ? (
                  <Box
                     sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '1px',
                        backgroundImage:
                           'url(../../src/assets/FirstSeason/dot_pink.png)',
                        backgroundRepeat: 'repeat-x',
                     }}
                  />
               ) : (
                  <></>
               )}
            </Box>
         </a>
      </li>
   )
}

{
   /* <a
               href={article}
               target="_blank"
               rel="noopener noreferrer"
               style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
               }}
            ></a> */
}
