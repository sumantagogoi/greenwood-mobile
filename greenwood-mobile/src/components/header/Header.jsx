import { Box, Container, IconButton, Typography } from '@mui/material'
import React from 'react'
import './Header.css'
import {GiHamburgerMenu} from 'react-icons/gi'



const Header = () => {
  return (
  <Box sx={{display:'flex', height:80, width:'100%', backgroundColor:'#173632'}}>
        <Container>
            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center',  height:'100%', width:'100%'}}>
                <img className='logo' src='https://thegreenwoodhotels.com/wp-content/uploads/2022/04/logo2x.png'/>
                <IconButton>
                    <GiHamburgerMenu color='white'/>
                </IconButton>
            </Box>
        </Container>
  </Box>
  )
}

export default Header