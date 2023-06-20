import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { KaguyaApp } from './KaguyaApp'
import { AppRouter } from './router/AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <AppRouter>
         <KaguyaApp />
      </AppRouter>
   </React.StrictMode>
)
