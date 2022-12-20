import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import './Footer.css'
import {BiHome} from 'react-icons/bi'
import { BsFillBagCheckFill} from 'react-icons/Bs'
import {CgProfile} from 'react-icons/cg'

const FooterMenu = [
    { id:1, name:'Home', icon:<BiHome size={25} color='white' /> },
    { id:2, name:'Bag', icon:<BsFillBagCheckFill size={25} color='white' /> },
    { id:3, name:'Profile', icon:<CgProfile size={25} color='white' /> },
]

const Footer = () => {
  return (
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#173632', position:'sticky'}}>
        <Stack sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
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