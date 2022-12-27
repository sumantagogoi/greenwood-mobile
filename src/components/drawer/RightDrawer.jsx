import React from 'react'
import { useState, useContext } from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Box, Typography, Divider, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

import AppContext from '../../context/GreenwoodAppContext';

const RightDrawer = ({ navopen, setNavOpen }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    setNavOpen(false) 
  }

  const { location, setLocation } = useContext(AppContext)
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      PaperProps={{
        sx: {
          backgroundColor: "#173632",
          color: "white",
          borderRadius: "30px 0 0 30px",
        },
      }}
      anchor="right"
      open={navopen}
      onClose={() => setNavOpen(false)}
      onOpen={() => setNavOpen(true)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >

      <Box sx={{ width: 350 }}>
        <Box textAlign="center" sx={{ mt: 3, mb: 2 }}>
          <img onClick={() => navigate('/')} className='logo' src='https://thegreenwoodhotels.com/wp-content/uploads/2022/04/logo2x.png' />
        </Box>
        <Divider sx={{ border: 1 }} />

        <Box sx={{ mt: 2 }}>
          <List>
            <ListItem disablePadding >
              {/* <ListItemButton onClick={()=>changeNav('The Greenwood Resort Guwahati', 'gwr')} > */}
              <Link to="/gwr" onClick={handleClick}>
                <ListItemButton>
                  <ListItemText className="link-style2" primary='The Greenwood Resort, Guwahati' />
                </ListItemButton>
              </Link>

            </ListItem>

            <ListItem disablePadding >
              <Link to="/gwt" onClick={handleClick}>
                <ListItemButton>
                  <ListItemText className="link-style2" primary='The Greenwood, Tezpur' />
                </ListItemButton>
              </Link>

            </ListItem>

            <ListItem disablePadding  >
              <Link to="/gwg" onClick={handleClick}>
                <ListItemButton>
                  <ListItemText className="link-style2" primary='The Greenwood, Guwahati' />
                </ListItemButton>
                </Link>
            </ListItem>        

        </List>

      </Box>
    </Box>

    </SwipeableDrawer >
  )
}

export default RightDrawer