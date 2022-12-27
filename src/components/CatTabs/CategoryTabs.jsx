import { Box, Paper, Tab, Tabs } from '@mui/material'
import React from 'react'
import { FcHome } from 'react-icons/fc'
import { MdFastfood } from 'react-icons/md'
import { GiPartyPopper, GiSaloon } from 'react-icons/gi'
import { BiBed } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './CategoryTabs.css'


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

    "gwr-event-bookings": ["Nameri Hall", "Nameri Lawn", "Majuli Hall", "Majuli Lawn","Umananda Hall","Kamarup Hall", "Pobitora Lawn"],
    "gwr-event-bookings-l": ["nameri-hall", "nameri-lawn", "majuli-hall", "majuli-lawn", "umananda-hall", "kamarup-hall", "pobitora-lawn" ],

    "gwg-event-bookings": ["Xorai"],
    "gwg-event-bookings-l": ["xorai"],

    "gwt-event-bookings": ["Orang Hall", "Orang Lawn"],
    "gwt-event-bookings-l": ["orang-hall", "orang-lawn"],

    "gwr-spa": ["Kayana"],
    "gwr-spa-l": ["kayana"],

    "gwg-spa": ["Kayana"],
    "gwg-spa-l": ["kayana"],

    "gwt-spa": ["Kayana"],
    "gwt-spa-l": ["kayana"],

    "gwm": ["The Greenwood Resort", "The Greenwood, Tezpur", "The Greenwood, Guwahati", "The Greenwood Family", "Contact"],
    "gwm-l": ["gwr", "gwt", "gwg", "gw-family", "contact"]

  }

  const location = useLocation();
  const pathname = location.pathname;

  const keys = page.split("-");
  let ln = keys[1] == "event" ? keys[0] + "-" + keys[1] + "-" + keys[2] : keys[0] + "-" + keys[1];
  const exists = Object.keys(gwItems).includes(ln);

  ln = exists ? ln : "gwm";
  return (

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#173632', position: 'sticky' }}>

        <Tabs variant='scrollable' allowScrollButtonsMobile value={pathname} className="navTab"  >
          {            
            gwItems[ln].map((item, index) => {
              const link = gwItems[`${ln}-l`][index];
              return  exists ?  (
                <Tab label={item} className="navTab"  value={`/${ln}-${link}`} component={Link} to={`/${ln}-${link}`} ></Tab>
              ) : (
                <Tab label={item}  className="navTab" value={`/${link}`}  component={Link} to={`/${link}`}  ></Tab>
              );
            })
          }
        </Tabs>
      </Box>
 
  );
}

export default CategoryTabs