import { Box, Button, Container,Typography } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import React from 'react'
import {BiWifi} from "react-icons/bi"
import EventsCard from './EventsCard'


const Events = () => {
  return (
 
            <Container maxWidth='md' sx={{mb:8}}>
                <Box sx={{ display:'flex', flexDirection:'column', align:'center', justifyContent:'center', gap:2}}>
                    <EventsCard/>
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', gap:1, mt:4, mb:1}}>
                        <Box component="img" sx={{width:35, height:35}} src="https://thegreenwoodhotels.com/wp-content/uploads/2022/05/logo-sm.png"/>
                        <Typography sx={{fontWeight:'bold'}}>Majuli Banquet</Typography>
                    </Box>
                    <Typography sx={{fontSize:15,  textAlign:'justify'}}>Enjoy the welcoming ambiance of Majuli, a banquet hall named after the largest river island in the world and the home to the cheerful Satriya culture. Within a space of 65 x 28 square-feet, with the capacity to host up to X people, we blend the dedication of well-trained staff members and the convenience of amenities to enliven birthday parties, pre-wedding celebrations, engagement parties and other closed-knit events.</Typography>
                    <Typography sx={{textAlign:'center', fontSize:15, fontWeight:700}}>Maximum Capacity: 150</Typography>
                    <Box sx={{display:'flex', justifyContent:'center', gap:3}}>
                        <Button variant='contained' size='medium' sx={{ borderRadius:10}} >Book Now</Button>
                        <Button variant='contained' size='medium' sx={{ borderRadius:10}} >Layout</Button>
                    </Box>
                    <Container  maxWidth='md' sx={{backgroundColor:'#dddddd', padding:5, opacity:0.5}} >
                        <Box sx={{display:'flex', flexDirection:'column', color:'black', zIndex:222}}>
                            <Typography sx={{fontWeight:'bold'}}>Area : 1,572 sq ft</Typography>
                            <Typography sx={{fontWeight:'bold'}}>Guest Entry Point : 1</Typography>
                            <Typography sx={{mt:2}}>Other Conveniences:</Typography>
                            <Typography>– Audio-Visual Equipment</Typography>
                            <Typography>– General Services</Typography>
                            <Typography>– Internet Access</Typography>
                        </Box>
                    </Container>

                    <Container maxWidth='md' sx={{backgroundColor:'#173632', padding:5}}>
                            <Typography sx={{color:'white', textAlign:'center', mb:4}}>SEATING STYLE</Typography>
                            <Box sx={{display:'flex', flexWrap:'wrap', gap:4, justifyContent:{xs:'center'}}}>

                                <Box sx={{display:'flex', alignItems:'center', gap:1}}>
                                    <Box component='img'
                                    src="https://thegreenwoodhotels.com/wp-content/uploads/2022/06/theatre.png"
                                    sx={{height: 40, width: 40, color:'white'}}
                                    />
                                    <Typography sx={{color:'white'}}>Theatre: 50</Typography>
                                </Box>

                                <Box sx={{display:'flex', alignItems:'center', gap:1}}>
                                <Box component='img'
                                    src="https://thegreenwoodhotels.com/wp-content/uploads/2022/06/classroom.png"
                                    sx={{height: 40, width: 40, color:'white'}}
                                    />
                                    <Typography sx={{color:'white'}}>Classroom: 80</Typography>
                                </Box>


                                <Box sx={{display:'flex', alignItems:'center', gap:1}}>
                                <Box component='img'
                                    src="https://thegreenwoodhotels.com/wp-content/uploads/2022/06/cluster.png"
                                    sx={{height: 40, width: 40, color:'white'}}
                                    />
                                    <Typography sx={{color:'white'}}>Cluster: 60</Typography>
                                </Box>

                                <Box sx={{display:'flex', alignItems:'center', gap:1}}>
                                <Box component='img'
                                    src="https://thegreenwoodhotels.com/wp-content/uploads/2022/06/U-SEAT.png"
                                    sx={{height: 40, width: 40, color:'white'}}
                                    />
                                    <Typography sx={{color:'white'}}>U-Shape: 44</Typography>
                                </Box>

                                <Box sx={{display:'flex', alignItems:'center', gap:1}}>
                                <Box component='img'
                                    src="https://thegreenwoodhotels.com/wp-content/uploads/2022/06/social.png"
                                    sx={{height: 40, width: 40, color:'white'}}
                                    />
                                    <Typography sx={{color:'white'}}>Social: 150</Typography>
                                </Box>
                            </Box>
                        
                    </Container>
                </Box>
            </Container>

  )
}

export default Events