import { Box, Typography } from '@mui/material'
import { SideBarButton } from './SideBarButton'

const styles = {
   title1: {
      fontFamily: 'Big John Regular',
      fontSize: '23px',
      textAlign: 'center',
      color: '#fff',
      letterSpacing: '4px',
      fontWeight: 'bold',
   },
   title2: {
      fontFamily: 'Big John Bold',
      fontSize: '42px',
      textAlign: 'center',
      color: '#fff',
      letterSpacing: '0.2em',
      textDecorationThickness: '2px',
      textDecoration: 'line-through',
      textDecorationColor: '#ec1f23',
   },
}

export const SideBar = ({ season, setSeason }) => {
   return (
      <Box
         sx={{
            width: '30%',
            height: '100vh',
            background: '#000',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            boxShadow: '20px 0px 45px 30px rgba(0,0,0,0.75)',
            zIndex: '1',
         }}
      >
         <Box>
            <img
               src={`../../src/assets/img/Landing/${season}-cover.jpg`}
               alt="Season Cover"
               style={{
                  width: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block',
               }}
            />
            <Box sx={{ backgroundColor: '#fff' }}>
               <img
                  src="../../src/assets/img/Landing/logo.png"
                  alt="Floating triangle"
                  style={{
                     padding: '2%',
                     width: '100%',
                     maxWidth: '100%',
                     height: 'auto',
                     display: 'block',
                  }}
               />
            </Box>
         </Box>
         <Box component="ul" style={{ listStyle: 'none' }}>
            <SideBarButton
               id={'first'}
               styles={styles}
               title={'1 SEASON'}
               color={'#ec1f23'}
               href={'1st/'}
               hoverContent={hoverContents.first}
               setSeason={setSeason}
            />
            <SideBarButton
               id={'second'}
               styles={styles}
               title={'2 SEASON'}
               color={'#ec1f23'}
               href={'2nd/'}
               hoverContent={hoverContents.second}
               setSeason={setSeason}
            />
            <SideBarButton
               id={'third'}
               styles={styles}
               title={'3 SEASON'}
               color={'#ed1848'}
               href={'3rd/'}
               hoverContent={hoverContents.third}
               setSeason={setSeason}
            />
            <SideBarButton
               id={'movie'}
               styles={styles}
               title={'MOVIE'}
               color={'#e71850'}
               href={'movie/'}
               hoverContent={hoverContents.fourth}
               setSeason={setSeason}
            />
         </Box>
      </Box>
   )
}

const hoverContents = {
   first: (
      <>
         <Typography variant="h2" component="h2" sx={styles.title1}>
            KAGUYA - SAMA
         </Typography>
         <Typography
            className="strike-animation"
            variant="h2"
            component="h2"
            sx={styles.title2}
         >
            LOVE IS WAR
         </Typography>
      </>
   ),
   second: (
      <>
         <Typography variant="h2" component="h2" sx={styles.title1}>
            KAGUYA - SAMA
         </Typography>
         <Typography variant="h2" component="h2" sx={styles.title2}>
            LOVE IS WAR
            <span style={{ color: '#ed1f24' }}>?</span>
         </Typography>
      </>
   ),
   third: (
      <>
         {' '}
         <Typography variant="h2" component="h2" sx={styles.title1}>
            KAGUYA - SAMA
         </Typography>
         <Typography variant="h2" component="h2" sx={styles.title2}>
            LOVE IS WAR
         </Typography>
         <Typography
            variant="h2"
            component="h2"
            sx={{
               fontFamily: 'Big John Regular',
               fontSize: '35px',
               display: 'block',
               textAlign: 'center',
               color: '#fff',
               backgroundColor: '#ed1848',
            }}
         >
            - Ultra Romantic -
         </Typography>
      </>
   ),
   fourth: (
      <>
         <Typography
            variant="h2"
            component="h2"
            sx={{ ...styles.title1, fontSize: '20px' }}
         >
            KAGUYA - SAMA :<span style={{ color: '#e71850' }}> LOVE</span> IS
            WAR
         </Typography>
         <Typography
            variant="h2"
            component="h2"
            sx={{
               fontFamily: 'Big John Regular',
               fontStyle: 'italic',
               fontSize: '18px',
               display: 'block',
               textAlign: 'center',
               color: '#e71850',
               marginTop: '5px',
               letterSpacing: '0.1em',
            }}
         >
            - The First Kiss That Never Ends -
         </Typography>
      </>
   ),
}
