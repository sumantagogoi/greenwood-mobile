import React from 'react'

import {createTheme, ThemeProvider} from '@mui/material'


const theme = createTheme({
  palette:{
    primary:{
      main:'#173632',
    }
  }
})

const AppThemeProvider = (prop) => {
  return (
    <ThemeProvider theme={theme}>
        {prop.children}
    </ThemeProvider>
  )
}

export default AppThemeProvider