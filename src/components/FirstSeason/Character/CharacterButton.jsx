import { Box } from '@mui/material'
import { useState } from 'react'
import { keyframes } from '@emotion/react'

const fade = keyframes`
  0% {
    opacity: 1
  }
  100% {
    opacity: 0
  }
`

export const CharacterButton = ({ name, activeButton, setActiveButton }) => {
   const [isHovered, setIsHovered] = useState(false)
   const isActive = name === activeButton

   const handleMouseEnter = () => {
      setIsHovered(true)
   }

   const handleMouseLeave = () => {
      setIsHovered(false)
   }
   const handleOnClick = () => {
      setActiveButton(name)
   }

   return (
      <li
         style={{ marginBottom: '18px', cursor: 'pointer' }}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
         onClick={handleOnClick}
      >
         <Box sx={{ width: '85px', height: '85px', position: 'relative' }}>
            <Box
               sx={{
                  position: 'relative',
                  width: '70%',
                  height: '70%',
                  margin: '0 auto',
                  background: isActive ? '#e72e8c' : '#636363',
                  transition:
                     'background-color .65s cubic-bezier(.165, .84, .44, 1)',
                  transitionProperty: 'background-color',
                  transitionDuration: '1.25s',
                  transitionTimingFunction:
                     'cubic-bezier(0.165, 0.84, 0.44, 1)',
                  transform: 'rotate(45deg) translate(15%, 15%)',
                  transformOrigin: 'center',
                  '::before': {
                     content: `" "`,
                     display: 'block',
                     position: 'absolute',
                     top: '50%',
                     left: '50%',
                     transform: 'translate(-50%, -50%)',
                     width: '100%',
                     height: '100%',
                     padding: '4px',
                     border: isActive
                        ? '2px solid #e72e8c'
                        : isHovered
                        ? '2px solid #e72e8c'
                        : '2px solid #636363',
                     transition:
                        'border-color .65s cubic-bezier(.165, .84, .44, 1)',
                  },

                  '::after': {
                     content: `" "`,
                     display: 'block',
                     position: 'absolute',
                     opacity: '0',
                     zIndex: '-1',
                     top: '50%',
                     left: '50%',
                     width: '100%',
                     height: '100%',
                     padding: '4px',
                     border: isActive
                        ? '2px solid #e72e8c'
                        : '2px solid #636363',
                     transform: 'translate(-50%, -50%)',
                     transformOrigin: 'center ',
                  },
               }}
            >
               <Box
                  sx={{
                     width: '100%',
                     overflow: 'hidden',
                     transformOrigin: 'center',
                  }}
               >
                  <img
                     src={`../../src/assets/img/FirstSeason/Character/${name}/thumb_chara01.png`}
                     alt={`${name} button`}
                     style={{
                        width: '100%',
                        maxWidth: '100%',
                        height: 'auto',
                        display: 'block',
                        transform: 'rotate(-45deg) scale(1.5)',
                     }}
                  />
                  <Box
                     sx={{
                        display: 'block',
                        position: 'absolute',
                        top: '-5px',
                        left: '-5px',
                        content: `" "`,
                        opacity: '0',
                        width: '71px',
                        height: '71px',
                        padding: '4px',
                        border: '2px solid #e72e8c',
                        transformOrigin: 'center',
                        transition:
                           'transform 1.65s cubic-bezier(.165, .84, .44, 1)',
                        filter: 'brightness(100%)',
                        '&:hover': {
                           transform: 'scale(1.2)',
                           animation: `${fade} 1.65s cubic-bezier(.165, .84, .44, 1)`,
                           filter: 'brightness(150%)',
                        },
                     }}
                  />
               </Box>
            </Box>
         </Box>
      </li>
   )
}
