import { CssBaseline} from '@mui/material'
import Home from './pages/home/Home'
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Room from './components/rooms/Room';
import Events from './components/Events/Events';



const App = () => {

  const pages = [
  'stay' 
  ,'fnb' 
  ,'event-bookings' 
  ,'contact' 
  ,'gw-family' 
  ,'spa-wellness'
  ,'gwr' 
  ,'gwr-stay' 
  ,'gwr-stay-standard-room' 
  ,'gwr-stay-premier-room' 
  ,'gwr-stay-luxury-room' 
  ,'gwr-stay-greenwood-suite' 
  ,'gwr-fnb' 
  ,'gwr-fnb-mynah' 
  ,'gwr-fnb-bagan' 
  ,'gwr-fnb-aroma' 
  ,'gwr-fnb-jolpan' 
  ,'gwr-event-bookings' 
  ,'gwr-event-bookings-majuli-hall' 
  ,'gwr-event-bookings-majuli-lawn' 
  ,'gwr-event-bookings-kamarup-hall' 
  ,'gwr-event-bookings-pobitora-lawn' 
  ,'gwr-event-bookings-nameri-hall' 
  ,'gwr-event-bookings-nameri-lawn' 
  ,'gwr-event-bookings-umananda-hall'
  ,'gwr-event-bookings-umananda-lawn'  
  ,'gwr-spa-kayana' 
  ,'gwr-spa-wellness'       
  ,'gwg' 
  ,'gwg-stay' 
  ,'gwg-stay-luxury-room' 
  ,'gwg-stay-greenwood-suite' 
  ,'gwg-fnb' 
  ,'gwg-fnb-jholoe' 
  ,'gwg-fnb-kiya' 
  ,'gwg-fnb-bagan' 
  ,'gwg-event-bookings' 
  ,'gwg-event-bookings-xorai' 
  ,'gwg-spa-kayana' 
  ,'gwg-spa-wellness' 
  ,'gwt' 
  ,'gwt-stay' 
  ,'gwt-stay-premier-room' 
  ,'gwt-stay-luxury-room' 
  ,'gwt-stay-greenwood-suite' 
  ,'gwt-fnb' 
  ,'gwt-fnb-mynah' 
  ,'gwt-fnb-bagan' 
  ,'gwt-fnb-aroma' 
  ,'gwt-event-bookings' 
  ,'gwt-event-bookings-orang-hall' 
  ,'gwt-event-bookings-orang-lawn'
  ,'gwt-event-bookings-gorh-hall' 
  ,'gwt-event-bookings-gw-boardrooms'   
  ,'gwt-spa-kayana' 
  ,'gwt-spa-wellness'  
  ,'discover-assam'
  ,'gw-live'
]


  return (
    <>
    <CssBaseline/>

      <Routes>
        <Route path='/' element ={<Home page=''/>} />
          {
            pages.map(item => 
              (<Route key={item} path={`/${item}`} element={ <Home page={`${item}`} />} />))            
          } 
        {/* <Route path='/event' element={<Events/>}/>                */}
      </Routes>
    </>
  )
}

export default App