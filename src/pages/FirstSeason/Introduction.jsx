import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export const Introduction = ({ transformValue, isAnimated }) => {
   // TODO: MIXIN OR SMTH TO GROPU AND RE-USE ANIMATION CSS

   return (
      <Box
         id="introduction"
         component="article"
         sx={{
            position: 'relative',
            padding: '8.5rem 0',
            backgroundImage: `
             url(../../src/assets/FirstSeason/Introduction/bg_box.png), 
      url(../../src/assets/FirstSeason/Introduction/bg_pink-line_lt.png),
      url(../../src/assets/FirstSeason/Introduction/bg_pink-line_rb.png),
          
      linear-gradient(#000, #000)`,

            backgroundPosition: 'center center, top left, bottom right',
            backgroundSize: 'cover, 364px 332px, 832px 170px',
            backgroundRepeat: 'no-repeat',
         }}
      >
         {/* FLOATING TRIANGLE 1  */}
         <Box
            sx={{
               position: 'absolute',
               top: '210px',
               left: '-300px',
               width: '416px',
               overflow: 'hidden',
               transition:
                  'transform 5s cubic-bezier(0.19, 1, 0.22, 1), -webkit-transform 5s cubic-bezier(0.19, 1, 0.22, 1)',
               transform: `translateY(${transformValue})`,
            }}
         >
            <img
               src="../../src/assets/FirstSeason/Introduction/triangle0001.png"
               alt="Floating triangle"
               style={{
                  width: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block',
               }}
            />
         </Box>
         {/* FLOATING TRIANGLE 2  */}
         <Box
            sx={{
               position: 'absolute',
               bottom: '-470px',
               right: '-60px',
               width: '416px',
               overflow: 'hidden',
               zIndex: '5',
               transition:
                  'transform 5s cubic-bezier(0.19, 1, 0.22, 1), -webkit-transform 5s cubic-bezier(0.19, 1, 0.22, 1)',
               transform: `translateY(${transformValue})`,
            }}
         >
            <img
               src="../../src/assets/FirstSeason/Introduction/triangle0010.png"
               alt="Floating triangle"
               style={{
                  width: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block',
               }}
            />
         </Box>
         {/* INTRODUCTION TITTLE */}
         <Typography
            component="h2"
            variant="h2"
            sx={{
               display: 'block',

               position: 'relative',
               width: '39rem',
               transform: isAnimated
                  ? 'translateX(0) translateY(0)'
                  : 'translateX(-10px)',
               transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 0)',
               opacity: isAnimated ? '1' : '0',
            }}
         >
            <img
               src="../../src/assets/FirstSeason/Introduction/title_intro.png"
               alt="Logo de la empresa"
               style={{
                  width: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block',
               }}
            />
         </Typography>
         {/* INTRODUCTION DESCRIPTION  */}
         <Box
            sx={{
               position: 'relative',
               width: '68rem',
               margin: '0 auto ',
               padding: '45px 0 90px ',
            }}
         >
            <Box
               sx={{
                  position: 'absolute',
                  top: '-100px',
                  right: '-180px',
                  width: '102px',
                  background: `url("../../src/assets/FirstSeason/Introduction/bg_triangle01-2.png")`,
                  height: '80px',
                  transform: isAnimated
                     ? 'translateX(0) translateY(0)'
                     : 'translateX(-10px)',
                  transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 0)',
                  opacity: isAnimated ? '1' : '0',
               }}
            />
            <Box
               sx={{
                  transform: isAnimated
                     ? 'translateX(0) translateY(0)'
                     : 'translateX(-10px)',
                  transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 0)',
                  opacity: isAnimated ? '1' : '0',
               }}
            >
               <Typography
                  component="p"
                  variant="body1"
                  sx={{ width: '68rem', margin: '0 auto' }}
               >
                  <img
                     src="../../src/assets/FirstSeason/Introduction/text_intro.png"
                     alt="Logo de la empresa"
                     style={{
                        width: '100%',
                        maxWidth: '100%',
                        height: 'auto',
                        display: 'block',
                     }}
                  />
               </Typography>
            </Box>
            <Box
               sx={{
                  position: 'absolute',
                  bottom: '80px',
                  left: '-180px',
                  width: '66px',
                  background: `url("../../src/assets/FirstSeason/Introduction/bg_triangle02-2.png")`,
                  height: '52px',
                  transform: isAnimated
                     ? 'translateX(0) translateY(0)'
                     : 'translateX(-10px)',
                  transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 0)',
                  opacity: isAnimated ? '1' : '0',
               }}
            />
         </Box>
      </Box>
   )
}
