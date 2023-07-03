import { Box, Typography } from '@mui/material'

export const BluRay = () => {
   return (
      <Box
         sx={{
            position: 'relative',
            width: '1080px',
            minHeight: '60vh',
            margin: '0 auto',
            paddingTop: '55px',
         }}
      >
         <Box
            component="article"
            sx={{
               position: 'relative',
               padding: '3px',
               border: 'solid 1px #000',
               color: '#fff',
            }}
         >
            <Box
               sx={{
                  position: 'relative',
                  padding: '60px 48px 54px',
                  background: '#000',
                  textAlign: 'center',
               }}
            >
               <Typography
                  component="h2"
                  variant="h2"
                  sx={{
                     position: 'relative',
                     margin: '0 auto 46px',
                     padding: '0 10px 30px',
                     color: '#ff0081',
                     fontWeight: '600',
                     fontSize: '30px',
                     textAlign: 'center',
                     letterSpacing: '0.1em',
                     marginBottom: '18px',
                  }}
               >
                  Kaguya-sama: Love Is War Complete Blu-ray Set
               </Typography>
               <Box sx={{ position: 'relative', minHeight: '730px' }}>
                  <figure style={{ position: 'absolute' }}>
                     <img
                        src={`../../src/assets/img/FirstSeason/BluRay/img_pkg_01.jpg`}
                        alt="BluRay cover"
                        style={{
                           width: 'auto',
                           height: '100%',
                           display: 'block',
                           maxWidth: '100%',
                        }}
                     />
                  </figure>
                  <Box sx={{ marginLeft: '460px', textAlign: 'left' }}>
                     <dl>
                        <dt
                           style={{
                              marginTop: '38px',
                              fontWeight: 'bold',
                              fontSize: '17px',
                              color: '#ff0081',
                           }}
                        >
                           Price
                        </dt>
                        <dd
                           style={{
                              marginTop: '12px',
                              fontSize: '16px',
                              fontWeight: '300',
                              lineHeight: '1.5',
                           }}
                        >
                           $99.98 <s>(SRP $124.98)</s>
                        </dd>
                        <dt
                           style={{
                              marginTop: '38px',
                              fontWeight: 'bold',
                              fontSize: '17px',
                              color: '#ff0081',
                           }}
                        >
                           Disc Spec
                        </dt>
                        <dd
                           style={{
                              marginTop: '12px',
                              fontSize: '16px',
                              fontWeight: '300',
                              lineHeight: '1.5',
                           }}
                        >
                           <ul style={{ listStyle: 'none' }}>
                              <li>Spoken Languages: Japanese</li>
                              <li>Subtitles: English</li>
                              <li>
                                 Aspect Ratio: 16:9 HD Widescreen 1920x1080p
                              </li>
                              <li>Episodes: #1-12</li>
                              <li>Number of Discs: 3 Blu-ray Discs</li>
                              <li>Total Run Time: Approx. 300 minutes</li>
                              <li>Rating: 13 UP</li>
                           </ul>
                        </dd>
                        <dt
                           style={{
                              marginTop: '38px',
                              fontWeight: 'bold',
                              fontSize: '17px',
                              color: '#ff0081',
                           }}
                        >
                           Bonus Content
                        </dt>
                        <dd
                           style={{
                              marginTop: '12px',
                              fontSize: '16px',
                              fontWeight: '300',
                              lineHeight: '1.5',
                           }}
                        >
                           <ul style={{ listStyle: 'none' }}>
                              <li>◆ Textless Opening</li>
                              <li>
                                 ◆ Textless Endings (Including "Chika tto Chika
                                 Chika" from Ep. 3)
                              </li>
                           </ul>
                        </dd>
                        <p
                           style={{
                              paddingTop: '18px',
                              paddingLeft: '1rem',
                              textIndent: '-1rem',
                              fontSize: '12px',
                              fontWeight: '300',
                           }}
                        >
                           * Bonus content subject to change.
                        </p>
                        <p
                           style={{
                              paddingTop: '18px',
                              paddingLeft: '1rem',
                              textIndent: '-1rem',
                              fontSize: '12px',
                              fontWeight: '300',
                           }}
                        >
                           * Bonus content include English subtitles.
                        </p>
                        <dt
                           style={{
                              marginTop: '38px',
                              fontWeight: 'bold',
                              fontSize: '17px',
                              color: '#ff0081',
                           }}
                        >
                           Bonus Materials & Package
                        </dt>
                        <dd
                           style={{
                              marginTop: '12px',
                              fontSize: '16px',
                              fontWeight: '300',
                              lineHeight: '1.5',
                           }}
                        >
                           <ul style={{ listStyle: 'none' }}>
                              <li>
                                 ◆ Package illustrations by Yuko Yahiro
                                 (Character Design/Chief Animation Director)
                              </li>
                              <li>
                                 ◆ Special booklet with character reference
                                 guides and scene design materials
                              </li>
                              <li>◆ Illustration card set</li>
                              <Box
                                 sx={{
                                    width: '49%',
                                    display: 'inline-block',
                                    marginTop: '7px',
                                    cursor: 'pointer',
                                    transition:
                                       'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
                                 }}
                              >
                                 <img
                                    src={`../../src/assets/img/FirstSeason/BluRay/img_pkg01_productshot.jpg`}
                                    alt="Preview product"
                                    style={{
                                       width: 'auto',
                                       height: '100%',
                                       display: 'block',
                                       maxWidth: '100%',
                                    }}
                                 />
                              </Box>
                           </ul>
                        </dd>
                     </dl>
                     <p
                        style={{
                           paddingTop: '18px',
                           paddingLeft: '1rem',
                           fontSize: '12px',
                           fontWeight: '300',
                        }}
                     >
                        * Bonus materials subject to change.
                     </p>
                  </Box>
                  <Box
                     sx={{
                        position: 'absolute',
                        top: '630px',
                        left: '0',
                        width: '420px',
                     }}
                  >
                     <a
                        style={{
                           cursor: 'pointer',
                           display: 'inline-block',
                           position: 'relative',
                           width: '100%',
                           padding: '3px',
                           border: 'solid 1px #e72e8c',
                           textDecoration: 'none',
                           transition:
                              'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
                        }}
                     >
                        <span
                           style={{
                              display: 'block',
                              height: '80px',
                              lineHeight: '80px',
                              fontSize: '20px',
                              color: '#fff',
                              background: '#e72e8c',
                              transition:
                                 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
                           }}
                        >
                           {' '}
                           SHOP{' '}
                        </span>
                     </a>
                  </Box>
               </Box>
            </Box>
         </Box>
      </Box>
   )
}
