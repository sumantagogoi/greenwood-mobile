import { Box, Button, Container, Grid, Typography, Link } from '@mui/material'
import React from 'react'
import { BiWifi } from "react-icons/bi"
import { autoPlay } from 'react-swipeable-views-utils'
import RoomCard from '../Slider2/SliderCard'


const Room = ({ page }) => {

    const room_data = {
        "gwr-stay-standard-room": {
            "name": "The Standard Room",
            "desc": "The Standard Rooms, with their bright, earthy energy and modish amenities, unravel conscious luxury for solo-travelers and couples alike.",
            "info": "2 Adults | King-size bed | 200-250 Sq.ft",
            "photos": [
                "https://thegreenwoodhotels.com/wp-content/uploads/elementor/thumbs/gwr-standard4-e1655583000953-pqif7tvddrbw2lphio0xn0ak2idmt1hjwwfwyvxvz4.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/elementor/thumbs/gwr-standard3-e1655582966903-pqif6xwuxe453uzwpa7ma8cvver5jbyogi9enh99uo.jpg",
                'https://thegreenwoodhotels.com/wp-content/uploads/elementor/thumbs/gwr-standard5-ppzhmh9frjjpplktergijf8861ury6wooak7w3pqu8.jpg',
                'https://thegreenwoodhotels.com/wp-content/uploads/elementor/thumbs/gwr-standard2-e1655582749221-pqif19xvqccx4h86sc1kr5tuysoi50gxcgp1ifnpcw.jpg',
                'https://thegreenwoodhotels.com/wp-content/uploads/elementor/thumbs/gwr-standard1-e1655582876953-pqif4lbduawc2yesf9n71tpeeqc4akmu4vjpgkqpeo.jpg',
            ],
        },
        "gwr-stay-premier-room": {
            "name": "The Premier Room",
            "desc": "Our Premier Rooms, with their bright, earthy energy and modish ensuite amenities, unravel conscious luxury for solo-travelers and couples alike.The rooms bestow an elegant design combined with refined charm and luxuriously appointed sleek accommodation",
            "info": "2 Adults | King-size bed | 200-250 Sq.ft",
            "photos": [
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-prem-room11-e1655584319727.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-prem-room9-e1655584369643.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-prem-room6-e1655584491736.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-prem-room8-rotated-e1655583480531.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/05/Room-E-2-e1655584637539.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-premier3.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/DSC7497-Edit-e1655584679679.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-prem-room4-e1655584588646.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-prem-room5-e1655584565268.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-prem-room12-e1655584255155.jpg",
            ],
        },
        "gwr-stay-luxury-room": {
            "name": "The Luxury Room",
            "desc": "Our Luxury Rooms, replicating our verdant and peaceful fringes offering modern amenities and lavish furnishings to delight leisure, business and family travelers alike. Each of our rooms are given an unique concepts that emanates unmistakable richness in all aspects to embed the stay on the mind forever. Most rooms feature a balcony.",
            "info": "2 Adults | King-size bed | 380 Sq.ft",
            "photos": [
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-luxury-anemolia4.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/05/luxury1.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-luxury-kahakai3-e1655586919804.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-luxury-oakbarn5.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-luxury-aurevoir3.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-luxury-aurevoir4.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-luxury-aurevoir-room3-e1655589026571.jpg",
            ],
        },
        "gwr-stay-greenwood-suite": {
            "name": "The Greenwood Suite",
            "desc": "Our Greenwood Suites boasts a bedroom complete with a stylish king size bed and a living room, decorated in neutral tones. Featuring modern furnishings with a warm and inviting feel, complemented by deluxe amenities.",
            "info": "2 Adults | King-size bed | 400-450 Sq.ft",
            "photos": [
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/GWR-SUITE-1.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/GWR-SUITE-2.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/GWR-SUITE-3.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/GWR-SUITE-4.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/GWR-SUITE-S1.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/GWR-SUITE-S2.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/GWR-SUITE-S3.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/GWR-SUITE-S4.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/GWR-SUITE-S5.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/GWR-SUITE-S6.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/GWR-SUITE-S7.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/GWR-SUITE-S8.jpg",
            ],
        },
        "gwt-stay-premier-room": {
            "name": "The Premier Room",
            "desc": "Stunning basics uniquely designed for comfort. An ideal choice for those looking for a comfortable base from which to explore this vibrant city.",
            "info": "2 Adults | King-size bed | 250 Sq.ft",
            "photos": [
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-premium6-1.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-premium4-1.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-premium5-1.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-premium2-1.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-premium3-1.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-premium1-1.jpg",
            ],
        },
        "gwt-stay-luxury-room": {
            "name": "The Luxury Room",
            "desc": "A perfect combination of aesthetic design and open space as you make the best of our amenities to help you take care of your work, or simply unwind and relax.",
            "info": "2 Adults | King-size bed | 360 Sq.ft",
            "photos": [
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-luxury4.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-luxury3.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-luxury2.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-luxury1.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-premium1-1.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-premium3-1.jpg",
            ],
        },
        "gwt-stay-greenwood-suite": {
            "name": "The Greenwood Suite",
            "desc": "Experience the sheer luxury of space and convenience with an elegantly designed bedroom and living area that blends the comfort of home with the design and luxury of Greenwood.",
            "info": "2 Adults | King-size bed | 420 Sq.ft",
            "photos": [
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-suite10.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-suite8.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-suite6.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-suite5.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-premium1-1.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-premium3-1.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-suite9.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-suite7.jpg",
            ],
        },
        "gwg-stay-luxury-room": {
            "name": "The Luxury Room",
            "desc": "A perfect combination of aesthetic design and open space as you make the best of our amenities to help you take care of your work, or simply unwind and relax.",
            "info": "2 Adults | Queen-size bed | 320 Sq.ft",
            "photos": [
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/11/gwg-luxury-rooms1.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/11/gwg-luxury-rooms6.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/11/gwg-luxury-rooms3.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/11/gwg-luxury-banner.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/11/gwg-luxury-rooms7.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/11/gwg-luxury-rooms2.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/11/gwg-luxury-rooms5.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/11/gwg-luxury-rooms4.jpg",
            ],
        },
        "gwg-stay-greenwood-suite": {
            "name": "The Greenwood Suite",
            "desc": "Experience the sheer luxury of space and convenience with an elegantly designed bedroom and living area that blends the comfort of home with the design and luxury of Greenwood.",
            "info": "2 Adults | King-size bed | 450 Sq.ft",
            "photos": [
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-suite6.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-suite5.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-suite7.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-suite4.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-suite2.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-suite3.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-suite8.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-suite9.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-suite1.jpg",
            ],
        },

    }

    const links = {
        "gwr": "https://staahmax.staah.net/be/indexpackdetail?propertyId=NDkzNQ==&individual=true",
        "gwg": "https://staahmax.staah.net/be/indexpackdetail?propertyId=NDkzMg==&individual=true",
        "gwt": "https://staahmax.staah.net/be/indexpackdetail?propertyId=NDk1MA==&individual=true",
    }

    const link = links[page.substring(0, 3)]

    return (

        <Container maxWidth='md' sx={{ mt: -4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', align: 'center', justifyContent: 'center', gap: 2 }}>
                <RoomCard photos={room_data[page]["photos"]} />

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 4, mb: 1 }}>
                    <Box component="img" sx={{ width: 35, height: 35 }} src="https://thegreenwoodhotels.com/wp-content/uploads/2022/05/logo-sm.png" />
                    <Typography sx={{ fontFamily: "Savoy Regular", fontSize: 30, letterSpacing: 0 }}>{room_data[page]["name"]}</Typography>
                </Box>

                <Typography sx={{ fontSize: 15, textAlign: 'justify', fontFamily: "Avenir Book" }}>{room_data[page]["desc"]}</Typography>

                <Typography sx={{ textAlign: 'center', fontSize: 15, fontWeight: 700, fontFamily: "Avenir Book", mt: 5 }}>{room_data[page]["info"]}</Typography>

                <Link href={link} target="_blank" sx={{ marginX: "auto" }}>
                    <Button variant='contained' size='medium' sx={{
                        width: 150, borderRadius: 5, fontFamily: "Savoy Regular",
                        color: "#707070", backgroundColor: "#DADDCF", marginY: 3
                    }}>
                        Book Now
                    </Button>

                </Link>

                {/* <Container maxWidth='sm' sx={{ backgroundColor: '#173632', padding: 4 }}>
                    <Typography sx={{ color: 'white', textAlign: 'center', mb: 4, fontFamily: "Savoy Regular" }}>FACILITIES</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <BiWifi color='white' size={30} />
                            <Typography sx={{ fontFamily: "Avenir Book", color: "white" }} >Free Wifi</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <BiWifi color='white' size={30} />
                            <Typography sx={{ fontFamily: "Avenir Book", color: "white" }} >Free Wifi</Typography>
                        </Box>


                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <BiWifi color='white' size={30} />
                            <Typography sx={{ fontFamily: "Avenir Book", color: "white" }} >Free Wifi</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <BiWifi color='white' size={30} />
                            <Typography sx={{ fontFamily: "Avenir Book", color: "white" }} >Free Wifi</Typography>
                        </Box>
                    </Box>

                </Container> */}
                <Box  sx={{pb: 10}}>
                <img src="/assets/images/gw-room-facilites.jpg" width="100%"/>
                </Box>
                
            </Box>
        </Container>

    )
}

export default Room