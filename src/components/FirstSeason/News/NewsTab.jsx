import { Box } from '@mui/material'
import { NewsButton } from './NewsButton'

export const NewsTab = ({ activeTab, setActiveTab }) => {
   return (
      <Box>
         <Box component="ul" sx={{ textAlign: 'center', listStyle: 'none' }}>
            <NewsButton
               number={'1'}
               activeTab={activeTab}
               setActiveTab={setActiveTab}
            />
            <NewsButton
               number={'2'}
               activeTab={activeTab}
               setActiveTab={setActiveTab}
            />
            <NewsButton
               number={'3'}
               activeTab={activeTab}
               setActiveTab={setActiveTab}
            />
            <NewsButton
               number={'4'}
               activeTab={activeTab}
               setActiveTab={setActiveTab}
            />
            <NewsButton
               number={'5'}
               activeTab={activeTab}
               setActiveTab={setActiveTab}
            />
         </Box>
      </Box>
   )
}
