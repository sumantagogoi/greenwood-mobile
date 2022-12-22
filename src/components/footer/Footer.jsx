import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import './Footer.css'
import {BiHome} from 'react-icons/bi'
import { BsFillBagCheckFill} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'

const FooterMenu = [
    { id:1, name:'Stay', icon:<BiHome size={25} color='white' /> },
    { id:2, name:'F & B', icon:<BsFillBagCheckFill size={25} color='white' /> },
    { id:3, name:'Events', icon:<CgProfile size={25} color='white' /> },
    { id:4, name:'Spa', icon:<CgProfile size={25} color='white' /> },
]

const Footer = () => {
  return (
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#173632', position:'sticky'}}>
        <Stack sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <Typography sx={{color:'white'}}>Greenwood Resort</Typography>
            {FooterMenu.map((item)=>{
                return (
                    <Button key={item.id}>
                        <Stack sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            {item.icon}
                            <Typography sx={{color:'white'}}>{item.name}</Typography>
                        </Stack>
                    </Button>
                )
            })}
        </Stack>
    </Box>
  )
}

export default Footer
