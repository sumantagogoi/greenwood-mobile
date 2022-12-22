import { CssBaseline } from '@mui/material'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import GWGINDEX from './pages/GWG/GWGINDEX'
import Index from './pages/GWR/Index'
import Home from './pages/home/Home'
import GwtIndex from './pages/GWT/GwtIndex'


const App = () => {
  return (
    <>
    <CssBaseline/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/gwr' element={<Index/>}/>
      <Route path='/gwg' element={<GWGINDEX/>}/>
      <Route path='/gwt' element={<GwtIndex/>} />
    </Routes>
    </>
  )
}

export default App