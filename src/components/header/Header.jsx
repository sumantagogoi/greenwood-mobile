import { Box, Container, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import './Header.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import RightDrawer from '../drawer/RightDrawer'
import { useNavigate } from 'react-router-dom'



const Header = () => {

    const [navopen, setNavOpen] = useState(false)
    const navigate = useNavigate()

  return (
  <Box sx={{display:'flex', height:80, width:'100%', backgroundColor:'#173632'}}>
        <Container>
            <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center',  height:'100%', width:'100%'}}>
                <Box>

                </Box>
                <img onClick={()=>navigate('/')} className='logo' src='https://www.thegreenwoodhotels.com/wp-content/uploads/2022/04/logo2x.png'/>

                <IconButton onClick={()=>setNavOpen(true)}>
                    <GiHamburgerMenu color='white'/>
                </IconButton>
            </Box>
        </Container>

        <RightDrawer navopen={navopen} setNavOpen={setNavOpen}/>
  </Box>
  )
}

export default Header