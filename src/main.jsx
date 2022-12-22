import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AppThemeProvider from './themes/AppThemeProvider'
import {BrowserRouter} from 'react-router-dom'
import { GreenwoodAppContextProvider } from './context/GreenwoodAppContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <GreenwoodAppContextProvider>
    <AppThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>   
    </AppThemeProvider>
    </GreenwoodAppContextProvider>
     
  </React.StrictMode>,
)
