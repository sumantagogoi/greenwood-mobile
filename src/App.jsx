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

      <Route path='/stay' element ={<Home page='stay'/>} />
      <Route path='/fnb' element ={<Home page='fnb'/>} />
      <Route path='/event-bookings' element ={<Home page='event-bookings'/>} />
      <Route path='/contact' element ={<Home page='contact'/>} />
      <Route path='/gw-family' element ={<Home page='gw-family'/>} />
      <Route path="/spa" element ={<Home page='spa'/>} />

      <Route path='/gwr' element ={<Home page='gwr-main'/>} />

      <Route path='/gwr-stay' element ={<Home page='gwr-stay'/>} />

      <Route path='/gwr-stay-standard-room' element ={<Home page='gwr-stay-standard-room'/>} />
      <Route path='/gwr-stay-premier-room' element ={<Home page='gwr-stay-premier-room'/>} />
      <Route path='/gwr-stay-luxury-room' element ={<Home page='gwr-stay-luxury-room'/>} />
      <Route path='/gwr-stay-greenwood-suite' element ={<Home page='gwr-stay-greenwood-suite'/>} />

      <Route path='/gwr-fnb' element ={<Home page='gwr-fnb'/>} />

      <Route path='/gwr-fnb-mynah' element ={<Home page='gwr-fnb-mynah'/>} />
      <Route path='/gwr-fnb-bagan' element ={<Home page='gwr-fnb-bagan'/>} />
      <Route path='/gwr-fnb-aroma' element ={<Home page='gwr-fnb-aroma'/>} />
      <Route path='/gwr-fnb-jolpan' element ={<Home page='gwr-fnb-jolpan'/>} />

      <Route path='/gwr-event-bookings' element ={<Home page='gwr-event-bookings'/>} />

      <Route path='/gwr-event-bookings-majuli-hall' element ={<Home page='gwr-event-bookings-majuli-hall'/>} />
      <Route path='/gwr-event-bookings-majuli-lawn' element ={<Home page='gwr-event-bookings-majuli-lawn'/>} />
      <Route path='/gwr-event-bookings-kamarup-hall' element ={<Home page='gwr-event-bookings-kamarup-hall'/>} />
      <Route path='/gwr-event-bookings-pobitora-lawn' element ={<Home page='gwr-event-bookings-pobitora-lawn'/>} />
      <Route path='/gwr-event-bookings-nameri-hall' element ={<Home page='gwr-event-bookings-nameri-hall'/>} />
      <Route path='/gwr-event-bookings-nameri-lawn' element ={<Home page='gwr-event-bookings-nameri-lawn'/>} />
      <Route path='/gwr-event-bookings-umananda-hall' element ={<Home page='gwr-event-bookings-umananda-hall'/>} />

      <Route path='/gwr-spa-kayana' element ={<Home page='gwr-spa'/>} />
      
      <Route path='/gwg' element ={<Home page='gwg-main'/>} />      

      <Route path='/gwg-stay' element ={<Home page='gwg-stay'/>} />

      <Route path='/gwg-stay-luxury-room' element ={<Home page='gwg-stay-luxury-room'/>} />
      <Route path='/gwg-stay-greenwood-suite' element ={<Home page='gwg-stay-greenwood-suite'/>} />

      <Route path='/gwg-fnb' element ={<Home page='gwg-fnb'/>} />

      <Route path='/gwg-fnb-jholoe' element ={<Home page='gwg-fnb-jholoe'/>} />
      <Route path='/gwg-fnb-kiya' element ={<Home page='gwg-fnb-kiya'/>} />
      <Route path='/gwg-fnb-bagan' element ={<Home page='gwg-fnb-bagan'/>} />

      <Route path='/gwg-event-bookings' element ={<Home page='gwg-event-bookings'/>} />

      <Route path='/gwg-event-bookings-xorai' element ={<Home page='gwg-event-bookings-xorai'/>} />

      <Route path='/gwg-spa-kayana' element ={<Home page='gwg-spa'/>} />

      <Route path='/gwt' element ={<Home page='gwt-main'/>} />      

      <Route path='/gwt-stay' element ={<Home page='gwt-stay'/>} />

      <Route path='/gwt-stay-premier-room' element ={<Home page='gwt-stay-premier-room'/>} />
      <Route path='/gwt-stay-luxury-room' element ={<Home page='gwt-stay-luxury-room'/>} />
      <Route path='/gwt-stay-greenwood-suite' element ={<Home page='gwt-stay-greenwood-suite'/>} />

      <Route path='/gwt-fnb' element ={<Home page='gwt-fnb'/>} />

      <Route path='/gwt-fnb-mynah' element ={<Home page='gwt-fnb-mynah'/>} />
      <Route path='/gwt-fnb-bagan' element ={<Home page='gwt-fnb-bagan'/>} />
      <Route path='/gwt-fnb-aroma' element ={<Home page='gwt-fnb-aroma'/>} />

      <Route path='/gwt-event-bookings' element ={<Home page='gwt-event-bookings'/>} />

      <Route path='/gwt-event-bookings-orang-hall' element ={<Home page='gwt-event-bookings-orang-hall'/>} />
      <Route path='/gwt-event-bookings-orang-lawn' element ={<Home page='gwt-event-bookings-orang-lawn'/>} />

      <Route path='/gwt-spa-kayana' element ={<Home page='gwt-spa'/>} />




    </Routes>
    </>
  )
}

export default App