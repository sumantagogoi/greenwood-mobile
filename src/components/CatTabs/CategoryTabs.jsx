import { Box, Paper, Tab, Tabs } from '@mui/material'
import React from 'react'
import { FcHome } from 'react-icons/fc'
import { MdFastfood } from 'react-icons/md'
import { GiPartyPopper, GiSaloon } from 'react-icons/gi'
import { BiBed } from 'react-icons/bi'
import { Link } from 'react-router-dom';





const CategoryTabs = ({ page }) => {

  const gwItems = {
    "gwr-stay": ["Standard Room", "Premier Room", "Luxury Room", "The Greenwood Suite"],
    "gwr-stay-l": ["standard-room", "premier-room", "luxury-room", "greenwood-suite"],
    "gwg-stay": ["Luxury Room", "The Greenwood Suite"],
    "gwg-stay-l": ["luxury-room", "greenwood-suite"],
    "gwt-stay": ["Premier Room", "Luxury Room", "The Greenwood Suite"],
    "gwt-stay-l": ["premier-room", "luxury-room", "greenwood-suite"],
    "gwr-fnb": ["Mynah Bar", "Bagan Cafe", "Aroma", "Jolpan"],
    "gwr-fnb-l": ["mynah", "bagan", "aroma", "jolpan"],
    "gwg-fnb": ["Jholoe", "Kiya", "Bagan"],
    "gwg-fnb-l": ["jholoe", "kiya", "bagan"],
    "gwt-fnb": ["Mynah Bar", "Bagan Cafe", "Aroma"],
    "gwt-fnb-l": ["mynah", "bagan", "aroma"],
    "gwr-event-bookings": ["Hall", "Lawn"],
    "gwr-event-bookings-l": ["hall", "lawn"],
    "gwg-event-bookings": ["Xorai"],
    "gwg-event-bookings-l": ["xorai"],
    "gwt-event-bookings": ["Hall", "Lawn"],
    "gwt-event-bookings-l": ["hall", "lawn"],
    "gwr-spa": ["Kayana"],
    "gwr-spa-l": ["spa"],
    "gwg-spa": ["Kayana"],
    "gwg-spa-l": ["spa"],
    "gwt-spa": ["Kayana"],
    "gwt-spa-l": ["spa"],
    "gwm": ["The Greenwood Resort", "The Greenwood, Tezpur", "The Greenwood, Guwahati", "The Greenwood Family", "Contact"],
    "gwm-l": ["gwr", "gwt", "gwg", "gw-family", "contact"]

  }

  const keys = page.split("-");
  let ln = keys[1] == "event" ? keys[0] + "-" + keys[1] + "-" + keys[2] : keys[0] + "-" + keys[1];
  const exists = Object.keys(gwItems).includes(ln);

  ln = exists ? ln : "gwm";
  return (

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#173632', position: 'sticky' }}>

        <Tabs variant='scrollable' allowScrollButtonsMobile >
          {            
            gwItems[ln].map((item, index) => {
              const link = gwItems[`${ln}-l`][index];
              return  exists ?  (
                <Link to={`/${ln}-${link}`} className="link-style1" style={{ borderRight: '1px solid white' }}><Tab label={item} ></Tab></Link>
              ) : (
                <Link to={`/${link}`} className="link-style1" style={{ borderRight: '1px solid white' }}><Tab label={item} ></Tab></Link>
              );
            })
          }
        </Tabs>
      </Box>
 
  );
}

export default CategoryTabs