import { Box } from '@mui/material'

export const Footer = () => {
   const handleScrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      })
   }
   const handleMouseEnter = (e) => {
      e.currentTarget.style.opacity = '0.5'
   }

   const handleMouseLeave = (e) => {
      e.currentTarget.style.opacity = '1'
   }

   return (
      <Box component="footer" sx={{ position: 'relative', display: 'block' }}>
         <Box
            onClick={handleScrollToTop}
            sx={{
               position: 'absolute',
               top: '-52px',
               right: '0',
               left: '0',
               width: '100px',
               margin: 'auto',
               cursor: 'pointer',
               transition: 'all .5s ease',
               '&:hover ': { transform: 'translateY(15px)' },
            }}
         >
            <img
               src="../../src/assets/img/FirstSeason/Footer/btn_pagetop.png"
               alt="Footer botton"
               style={{
                  width: '100%',
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block',
               }}
            />
         </Box>
         <Box
            sx={{
               position: 'relative',
               padding: '50px 0 45px',
               background: '#2a2a2a',
            }}
         >
            {/* SHARE TITTLE  */}
            <Box sx={{ marginBottom: '45px' }}>
               <p style={{ width: '88px', margin: '0 auto 20px' }}>
                  <img
                     src="../../src/assets/img/FirstSeason/Footer/title_share.png"
                     alt="Footer botton"
                     style={{
                        width: '100%',
                        maxWidth: '100%',
                        height: 'auto',
                        display: 'block',
                     }}
                  />
               </p>
               {/* SHARE BUTTONS  */}
               <Box
                  comonent="ul"
                  sx={{ textAlign: 'center', listStyle: 'none', margin: '0' }}
               >
                  <li
                     style={{
                        display: 'inline-block',
                        width: '100px',
                        verticalAlign: 'top',
                        transition: 'all .5s ease',
                     }}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                  >
                     <a
                        href={
                           'https://twitter.com/intent/tweet?text=In%20romance%2C%20the%20first%20to%20confess%20their%20love%20%2F%20to%20fall%20in%20love%20is%20the%20loser.%20"Kaguya-sama%3A%20Love%20Is%20War"%20streaming%20begins%20January%2012%2C%202019!%20%7C%20OFFICIAL%20USA%20WEBSITE&url=https%3A%2F%2Fkaguyasama-anime.com%2F'
                        }
                        target={'_blank'}
                     >
                        <img
                           src="../../src/assets/img/FirstSeason/Footer/btn_share-twitter.png"
                           alt="Footer botton"
                           style={{
                              width: '100%',
                              maxWidth: '100%',
                              height: 'auto',
                              display: 'block',
                           }}
                        />
                     </a>
                  </li>
                  <li
                     style={{
                        display: 'inline-block',
                        width: '100px',
                        verticalAlign: 'top',
                        transition: 'all .5s ease',
                     }}
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                  >
                     <a
                        href={
                           'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkaguyasama-anime.com%2F'
                        }
                        target={'_blank'}
                     >
                        <img
                           src="../../src/assets/img/FirstSeason/Footer/btn_share-facebook.png"
                           alt="Footer botton"
                           style={{
                              width: '100%',
                              maxWidth: '100%',
                              height: 'auto',
                              display: 'block',
                           }}
                        />
                     </a>
                  </li>
               </Box>
            </Box>
            <Box
               component="ul"
               sx={{
                  margin: '10px auto',
                  textAlign: 'center',
                  listStyle: 'none',
               }}
            >
               <li
                  style={{
                     display: 'inline-block',
                     position: 'relative',
                     margin: '0 12px',
                     verticalAlign: 'top',
                     fontFamily: 'Kreon, serif',
                     lineHeight: '1px',
                     fontSize: '12px',
                     letterSpacing: '2px',
                  }}
               >
                  <span
                     style={{
                        content: `""`,
                        position: 'absolute',
                        top: '0',
                        right: '-12px',
                        width: '1px',
                        height: '100%',
                        color: '#535353',
                        fontWeight: 'bold',
                        cursor: 'default',
                     }}
                  >
                     |
                  </span>
                  <a
                     href={'https://kaguya.love/'}
                     target={'_blank'}
                     style={{ color: '#fff', textDecoration: 'none' }}
                  >
                     {/* TODO: ADD HOVER TO A TAGS  */}
                     Official Japanese Website
                  </a>
               </li>

               <li
                  style={{
                     display: 'inline-block',
                     position: 'relative',
                     margin: '0 12px',
                     verticalAlign: 'top',
                     fontFamily: 'Kreon, serif',
                     lineHeight: '1px',
                     fontSize: '12px',
                     letterSpacing: '2px',
                  }}
               >
                  <a
                     href={'http://www.aniplexusa.com/'}
                     target={'_blank'}
                     style={{ color: '#fff', textDecoration: 'none' }}
                  >
                     Aniplex of America
                  </a>
               </li>
            </Box>
            <p
               style={{
                  color: '#fff',
                  fontFamily: 'Kreon, serif',
                  lineHeight: '25px',
                  fontSize: '12px',
                  letterSpacing: '2px',
                  textAlign: 'center',
               }}
            >
               ©Aka Akasaka/SHUEISHA, PROJECT KAGUYA
            </p>
         </Box>
      </Box>
   )
}
