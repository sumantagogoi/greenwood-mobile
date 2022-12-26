import { CssBaseline} from '@mui/material'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'


const App = () => {
  return (
    <>
    <CssBaseline/>
    <Routes>
      <Route path='/' element ={<Home page='gw-main'/>} />
      <Route path='/gwg' element ={<Home page='gwg-main'/>} />
      <Route path='/gwr' element ={<Home page='gwr-main'/>} />
      <Route path='/gwt' element ={<Home page='gwt-main'/>} />
      <Route path='/stay' element ={<Home page='stay'/>} />
      <Route path='/fnb' element ={<Home page='fnb'/>} />
      <Route path='/event-bookings' element ={<Home page='event-bookings'/>} />
      <Route path='/contact' element ={<Home page='contact'/>} />
      <Route path='/gw-family' element ={<Home page='gw-family'/>} />
      <Route path='/gwg-stay' element ={<Home page='gwg-stay'/>} />
      <Route path='/gwg-fnb' element ={<Home page='gwg-fnb'/>} />
      <Route path='/gwg-event-bookings' element ={<Home page='gwg-event-bookings'/>} />
      <Route path='/gwg-spa' element ={<Home page='gwg-spa'/>} />
      <Route path='/gwr-stay' element ={<Home page='gwr-stay'/>} />
      <Route path='/gwr-fnb' element ={<Home page='gwr-fnb'/>} />
      <Route path='/gwr-event-bookings' element ={<Home page='gwr-event-bookings'/>} />
      <Route path='/gwr-spa' element ={<Home page='gwr-spa'/>} />
      <Route path='/gwt-stay' element ={<Home page='gwt-stay'/>} />
      <Route path='/gwt-fnb' element ={<Home page='gwt-fnb'/>} />
      <Route path='/gwt-event-bookings' element ={<Home page='gwt-event-bookings'/>} />
      <Route path='/gwt-spa' element ={<Home page='gwt-spa'/>} />

    </Routes>
    </>
  )
}

export default App