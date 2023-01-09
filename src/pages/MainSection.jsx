import { Box, Container } from '@mui/material'
import React from 'react'
import Nav2 from '../components/Nav2/Nav2'
import GWGIndex from './GWG/GWGINDEX';
import GWRIndex from './GWR/GWRIndex';
import GWTIndex from './GWT/GwtIndex';
import GW from './home/GW';
import GWContact from './home/contact';
import GWFamily from './home/gwf';
import GWGStay from './GWG/gwg-stay';
import GWRStay from './GWR/gwr-stay';
import GWTStay from './GWT/gwt-stay';
import Kayana from './home/kayana';
import Rooms from './Rooms';
import FNB from './FNB';
import EventBookings from './EventBookings';
import Events2 from './Events2';
import FNB2 from './FNB2';
import Catalog from './Catalog';


const MainSection = ({ page }) => {

  const PathToComponent = {
    "": GW,    
    "stay": GW, 
    "fnb": FNB, 
    "event-bookings": EventBookings, 
    "contact": GWContact, 
    "gw-family": GWFamily, 
    "spa-wellness": Kayana,
    "gwr": GWRIndex, 
    "gwr-stay": Catalog, 
    "gwr-stay-standard-room": Rooms, 
    "gwr-stay-premier-room": Rooms,  
    "gwr-stay-luxury-room": Rooms,  
    "gwr-stay-greenwood-suite": Rooms,  
    "gwr-fnb": FNB, 
    "gwr-fnb-mynah": FNB2, 
    "gwr-fnb-bagan": FNB2, 
    "gwr-fnb-aroma": FNB2, 
    "gwr-fnb-jolpan": FNB2, 
    "gwr-event-bookings": EventBookings, 
    "gwr-event-bookings-majuli-hall": Events2, 
    "gwr-event-bookings-majuli-lawn": Events2,
    "gwr-event-bookings-kamarup-hall": Events2, 
    "gwr-event-bookings-pobitora-lawn": Events2, 
    "gwr-event-bookings-nameri-hall": Events2, 
    "gwr-event-bookings-nameri-lawn": Events2, 
    "gwr-event-bookings-umananda-hall": Events2, 
    "gwr-spa-kayana": Kayana, 
    "gwr-spa-wellness": Kayana,       
    "gwg": GWGIndex, 
    "gwg-stay": GWGStay, 
    "gwg-stay-luxury-room": Rooms, 
    "gwg-stay-greenwood-suite": Rooms, 
    "gwg-fnb": FNB, 
    "gwg-fnb-jholoe": Events2, 
    "gwg-fnb-kiya": FNB2, 
    "gwg-fnb-bagan": FNB2, 
    "gwg-event-bookings": EventBookings, 
    "gwg-event-bookings-xorai": Events2, 
    "gwg-spa-kayana": Kayana, 
    "gwg-spa-wellness": Kayana, 
    "gwt": GWTIndex, 
    "gwt-stay": GWTStay, 
    "gwt-stay-premier-room": Rooms, 
    "gwt-stay-luxury-room": Rooms, 
    "gwt-stay-greenwood-suite": Rooms,  
    "gwt-fnb": FNB, 
    "gwt-fnb-mynah": FNB2, 
    "gwt-fnb-bagan": FNB2, 
    "gwt-fnb-aroma": FNB2, 
    "gwt-event-bookings": EventBookings, 
    "gwt-event-bookings-orang-hall": Events2, 
    "gwt-event-bookings-orang-lawn": Events2, 
    "gwt-spa-kayana": Kayana, 
    "gwt-spa-wellness": Kayana, 
      };

  const Compnt = PathToComponent[page];
  const Elmnt = React.createElement(Compnt, {page});

  return (
    <Box>      
      <Box className='bg1'>
        { Elmnt }
      </Box>      
      <Nav2 page={page}/>
    </Box>

  );


}

export default MainSection