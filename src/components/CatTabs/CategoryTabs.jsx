import { Box, Paper, Tab, Tabs } from '@mui/material'
import React from 'react'
import { FcHome } from 'react-icons/fc'
import { MdFastfood } from 'react-icons/md'
import { GiPartyPopper, GiSaloon } from 'react-icons/gi'
import { BiBed } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom';
import './CategoryTabs.css'
import theme from '../fonts';


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

    "gwr-event-bookings": ["Nameri Banquet", "Nameri Lawn", "Majuli Banquet", "Majuli Lawn", "Umananda Banquet", "Kamarup Banquet", "Pobitora Lawn"],
    "gwr-event-bookings-l": ["nameri-hall", "nameri-lawn", "majuli-hall", "majuli-lawn", "umananda-hall", "kamarup-hall", "pobitora-lawn"],

    "gwg-event-bookings": ["Xorai"],
    "gwg-event-bookings-l": ["xorai"],

    "gwt-event-bookings": ["Orang Banquet", "Orang Lawn", "Gorh Banquet", "Greenwood Boardrooms"],
    "gwt-event-bookings-l": ["orang-hall", "orang-lawn", "gorh-hall", "gw-boardrooms"],

    "gwr-spa": ["Kayana"],
    "gwr-spa-l": ["kayana"],

    "gwg-spa": ["Kayana"],
    "gwg-spa-l": ["kayana"],

    "gwt-spa": ["Kayana"],
    "gwt-spa-l": ["kayana"],

    "gwm": ["Home","The Greenwood Resort", "The Greenwood, Tezpur", "The Greenwood, Guwahati", "The Greenwood Family", "Contact"],
    "gwm-l": ["","gwr", "gwt", "gwg", "gw-family", "contact"]

  }

  const location = useLocation();
  const pathname = location.pathname;

  const keys = pathname.split(/[/-]/);
  //console.log(keys+"asdasd")
  let ln = keys[2] == "event" ? keys[1] + "-" + keys[2] + "-" + keys[3] : keys[1] + "-" + keys[2];
  let sz =  keys[2] == "event" ? 4 : 3;
  const exists = Object.keys(gwItems).includes(ln);

  return (exists && (keys.length > sz )) ? (

    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#2c4f35', position: 'sticky', zIndex: 1, mt:0.1}}>

      <Tabs variant='scrollable' allowScrollButtonsMobile sx={{
             color: 'white',         
      }} className="minhite"  value={pathname} theme={theme}>
        {
          gwItems[ln].map((item, index) => {
            const link = gwItems[`${ln}-l`][index];
            return  (
              <Tab label={item} className={index == gwItems[ln].length - 1 ? "navTab2" : "navTab"} value={`/${ln}-${link}`} component={Link} to={`/${ln}-${link}`}  ></Tab>
            ) 
          })
        }
      </Tabs>
    </Box>

  ):(<></>);
}

export default CategoryTabs