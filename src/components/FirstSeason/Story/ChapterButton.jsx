import { Box } from '@mui/material'

export const ChapterButton = ({ number }) => {
   return (
      <li
         style={{
            position: 'relative',
            width: '85px',
            height: '85px',
            margin: '0 auto 10px',
         }}
      >
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
                  color: '#a2a2a2',
                  fontSize: '18px',
                  lineHeight: '85px',
                  textAlign: 'center',
               }}
            >
               {number}
            </p>
         </Box>
      </li>
   )
}
