import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import MainSection from '../../pages/MainSection'
import CategoryTabs from '../CatTabs/CategoryTabs'
import Header from '../header/Header'
import Nav2 from '../Nav2/Nav2'
import {BiWifi} from "react-icons/bi"
import RoomCard from './RoomCard'


const Room = () => {
  return (
 
            <Container maxWidth='md' sx={{mb:10}}>
                <Box sx={{ display:'flex', flexDirection:'column', align:'center', justifyContent:'center', gap:2}}>
                    {/* <Box component="img"
                    sx={{width:'100%',}}
                    alt="The house from the offer."
                    src="https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Fade-Final-Sketch-back2.png"
                    /> */}
                    <RoomCard/>
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', gap:1, mt:4, mb:1}}>
                        <Box component="img" sx={{width:35, height:35}} src="https://thegreenwoodhotels.com/wp-content/uploads/2022/05/logo-sm.png"/>
                        <Typography sx={{fontWeight:'bold'}}>Standard Room</Typography>
                    </Box>
                    <Typography sx={{fontSize:15,  textAlign:'justify'}}>The Standard Rooms, with their bright, earthy energy and modish amenities, unravel conscious luxury for solo-travelers and couples alike.</Typography>
                    <Typography sx={{textAlign:'center', fontSize:15, fontWeight:700}}>2 Adults | King-size bed | 200-250 Sq.ft</Typography>
                    <Button variant='contained' size='medium' sx={{marginX:4, borderRadius:10}} >Book Now</Button>

                    <Container maxWidth='sm' sx={{backgroundColor:'#173632', padding:5}}>
                            <Typography sx={{color:'white', textAlign:'center', mb:4}}>FACILITIES</Typography>
                            <Box sx={{display:'flex', flexWrap:'wrap', gap:4}}>
                                <Box sx={{display:'flex', alignItems:'center', gap:2}}>
                                    <BiWifi color='white' size={30}/>
                                    <Typography>Free Wifi</Typography>
                                </Box>

                                <Box sx={{display:'flex', alignItems:'center', gap:2}}>
                                    <BiWifi color='white' size={30}/>
                                    <Typography>Free Wifi</Typography>
                                </Box>


                                <Box sx={{display:'flex', alignItems:'center', gap:2}}>
                                    <BiWifi color='white' size={30}/>
                                    <Typography>Free Wifi</Typography>
                                </Box>

                                <Box sx={{display:'flex', alignItems:'center', gap:2}}>
                                    <BiWifi color='white' size={30}/>
                                    <Typography>Free Wifi</Typography>
                                </Box>
                            </Box>
                        
                    </Container>
                </Box>
            </Container>

  )
}

export default Room