import { useState } from 'react'
import { Box } from '@mui/material'

export const NewsButton = ({ number, activeTab, setActiveTab }) => {
   const [isHovered, setIsHovered] = useState(false)
   const isActive = number === activeTab

   const handleMouseEnter = () => {
      setIsHovered(true)
   }

   const handleMouseLeave = () => {
      setIsHovered(false)
   }
   const handleOnClick = () => {
      setActiveTab(number)
   }

   return (
      <li
         style={{
            display: 'inline-block',
            position: 'relative',
            width: '80px',
            height: '80px',
            marginBottom: '10px',
            verticalAlign: 'top',
            letterSpacing: 'normal',
            cursor: 'pointer',
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
               width: '80px',
               height: '80px',
               margin: 'auto',
               backgroundImage: isActive
                  ? 'url(../../src/assets/FirstSeason/Story/bg_num_on.png)'
                  : isHovered
                  ? 'url(../../src/assets/FirstSeason/Story/bg_num_on.png)'
                  : 'url(../../src/assets/FirstSeason/Story/bg_num_off.png)',
               backgroundSize: 'cover',
            }}
         />
         <Box sx={{ position: 'relative', width: '35px', height: '35px' }}>
            <p
               style={{
                  position: 'relative',
                  top: '0',
                  right: '0',
                  left: '0',
                  width: '80px',
                  height: '80px',
                  margin: '0 auto',
                  verticalAlign: 'middle',
                  color: isActive ? '#fff' : isHovered ? '#fff' : '#696969',
                  fontSize: '18px',
                  lineHeight: '80px',
                  textAlign: 'center',
               }}
            >
               {number}
            </p>
         </Box>
      </li>
   )
}
