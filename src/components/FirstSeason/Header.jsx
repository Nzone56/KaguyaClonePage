import { AppBar, Box, Toolbar, styled } from '@mui/material'

const StyledLi = styled('li')({
   marginLeft: '37px',
   display: 'inline-block',
   position: 'relative',
   verticalAlign: 'middle',
})

const StyledImg = styled('img')({
   width: '100%',
   maxWidth: '100%',
   height: 'auto',
   display: 'block',
})

export const Header = () => {
   return (
      <AppBar sx={{ backgroundColor: 'black', height: '8rem' }}>
         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <a href="/1st">
               <StyledImg
                  src="../../src/assets/img/FirstSeason/header/logo_menu.png"
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
               <StyledLi>
                  <a href="/1st/news">
                     <StyledImg
                        src="../../src/assets/img/FirstSeason/header/menu_news.png"
                        alt="News"
                     />
                  </a>
               </StyledLi>
               <StyledLi>
                  <a href="/1st/#introduction">
                     <StyledImg
                        src="../../src/assets/img/FirstSeason/header/menu_intro.png"
                        alt="Introdcution"
                     />
                  </a>
               </StyledLi>
               <StyledLi>
                  <a href="/1st/story">
                     <StyledImg
                        src="../../src/assets/img/FirstSeason/header/menu_story.png"
                        alt="Story"
                     />
                  </a>
               </StyledLi>
               <StyledLi>
                  <a href="character">
                     <StyledImg
                        src="../../src/assets/img/FirstSeason/header/menu_chara.png"
                        alt="Characters"
                     />
                  </a>
               </StyledLi>
               <StyledLi>
                  <a href="/1st/#staff">
                     <StyledImg
                        src="../../src/assets/img/FirstSeason/header/menu_staff.png"
                        alt="Staff and Cast"
                     />
                  </a>
               </StyledLi>
               <StyledLi>
                  <a href="/1st/streaming">
                     <StyledImg
                        src="../../src/assets/img/FirstSeason/header/menu_streaming.png"
                        alt="Streaming"
                     />
                  </a>
               </StyledLi>
               <StyledLi>
                  <a href="/1st/bd">
                     <StyledImg
                        src="../../src/assets/img/FirstSeason/header/menu_bd-dvd.png"
                        alt="Blue ray and dvd"
                     />
                  </a>
               </StyledLi>
               <StyledLi>
                  <a href="/1st/#movie">
                     <StyledImg
                        src="../../src/assets/img/FirstSeason/header/menu_trailer.png"
                        alt="Trailer"
                     />
                  </a>
               </StyledLi>
               <StyledLi>
                  <a
                     href="https://www.facebook.com/kaguyasama.anime"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <StyledImg
                        src="../../src/assets/img/FirstSeason/header/menu_facebook.png"
                        alt="Facebook"
                     />
                  </a>
               </StyledLi>
            </Box>
         </Toolbar>
      </AppBar>
   )
}
