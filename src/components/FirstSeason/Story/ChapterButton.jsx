import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { keyframes } from '@emotion/react'

const fade = keyframes`
  0% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
`

export const ChapterButton = ({ number, activeButton, setActiveButton }) => {
   const [isHovered, setIsHovered] = useState(false)
   const isActive = number === activeButton

   const handleMouseEnter = () => {
      setIsHovered(true)
   }

   const handleMouseLeave = () => {
      setIsHovered(false)
   }
   const handleOnClick = () => {
      setActiveButton(number)
   }
   return (
      <li
         style={{
            cursor: 'pointer',
            position: 'relative',
            width: '85px',
            height: '85px',
            margin: '0 auto 10px',
            listStyle: 'none',
         }}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         onClick={handleOnClick}
      >
         <Box
            sx={{
               content: `""`,
               position: 'absolute',
               top: '0',
               right: '0',
               left: '0',
               width: '85px',
               height: '85px',
               margin: 'auto',
               transition: 'all 1.65s cubic-bezier(.165, .84, .44, 1)',
               backgroundImage: isActive
                  ? 'url(../../src/assets/FirstSeason/Story/bg_num_on.png)'
                  : isHovered
                  ? 'url(../../src/assets/FirstSeason/Story/bg_num_on.png)'
                  : 'url(../../src/assets/FirstSeason/Story/bg_num_off.png)',
               backgroundSize: 'cover',
            }}
         />
         <Box
            sx={{
               position: 'relative',
               width: '85px',
               height: '85px',
            }}
         >
            {' '}
            <p
               style={{
                  position: 'relative',
                  width: '85px',
                  height: '85px',
                  margin: '0 auto',
                  verticalAlign: 'middle',
                  color: isActive ? '#fff' : isHovered ? '#fff' : '#a2a2a2',
                  fontSize: '18px',
                  lineHeight: '85px',
                  textAlign: 'center',
                  transition: 'all 1.65s cubic-bezier(.165, .84, .44, 1)',
               }}
            >
               {number}
            </p>
            <Box
               sx={{
                  display: 'block',
                  position: 'absolute',
                  top: '13px',
                  left: '13px',
                  content: `" "`,
                  opacity: '0',
                  width: '59px',
                  height: '59px',
                  padding: '4px',
                  border: '2px solid #e72e8c',
                  transform: 'rotate(45deg)',
                  transformOrigin: 'center',
                  transition: 'transform 1.65s cubic-bezier(.165, .84, .44, 1)',
                  filter: 'brightness(100%)',

                  '&:hover': {
                     transform: 'rotate(45deg) scale(1.2)',
                     animation: `${fade} 1.65s cubic-bezier(.165, .84, .44, 1)`,
                     filter: 'brightness(150%)',
                  },
               }}
            />
         </Box>
      </li>
   )
}
