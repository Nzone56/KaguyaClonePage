import { Box, Typography } from '@mui/material'
import { NewsPreviewItem } from './NewsPreviewItem'

export const NewsPreview = () => {
   return (
      <Box
         component="article"
         sx={{
            display: 'inline-block',
            position: 'relative',
            width: '825px',
            padding: '0.4rem',
            border: 'solid 1px #000',
            verticalAlign: 'top',
            marginLeft: '3rem',
         }}
      >
         <Box
            sx={{
               position: 'relative',
               minHeight: '410px',
               padding: '4rem 0 2.5rem',
               background: '#000',
               overflow: 'hidden',
            }}
         >
            <Box sx={{ marginBottom: '5rem' }}>
               <Typography
                  sx={{
                     verticalAlign: 'baseline',
                     position: 'relative',
                     width: '15rem',
                  }}
               >
                  <img
                     src="../../src/assets/img/FirstSeason/title_news.png"
                     alt="News Title"
                     style={{
                        display: 'block',
                        width: '100%',
                        maxWidth: '100%',
                        height: 'auto',
                     }}
                  />
               </Typography>

               <Box
                  sx={{
                     width: '6.5rem',
                     position: 'absolute',
                     top: '3.8rem',
                     right: '2.3rem',
                     '& img': {
                        width: '100%',
                        transition: 'opacity 0.3s ease',
                        '&:hover': {
                           opacity: 0.6,
                        },
                     },
                  }}
               >
                  <a href="/news/">
                     <img
                        src="../../src/assets/img/FirstSeason/btn_news-more.png"
                        alt="More news"
                     />
                  </a>
               </Box>
            </Box>
            <Box
               sx={{
                  margin: '0 auto',
                  marginTop: '-4.3rem',
                  padding: '0 3rem',
                  textAlign: 'left',
               }}
            >
               <Box
                  component="ul"
                  sx={{
                     listStyle: 'none',
                     padding: '0',
                     margin: '0',
                     border: '0',
                  }}
               >
                  <NewsPreviewItem
                     date={'01.27.2023'}
                     text={`Kaguya-sama: Love Is War -The First Kiss That Never Ends- In
                  Theaters This Valentine’s Day!`}
                     article={
                        'https://kaguyasama-anime.com/news/?article_id=62426'
                     }
                     lastOne={false}
                  />
                  <NewsPreviewItem
                     date={'11.20.2022'}
                     text={`Kaguya-sama: Love Is War Event at Anime NYC 2022!`}
                     article={
                        'https://kaguyasama-anime.com/news/?article_id=61995'
                     }
                     lastOne={false}
                  />
                  <NewsPreviewItem
                     date={'11.19.2022'}
                     text={`Kaguya-sama: Love Is War -The First Kiss That Never Ends- Coming February 2023!`}
                     article={
                        'https://kaguyasama-anime.com/news/?article_id=61994'
                     }
                     lastOne={false}
                  />
                  <NewsPreviewItem
                     date={'10.30.2022'}
                     text={`World Premiere Preview Screening at Anime NYC 2022!`}
                     article={
                        'https://kaguyasama-anime.com/news/?article_id=61860'
                     }
                     lastOne={true}
                  />
               </Box>
            </Box>
         </Box>
      </Box>
   )
}
