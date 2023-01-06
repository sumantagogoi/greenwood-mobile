import { Box, Container } from '@mui/material'
import React from 'react'
import Nav2 from '../components/Nav2/Nav2'
import GWGIndex from './GWG/GWGINDEX';
import GWRIndex from './GWR/GWRIndex';
import GWTIndex from './GWT/GwtIndex';
import GW from './GW.jsx';


const MainSection = ({ page }) => {

  const PathToComponent = {
    "": GW,    
    "stay": GW, 
    "fnb": GW, 
    "event-bookings": GW, 
    "contact": GW, 
    "gw-family": GW, 
    "spa-wellness": GW,
    "gwr": GWRIndex, 
    "gwr-stay": GW, 
    "gwr-stay-standard-room": GW, 
    "gwr-stay-premier-room": GW, 
    "gwr-stay-luxury-room": GW, 
    "gwr-stay-greenwood-suite": GW, 
    "gwr-fnb": GW, 
    "gwr-fnb-mynah": GW, 
    "gwr-fnb-bagan": GW, 
    "gwr-fnb-aroma": GW, 
    "gwr-fnb-jolpan": GW, 
    "gwr-event-bookings": GW, 
    "gwr-event-bookings-majuli-hall": GW, 
    "gwr-event-bookings-majuli-lawn": GW, 
    "gwr-event-bookings-kamarup-hall": GW, 
    "gwr-event-bookings-pobitora-lawn": GW, 
    "gwr-event-bookings-nameri-hall": GW, 
    "gwr-event-bookings-nameri-lawn": GW, 
    "gwr-event-bookings-umananda-hall": GW, 
    "gwr-spa-kayana": GW, 
    "gwr-spa-wellness": GW,       
    "gwg": GWGIndex, 
    "gwg-stay": GW, 
    "gwg-stay-luxury-room": GW, 
    "gwg-stay-greenwood-suite": GW, 
    "gwg-fnb": GW, 
    "gwg-fnb-jholoe": GW, 
    "gwg-fnb-kiya": GW, 
    "gwg-fnb-bagan": GW, 
    "gwg-event-bookings": GW, 
    "gwg-event-bookings-xorai": GW, 
    "gwg-spa-kayana": GW, 
    "gwg-spa-wellness": GW, 
    "gwt": GWTIndex, 
    "gwt-stay": GW, 
    "gwt-stay-premier-room": GW, 
    "gwt-stay-luxury-room": GW, 
    "gwt-stay-greenwood-suite": GW, 
    "gwt-fnb": GW, 
    "gwt-fnb-mynah": GW, 
    "gwt-fnb-bagan": GW, 
    "gwt-fnb-aroma": GW, 
    "gwt-event-bookings": GW, 
    "gwt-event-bookings-orang-hall": GW, 
    "gwt-event-bookings-orang-lawn": GW, 
    "gwt-spa-kayana": GW, 
    "gwt-spa-wellness": GW, 
      };

  const Compnt = PathToComponent[page];
  const Elmnt = React.createElement(Compnt, {});

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