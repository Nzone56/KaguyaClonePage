import { Box } from '@mui/system'
import { keyframes } from '@emotion/react'

const move = keyframes`
   0% {
      transform: translateY(0px)

   }
   100% {
      transform: translateY(-2000px);
      opacity: 0
   }
`
//TODO: WHY DELAY
export const Bubble = ({ position, speed }) => {
   return (
      <Box
         className="bubble"
         sx={{
            position: 'absolute',
            bottom: '-20%',
            left: `${position}%`,
            animation: `${move} ${speed}s cubic-bezier(0.47, 0, 0.745, 0.715) 9.2s infinite normal`,
         }}
      >
         <span
            style={{
               display: 'block',
               position: 'relative',
               width: '3rem',
               height: '3rem',
               backgroundImage:
                  'url(../../src/assets/FirstSeason/bg_hearts2.png)',
               backgroundSize: 'contain',
            }}
         ></span>
      </Box>
   )
}
