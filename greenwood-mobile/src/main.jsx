import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AppThemeProvider from './themes/AppThemeProvider'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppThemeProvider>
  </React.StrictMode>,
)
