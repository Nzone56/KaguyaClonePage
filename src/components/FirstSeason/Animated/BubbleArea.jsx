import { Box, Typography } from '@mui/material'
import { Bubble } from './Bubble'

export const BubbleArea = () => {
   return (
      <Box
         id="bubbleArea"
         sx={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
         }}
      >
         <Bubble position={'2'} speed={'25.2'} />
         <Bubble position={'6'} speed={'22'} />
         <Bubble position={'10'} speed={'25'} />
         <Bubble position={'14'} speed={'18.6'} />
         <Bubble position={'18'} speed={'25.6'} />
         <Bubble position={'24'} speed={'21.2'} />
         <Bubble position={'32'} speed={'22.8'} />
         <Bubble position={'38'} speed={'18.8'} />
         <Bubble position={'42'} speed={'20.4'} />
         <Bubble position={'52'} speed={'18.4'} />
         <Bubble position={'58'} speed={'22.8'} />
         <Bubble position={'64'} speed={'24'} />
         <Bubble position={'70'} speed={'23.8'} />
         <Bubble position={'80'} speed={'24'} />
         <Bubble position={'84'} speed={'19.4'} />
         <Bubble position={'88'} speed={'17.8'} />
         <Bubble position={'92'} speed={'21.6'} />
         <Bubble position={'96'} speed={'21.8'} />
      </Box>
   )
}
