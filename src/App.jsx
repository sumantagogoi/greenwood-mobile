import { CssBaseline } from '@mui/material'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'


const App = () => {
  return (
    <>
    <CssBaseline/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App