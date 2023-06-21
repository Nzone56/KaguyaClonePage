import { AppBar, Box, Toolbar } from '@mui/material'

export const Header = () => {
   return (
      <AppBar
         sx={{
            backgroundColor: 'black',
            height: '8rem',
         }}
      >
         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <a href="/1st">
               <img
                  src="../../src/assets/FirstSeason/header/logo_menu.png"
                  alt="Logo de la empresa"
               />
            </a>
            <Box
               component="ul"
               style={{
                  margin: 0,
                  listStyleType: 'none',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
               }}
            >
               <li style={{ marginLeft: '3.6rem' }}>
                  <a href="/news/">
                     <img
                        src="../../src/assets/FirstSeason/header/menu_news.png"
                        alt="Logo de la empresa"
                     />
                  </a>
               </li>
               <li style={{ marginLeft: '3.6rem' }}>
                  <a href="/#introduction">
                     <img
                        src="../../src/assets/FirstSeason/header/menu_intro.png"
                        alt="Logo de la empresa"
                     />
                  </a>
               </li>
               <li style={{ marginLeft: '3.6rem' }}>
                  <a href="/story/">
                     <img
                        src="../../src/assets/FirstSeason/header/menu_story.png"
                        alt="Logo de la empresa"
                     />
                  </a>
               </li>
               <li style={{ marginLeft: '3.6rem' }}>
                  <a href="/character/">
                     <img
                        src="../../src/assets/FirstSeason/header/menu_chara.png"
                        alt="Logo de la empresa"
                     />
                  </a>
               </li>
               <li style={{ marginLeft: '3.6rem' }}>
                  <a href="/#staff">
                     <img
                        src="../../src/assets/FirstSeason/header/menu_staff.png"
                        alt="Logo de la empresa"
                     />
                  </a>
               </li>
               <li style={{ marginLeft: '3.6rem' }}>
                  <a href="/streaming/">
                     <img
                        src="../../src/assets/FirstSeason/header/menu_streaming.png"
                        alt="Logo de la empresa"
                     />
                  </a>
               </li>
               <li style={{ marginLeft: '3.6rem' }}>
                  <a href="/bd/">
                     <img
                        src="../../src/assets/FirstSeason/header/menu_bd-dvd.png"
                        alt="Logo de la empresa"
                     />
                  </a>
               </li>
               <li style={{ marginLeft: '3.6rem' }}>
                  <a href="/#movie">
                     <img
                        src="../../src/assets/FirstSeason/header/menu_trailer.png"
                        alt="Logo de la empresa"
                     />
                  </a>
               </li>
               <li style={{ marginLeft: '3.6rem' }}>
                  <a
                     href="https://www.facebook.com/kaguyasama.anime"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <img
                        src="../../src/assets/FirstSeason/header/menu_facebook.png"
                        alt="Logo de la empresa"
                     />
                  </a>
               </li>
            </Box>
         </Toolbar>
      </AppBar>
   )
}