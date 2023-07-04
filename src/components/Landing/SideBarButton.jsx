import { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { keyframes } from '@emotion/react'

const fade = keyframes`
   0% {
      opacity:0

   }
   100% {
      opacity: 1
   }
`

export const SideBarButton = ({
   id,
   styles,
   title,
   color,
   href,
   hoverContent,
   setSeason,
}) => {
   const [isHovered, setIsHovered] = useState(false)

   const handleOnClick = () => {
      setSeason(id)
   }

   const handleHover = () => {
      setIsHovered(true)
   }

   const handleMouseLeave = () => {
      setIsHovered(false)
   }

   return (
      <Box
         component="li"
         sx={{
            margin: '5%',
            padding: '2%',
            border: `1px solid ${color}`,
            '&:hover': {
               animation: `${fade} 1.5s linear`,
            },
         }}
         onMouseOver={handleHover}
         onMouseLeave={handleMouseLeave}
      >
         {isHovered ? (
            <Box onClick={handleOnClick} sx={{ cursor: 'pointer' }}>
               {hoverContent}
            </Box>
         ) : (
            <Typography
               variant="h2"
               component="h2"
               sx={{
                  ...styles.title1,
                  fontSize: '25px',
                  color: `${color}`,
               }}
            >
               {title}
            </Typography>
         )}
      </Box>
   )
}
