import { Box, Container, IconButton, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import './Header.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import RightDrawer from '../drawer/RightDrawer'
import { useNavigate } from 'react-router-dom'



const Header = () => {

    const [navopen, setNavOpen] = useState(false)
    const navigate = useNavigate()

    return (
        <Box sx={{ display: 'flex', height: 60, width: '100%', backgroundColor: '#173632' }}>
            <Container>
                <Box sx={{ display: 'flex', height: '100%', pt: 1 }}>
                    <IconButton onClick={() => setNavOpen(true)} sx={{ width: 50, mr: 1, ml: -3 }}>
                        <GiHamburgerMenu color='white' />
                    </IconButton>
                    <Box sx={{ justifyContent: 'space-between', alignItems: 'center', m: "auto" }}>
                        <img onClick={() => navigate('/')} className='logo' src='https://www.thegreenwoodhotels.com/wp-content/uploads/2022/04/logo2x.png' />
                    </Box>
                    <Box>
                        <Button onClick={()=> navigate('/stay')}>
                            <Typography sx={{ color: '#666', fontFamily: 'Savoy Regular', fontSize: '70%', bgcolor: 'white', mr: -2, ml: 3, pl: 2, pr: 2, pt: .5, pb: .5, mt: 0, mb:1, borderRadius: 4 }}>Book Rooms</Typography>
                        </Button>
                    </Box>
                </Box>
            </Container>

            <RightDrawer navopen={navopen} setNavOpen={setNavOpen} />
        </Box>
    )
}

export default Header