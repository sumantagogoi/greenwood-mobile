import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import './Nav2.css'
import {BiHome} from 'react-icons/bi'
import { BsFillBagCheckFill} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import AppContext from '../../context/GreenwoodAppContext'


const NavMenu = [
    { id:1, name:'Stay', icon:<BiHome size={25} color='white' /> },
    { id:2, name:'F & B', icon:<BsFillBagCheckFill size={25} color='white' /> },
    { id:3, name:'Events', icon:<CgProfile size={25} color='white' /> },
    { id:4, name:'Spa', icon:<CgProfile size={25} color='white' /> },
]
const GWGNAV2 = () => {

    const {location, setLocation} = useContext(AppContext)
  return (
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#173632', position:'sticky'}}>
        <Stack sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <Typography sx={{color:'white'}}>{location}</Typography>
            {NavMenu.map((item)=>{
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

export default GWGNAV2