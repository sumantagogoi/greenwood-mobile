import React from 'react'
import { useState, useContext } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Box, Typography, Divider, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import AppContext from '../../context/GreenwoodAppContext';

const RightDrawer = ({navopen, setNavOpen}) => {

  const navigate = useNavigate();

    const changeNav = (nav, navlocation)=>{
      setLocation(nav)
      setNavOpen(false)
      navigate(`/${navlocation}`)
    }
  
    const {location, setLocation} = useContext(AppContext)
    const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
    PaperProps={{
        sx: {
          backgroundColor: "#173632",
          color: "white",
          borderRadius: "100px 0 0 100px",
        },
      }}
      anchor="right"
      open={navopen}
        onClose={() => setNavOpen(false)}
        onOpen={() => setNavOpen(true)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >

        <Box sx={{width:250}}>
            <Box textAlign="center" sx={{ mt: 3, mb:2 }}>
            <img onClick={()=>navigate('/')} className='logo' src='https://thegreenwoodhotels.com/wp-content/uploads/2022/04/logo2x.png'/>
            </Box>
            <Divider sx={{ border: 1 }} />

            <Box sx={{mt:2}}>
                <List>
                    <ListItem disablePadding >
                        <ListItemButton onClick={()=>changeNav('The Greenwood Resort Guwahati', 'gwr')} >
                            <ListItemText primary='The Greenwood Resort Guwahati'/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding >
                    <ListItemButton onClick={()=>changeNav('The Greenwood Tezpur', 'gwt')}>
                            <ListItemText primary='The Greenwood Tezpur'/>
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding  >
                    <ListItemButton onClick={()=>changeNav('The Greenwood Guwahati', 'gwg')}>
                            <ListItemText primary='The Greenwood Guwahati'/>
                        </ListItemButton>
                    </ListItem>
                </List>

            </Box>
        </Box>

    </SwipeableDrawer>
  )
}

export default RightDrawer