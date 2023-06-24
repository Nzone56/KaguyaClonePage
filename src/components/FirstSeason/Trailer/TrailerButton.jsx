import { Box } from '@mui/material'

export const TrailerButton = ({ content, isActive, onClick }) => {
   const handleMouseEnter = (e) => {
      if (!isActive) {
         e.currentTarget.style.border = 'solid 1px #e72e8c'
      }
   }

   const handleMouseLeave = (e) => {
      if (!isActive) {
         e.currentTarget.style.border = 'solid 1px #4b4b4b'
      }
   }
   return (
      <li
         style={{
            marginLeft: '0',
            border: isActive ? 'solid 1px #e72e8c' : 'solid 1px #4b4b4b',
            display: 'inline-block',
            position: 'relative',
            width: '32rem',
            marginBottom: '1rem',
            marginLeft: '0.5rem',
            padding: '3px',
            verticalAlign: 'top',
            cursor: 'pointer',
            transition: '.3s',
            boxSizing: 'borderBox',
         }}
         onClick={onClick}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
         <Box
            sx={{
               background: isActive ? '#e72e8c' : '#4b4b4b',
               position: 'relative',
               padding: '2rem',
               transition: '.3s',
               '&:hover': { background: '#e72e8c' },
            }}
         >
            <p
               style={{
                  color: '#fff',
                  fontSize: '14px',
                  lineHeight: '1.3em',
                  margin: 0,
               }}
            >
               {content}
            </p>
         </Box>
      </li>
   )
}
