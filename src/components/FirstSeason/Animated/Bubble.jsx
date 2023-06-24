import { Box, keyframes } from '@mui/system'

const moveAnimation = keyframes`
   0% {
      transform: translate(0, 0);
   }
   100% {
      transform: translate(0, -5%);
   }
`

export const Bubble = ({ position, speed }) => {
   return (
      <Box
         className="bubble"
         sx={{
            position: 'absolute',
            bottom: '20%',
            left: `${position}%`,
            animation: `${moveAnimation} ${speed}s cubic-bezier(0.47, 0, 0.745, 0.715) 9.2s infinite normal`,
            WebkitAnimation: `${moveAnimation} ${speed}s cubic-bezier(0.47, 0, 0.745, 0.715) 9.2s infinite normal`,
         }}
         //TODO: ANIMATION FROM BUBBLE UP
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
