import { Box, Button, Container, Typography } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import React from 'react'
import { BiWifi } from "react-icons/bi"
import RoomCard from '../Slider2/SliderCard'
import { Link, useLocation } from 'react-router-dom';


const FnB = ({ page }) => {

    const event_data = {
        "gwr-fnb-mynah": {
            "name": "Mynah's: Bar & Bistro",
            "desc": "Settle in for a pleasant and joyful time at our bar, Mynah’s , a name inspired by a bird local to Assam, known for its vibrant colour, melodic sound and its omnipresence across our properties. A stylish and inviting space, embodying the freedom of our feathered friend, is set perfectly to lift your spirits up with sumptuous fares, tantalising cocktails, and lively music tracks.",
            "info": {
                "email": "150",
                "phone": "1,572",
                "insta": "1",
                "timings": "100",
                "menu": "80",
                "drinks": "60",
                "footer": "44",
                "logo": "150",
            },
            "photos": [
                "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-mynah41.jpg",
                "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/Mynahs-Indoor.jpg",
                "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-myna-live.jpg",
                "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/05/GWMYNAH_04.jpg",
                "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-mynah8.jpg",
                "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-mynah42.jpg",
            ],
        },



    }
    return (

        <Container maxWidth='md' sx={{ mt: -4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', align: 'center', justifyContent: 'center', gap: 2 }}>
                <RoomCard photos={event_data[page]["photos"]} />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 4, mb: 1 }}>
                    <Box component="img" sx={{ width: 35, height: 35 }} src="https://www.thegreenwoodhotels.com/wp-content/uploads/2022/05/logo-sm.png" />
                    <Typography sx={{ fontFamily: "Savoy Regular", fontSize: 30, letterSpacing: 0 }}>{event_data[page]["name"]}</Typography>
                </Box>
                <Typography sx={{ fontSize: 15, textAlign: 'justify', fontFamily: "Avenir Book" }}>{event_data[page]["desc"]}</Typography>
                <Typography sx={{ textAlign: 'center', fontSize: 15, fontWeight: 700, fontFamily: "Avenir Book", marginY: 2 }}>Maximum Capacity: {event_data[page]["info"]["maxcap"]}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                    <Link to="/contact">
                        <Button variant='contained' size='medium' sx={{ borderRadius: 10, fontFamily: "Savoy Regular" }} >Book Now</Button>
                    </Link>

                    <Button variant='contained' size='medium' sx={{ borderRadius: 10, fontFamily: "Savoy Regular" }} >Layout</Button>
                </Box>
                <Container maxWidth='md' sx={{ backgroundColor: '#dddddd', padding: 3, opacity: 0.5 }} >
                    <Box sx={{ display: 'flex', flexDirection: 'column', color: 'black', zIndex: 222 }}>
                        <Typography sx={{ fontWeight: 'bold', fontFamily: "Avenir Book" }}>Area : {event_data[page]["info"]["area"]} sq ft</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontFamily: "Avenir Book" }}>Guest Entry Point : {event_data[page]["info"]["entrys"]}</Typography>
                        <Typography sx={{ mt: 2 }}>Other Conveniences:</Typography>
                        <Typography>– Audio-Visual Equipment</Typography>
                        <Typography>– General Services</Typography>
                        <Typography>– Internet Access</Typography>
                    </Box>
                </Container>

                <Container maxWidth='md' sx={{ backgroundColor: '#173632', padding: 5, mb: 10 }}>
                    <Typography sx={{ color: 'white', textAlign: 'center', mb: 4, fontFamily: "Savoy Regular" }}>SEATING STYLE</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: { xs: 'left' } }}>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box component='img'
                                src="https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/theatre.png"
                                sx={{ height: 50, width: 50, color: 'white', ml: -1 }}
                            />
                            <Typography sx={{ color: 'white', fontFamily: "Avenir Book", fontSize: 14 }}>Theatre: {event_data[page]["info"]["theatre"]}</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box component='img'
                                src="https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/classroom.png"
                                sx={{ height: 35, width: 35, color: 'white', }}
                            />
                            <Typography sx={{ color: 'white', fontFamily: "Avenir Book", fontSize: 14 }}>Classroom: {event_data[page]["info"]["classroom"]}</Typography>
                        </Box>


                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box component='img'
                                src="https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/cluster.png"
                                sx={{ height: 40, width: 40, color: 'white' }}
                            />
                            <Typography sx={{ color: 'white', fontFamily: "Avenir Book", fontSize: 14 }}>Cluster: {event_data[page]["info"]["cluster"]}</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box component='img'
                                src="https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/U-SEAT.png"
                                sx={{ height: 40, width: 40, color: 'white' }}
                            />
                            <Typography sx={{ color: 'white', fontFamily: "Avenir Book", fontSize: 14 }}>U-Shape: {event_data[page]["info"]["ushape"]}</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box component='img'
                                src="https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/social.png"
                                sx={{ height: 40, width: 40, color: 'white' }}
                            />
                            <Typography sx={{ color: 'white', fontFamily: "Avenir Book", fontSize: 14 }}>Social: {event_data[page]["info"]["social"]}</Typography>
                        </Box>
                    </Box>

                </Container>
            </Box>
        </Container>

    )
}

export default FnB