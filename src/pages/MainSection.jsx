import { Box, Container } from '@mui/material'
import React from 'react'
import Nav2 from '../components/Nav2/Nav2'
import GWGIndex from './GWG/GWGINDEX';
import GWRIndex from './GWR/GWRIndex';
import GWTIndex from './GWT/GwtIndex';
import GW from './home/GW';
import GWContact from './home/contact';
import GWFamily from './home/gwf';
import Kayana from './home/kayana';
import FNB from './FNB';
import FNB2 from './FNB2';
import FnB from '../components/FnB/FnB';
import Catalog from './Catalog';
import CatalogGW from './home/Catalog2';
import DiscoverAssam from './home/DiscoverAssam';
import GWLive from './home/GWLive';
import Rooms from '../components/rooms/Room';
import Events from '../components/Events/Events';


const MainSection = ({ page }) => {

  const PathToComponent = {
    "": GW,    
    "stay": CatalogGW, 
    "fnb": CatalogGW, 
    "event-bookings": CatalogGW,  
    "contact": GWContact, 
    "gw-family": GWFamily, 
    "spa-wellness": CatalogGW, 
    "gwr": GWRIndex, 
    "gwr-stay": Catalog, 
    "gwr-stay-standard-room": Rooms, 
    "gwr-stay-premier-room": Rooms,  
    "gwr-stay-luxury-room": Rooms,  
    "gwr-stay-greenwood-suite": Rooms,  
    "gwr-fnb": Catalog, 
    "gwr-fnb-mynah": FNB2, 
    "gwr-fnb-bagan": FNB, 
    "gwr-fnb-aroma": FNB2, 
    "gwr-fnb-jolpan": FNB2, 
    "gwr-event-bookings": Catalog, 
    "gwr-event-bookings-majuli-hall": Events, 
    "gwr-event-bookings-majuli-lawn": Events,
    "gwr-event-bookings-kamarup-hall": Events, 
    "gwr-event-bookings-pobitora-lawn": Events, 
    "gwr-event-bookings-nameri-hall": Events, 
    "gwr-event-bookings-nameri-lawn": Events, 
    "gwr-event-bookings-umananda-hall": Events, 
    "gwr-spa-kayana": Kayana, 
    "gwr-spa-wellness": Kayana,       
    "gwg": GWGIndex, 
    "gwg-stay": Catalog, 
    "gwg-stay-luxury-room": Rooms, 
    "gwg-stay-greenwood-suite": Rooms, 
    "gwg-fnb": Catalog, 
    "gwg-fnb-jholoe": FNB2, 
    "gwg-fnb-kiya": FNB2, 
    "gwg-fnb-bagan": FNB2, 
    "gwg-event-bookings": Events, 
    "gwg-event-bookings-xorai": Events, 
    "gwg-spa-kayana": Kayana, 
    "gwg-spa-wellness": Kayana, 
    "gwt": GWTIndex, 
    "gwt-stay": Catalog, 
    "gwt-stay-premier-room": Rooms, 
    "gwt-stay-luxury-room": Rooms, 
    "gwt-stay-greenwood-suite": Rooms,  
    "gwt-fnb": Catalog, 
    "gwt-fnb-mynah": FNB2, 
    "gwt-fnb-bagan": FNB2, 
    "gwt-fnb-aroma": FNB2, 
    "gwt-event-bookings": Catalog, 
    "gwt-event-bookings-orang-hall": Events, 
    "gwt-event-bookings-orang-lawn": Events, 
    "gwt-event-bookings-gorh-hall" : Events,
    "gwt-event-bookings-gw-boardrooms" : Events,
    "gwt-spa-kayana": Kayana, 
    "gwt-spa-wellness": Kayana,
    "discover-assam": DiscoverAssam,
    "gw-live": GWLive,
   

      };

  const Compnt = PathToComponent[page];
  const Elmnt = React.createElement(Compnt, {page});

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: "80vh"}} className=" bg1 scrollable-y">     
      <Box sx={{ display: 'flex',  flexDirection: 'row', mt: 6 }}>
        { Elmnt }
      </Box>      
      <Nav2 page={page}/>
    </Box>

  );


}

export default MainSection