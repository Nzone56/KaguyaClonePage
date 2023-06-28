import { Box } from '@mui/material'
import { CharacterButton } from './CharacterButton'

export const CharacterSelector = ({ activeButton, setActiveButton }) => {
   return (
      <Box
         sx={{
            position: 'absolute',
            top: '50%',
            left: '30px',
            zIndex: '1',
            transform: 'translate(0%, -50%)',
            width: '100px',
         }}
      >
         <Box sx={{ height: '100%' }}>
            <Box component="ul" sx={{ listStyle: 'none' }}>
               <CharacterButton
                  name={'Kaguya'}
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
               />
               <CharacterButton
                  name={'Shirogane'}
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
               />
               <CharacterButton
                  name={'Fujiwara'}
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
               />
               <CharacterButton
                  name={'Ishigami'}
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
               />
               <CharacterButton
                  name={'Hayasaka'}
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
               />
               <CharacterButton
                  name={'Kashiwagi'}
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
               />
               <CharacterButton
                  name={'Boyfriend'}
                  activeButton={activeButton}
                  setActiveButton={setActiveButton}
               />
            </Box>
         </Box>
      </Box>
   )
}
