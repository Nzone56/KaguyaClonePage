import { Box, Typography } from '@mui/material'
import { keyframes } from '@emotion/react'

const summary = {
   first: {
      title: 'Kaguya-sama: Love is War, Season 1 (2019)',
      description: `At the renowned Shuchiin Academy, Miyuki Shirogane and Kaguya Shinomiya are the student body's top representatives. Ranked the top student in the nation and respected by peers and mentors alike, Miyuki serves as the student council president. Alongside him, the vice president Kaguya—eldest daughter of the wealthy Shinomiya family—excels in every field imaginable. They are the envy of the entire student body, regarded as the perfect couple.`,
   },
   second: {
      title: 'Kaguya-sama: Love is War?, Season 2 (2020)',
      description: `After a slow but eventful summer vacation, Shuchiin Academy's second term is now starting in full force. As August transitions into September, Miyuki Shirogane's birthday looms ever closer, leaving Kaguya Shinomiya in a serious predicament as to how to celebrate it. Furthermore, the tenure of the school's 67th student council is coming to an end. Due to the council members being in different classes, the only time Kaguya and Miyuki have to be together will soon disappear, putting all of their cunning plans at risk.`,
   },
   third: {
      title: 'Kaguya-sama: Love Is War -Ultra Romantic-, Season 3 (2022)',
      description: `The elite members of Shuchiin Academy's student council continue their competitive day-to-day antics. Council president Miyuki Shirogane clashes daily against vice-president Kaguya Shinomiya, each fighting tooth and nail to trick the other into confessing their romantic love. Kaguya struggles within the strict confines of her wealthy, uptight family, rebelling against her cold default demeanor as she warms to Shirogane and the rest of her friends.`,
   },
   movie: {
      title: 'Kaguya-sama: Love is War - The First Kiss That Never Ends, Movie (2022)',
      description:
         'After their first kiss, Kaguya Shinomiya and Miyuki Shirogane are left unsure where their relationship stands. The troubling uncertainty of whether they could be considered an official couple unleashes newfound problems as both Kaguya and Shirogane struggle to sort out their feelings.',
   },
}
export const SeasonPreview = ({ season }) => {
   const fade = keyframes`
   0%  {background-image: url(../../src/assets/img/Landing/${season}Season-01.jpg);}
   25%  {background-image: url(../../src/assets/img/Landing/${season}Season-02.jpg);}
   50%  {background-image: url(../../src/assets/img/Landing/${season}Season-03.jpg);}
   75%  {background-image: url(../../src/assets/img/Landing/${season}Season-04.jpg);}
   100%  {background-image: url(../../src/assets/img/Landing/${season}Season-01.jpg);}
}`

   const seasonLinks = {
      first: '/1st/',
      second: '/2nd/',
      third: '/3rd/',
      movie: '/movie/',
   }
   return (
      <Box
         sx={{
            width: '70%',
         }}
      >
         <Box
            sx={{
               width: '100%',
               height: '100%',
               backgroundSize: '100% 100%',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
               opacity: '0.8',
               animation: `${fade} 20s infinite;`,
               position: 'relative',
               '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '30%',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
               },
            }}
         >
            <Box
               sx={{
                  position: 'absolute',
                  bottom: '0',
                  margin: '1px solid #fff',
                  width: '100%',
                  height: '30%',
                  zIndex: '1',
               }}
            >
               <Typography
                  component="h2"
                  variant="h2"
                  sx={{
                     color: '#fff',
                     fontFamily: 'Big John Bold',
                     margin: '15px',
                  }}
               >
                  {summary[season].title}
               </Typography>
               <p
                  style={{
                     color: '#fff',
                     fontFamily: 'Big John Regular',
                     fontSize: '19px',
                     margin: '15px',
                  }}
               >
                  {summary[season].description}
               </p>

               <Typography
                  component="a"
                  href={seasonLinks[season]}
                  sx={{
                     color: '#ed1f24',
                     fontFamily: 'Big John Regular',
                     fontSize: '22px',
                     textDecoration: 'none',
                     backgroundColor: 'white',
                     padding: '5px 10px',
                     borderRadius: '5px',
                     textAlign: 'right',
                     margin: '0 15px ',
                     '&:hover': {
                        color: 'white',
                        backgroundColor: '#ed1f24',
                     },
                  }}
               >
                  GO TO PAGE
               </Typography>
            </Box>
         </Box>
      </Box>
   )
}
