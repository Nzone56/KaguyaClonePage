import { Box } from '@mui/material'

export const NavigationItem = ({ label, isActive, href }) => {
   return (
      <li sx={{ marginBottom: '7px' }}>
         <a
            href={href}
            style={{
               display: 'block',
               transition: 'color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
               transitionProperty: 'color',
               transitionDuration: '0.5s',
               transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.9',
               padding: '8px 7px',
               textDecoration: 'none',
               color: '#fff',
               fontFamily:
                  ' "Cormorant Garamond", "Noto Serif JP", "游明朝", "YuMincho", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ 明朝", "ＭＳ Ｐ明朝", serif',
               fontSize: '14px',
               letterSpacing: '0.04em',
               lineHeight: '1',
               textAlign: 'left',
            }}
         >
            <Box
               sx={{
                  display: 'inline-block',
                  position: 'relative',
                  padding: '0 3px',
                  transition:
                     'color 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
                  '::before': {
                     width: '100%',
                     transition:
                        'width 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) 0s',
                  },
                  '&:hover': {
                     color: '#ff0031',
                  },
               }}
            >
               {label}
            </Box>
         </a>
      </li>
   )
}
