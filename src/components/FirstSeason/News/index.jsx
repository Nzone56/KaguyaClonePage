import { Box } from '@mui/material'
import { useState } from 'react'
import { NewsList } from './NewsList'
import { news } from '../../../data/news'
import { NewsTab } from './NewsTab'
export const News = () => {
   const [activeTab, setActiveTab] = useState('1')
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
         <Box component="article" sx={{ display: 'block' }}>
            <Box>
               <NewsList news={news} page={activeTab} />
               <NewsTab
                  news={news}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
               />
            </Box>
         </Box>
      </Box>
   )
}
