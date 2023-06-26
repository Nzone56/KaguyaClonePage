import { Box, Typography } from '@mui/material'
import React from 'react'

export const NewsList = ({ news, page }) => {
   //TODO: idk if i ll but put src and create the page for every news
   return (
      <Box component="ul" sx={{ marginBottom: '40px', listStyle: 'none' }}>
         {news[page].map((newpage) => (
            <li
               key={newpage.content + newpage.date}
               style={{
                  position: 'relative',
                  marginBottom: '10px',
                  padding: '3px',
                  border: 'solid 1px #2a2a2a',
                  transition: '.3s',
                  cursor: 'pointer',
               }}
            >
               <Box
                  sx={{
                     position: 'relative',
                     padding: '20px',
                     background: '#2a2a2a',
                     transition: '.3s',
                     '&:hover': {
                        background: '#d9177a',
                        '& p:first-of-type': {
                           color: '#2a2a2a',
                        },
                     },
                  }}
               >
                  <Typography
                     component="p"
                     sx={{
                        marginBottom: '5px',
                        color: '#d9177a',
                        fontWeight: '500',
                        fontSize: '14px',
                        transition: '.3s',
                        fontFamily: 'Kreon, serif',
                        lineHeight: '14px',
                     }}
                  >
                     {newpage.date}
                  </Typography>
                  <Typography
                     component="p"
                     sx={{
                        color: '#fff',
                        fontSize: '18px',
                        wordBreak: 'break-all',
                        fontFamily: 'Kreon, serif',
                        lineHeight: '1.3em',
                     }}
                  >
                     {newpage.content}
                  </Typography>
               </Box>
            </li>
         ))}
      </Box>
   )
}

{
   /* <a
               style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
               }}
            >
            </a> */
}
