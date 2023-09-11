import { Box, Paper, Tab, Tabs } from '@mui/material'
import React from 'react'
import { FcHome } from 'react-icons/fc'
import { MdFastfood } from 'react-icons/md'
import { GiPartyPopper, GiSaloon } from 'react-icons/gi'
import { BiBed } from 'react-icons/bi'
import { Link, useLocation } from 'react-router-dom';
import './CategoryTabs.css'
import theme from '../fonts';


const CategoryTabs = ({page}) => {

 
  const gwItems = {
    
    "gwm": ["Home","The Greenwood Resort", "The Greenwood, Tezpur", "The Greenwood, Guwahati", "The Greenwood Family", "Contact"],
    "gwm-l": ["","gwr", "gwt", "gwg", "gw-family", "contact"]

  }


  const keys = page.split(/[/-]/);
  //console.log(keys+"asdasd")

  const ln = "gwm";
  return (

    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#173632', position: 'sticky', zIndex: 1, borderTop: "0.1px solid #999"}}>

      <Tabs variant='scrollable' allowScrollButtonsMobile sx={{
        color: 'white' ,  fontSize: 300    
      }} className="minhite"
        value={keys[0]} theme={theme}>
        {
          gwItems[ln].map((item, index) => {
            const link = gwItems[`${ln}-l`][index];
            return (
              <Tab label={item} className={index == gwItems[ln].length - 1 ? "navTab2" : "navTab"} value={`${link}`} component={Link} to={`/${link}`} ></Tab>
            ) 
            
          })
        }
      </Tabs>
    </Box>

  );
}

export default CategoryTabs


