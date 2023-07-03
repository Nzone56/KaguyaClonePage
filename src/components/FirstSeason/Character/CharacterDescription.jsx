import { Box } from '@mui/material'
import { firstSeasonCharacters } from '../../../data/firstSeasonCharacters'
import { keyframes } from '@mui/system'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const CharacterDescription = ({ activeButton }) => {
   return (
      <Box
         sx={{
            position: 'absolute',
            top: '54px',
            right: '0',
            width: '586px',
            animation: `${fadeIn} 2.3s forwards`,
         }}
      >
         <Box>
            <img
               src={`../../src/assets/img/FirstSeason/Character/${activeButton}/text_name01.png`}
               alt={`${activeButton} face`}
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
               fontFamily: `'Kreon', serif`,
               display: 'inline-block',
               width: '100%',
               padding: '26px 22px',
               background: '#000',
               color: '#fff',
               fontSize: '19px',
               lineHeight: '1.8',
               letterSpacing: '.3px',
               opacity: activeButton !== null ? 1 : 0,
            }}
         >
            {firstSeasonCharacters[activeButton]?.description.part1}
            <br />
            {firstSeasonCharacters[activeButton]?.description.part2}
         </Box>
      </Box>
   )
}
