import { Box } from '@mui/material'
import { NavigationItem } from './NavigationItem'

export const NavigationBar = () => {
   return (
      <Box
         component="nav"
         sx={{
            display: 'flex',
            position: 'fixed',
            top: '0',
            left: '0',
            alignItems: 'center',
            zIndex: '10',
            marginTop: '180px',
            paddingBottom: '180px',
            width: '0',
            height: '600px',
         }}
      >
         <Box sx={{ position: 'relative' }}>
            <Box
               component="ul"
               sx={{
                  paddingLeft: '15px',
                  marginBottom: '7px',
                  listStyle: 'none',
               }}
            >
               <NavigationItem label={'TOP'} href={'/'} />
               <NavigationItem label={'NEWS'} href={'news'} />
               <NavigationItem label={'INTRO'} href={'/intro'} />
               <NavigationItem label={'STORY'} href={'/story'} />
               <NavigationItem label={'STAFF&CAST'} href={'/staffcast'} />
               <NavigationItem label={'STREAMING'} href={'/streaming'} />
               <NavigationItem label={'BLU-RAY'} href={'/bd'} />
               <NavigationItem label={'CHARACTER'} href={'/character'} />
               <NavigationItem label={'TRAILER'} href={'/trailer'} />
               <NavigationItem label={'COMICS'} href={'/comics'} />
               <NavigationItem label={'SPECIAL'} href={'/special'} />
               <NavigationItem label={'FACEBOOK'} href={'/facebook'} />
            </Box>
         </Box>
      </Box>
   )
}
