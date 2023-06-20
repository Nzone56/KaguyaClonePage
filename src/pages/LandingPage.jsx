import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
   return (
      <Box>
         <Button component={Link} to="/1st">
            First Season
         </Button>
         <Button> Second Season </Button>
         <Button> Third Season </Button>
         <Button> Movie / Fourth Season </Button>
      </Box>
   )
}
