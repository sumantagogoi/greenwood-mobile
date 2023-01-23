import { Box, Button, Container, Typography } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import React from 'react'
import { BiWifi } from "react-icons/bi"
import RoomCard from '../rooms/RoomCard'
import { Link, useLocation } from 'react-router-dom';


const Events = ({ page }) => {
    const xorai = {
        "name": "Xorai",
        "desc": "The pillarless Xorai banquet reflects grandeur whilst opening up an array of possibilities. It is the perfect choice for conferences, sit-down affairs or social receptions.",
        "info": {
            "maxcap": "350",
            "area": "2,500",
            "entrys": "1",
            "theatre": "250",
            "classroom": "150",
            "cluster": "150",
            "ushape": "80",
            "social": "350",
        },
        "photos": [

            "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Lawns-Majuli-Hall4-e1655763455916.jpg",
            "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Lawns-Majuli-Hall7.jpg",

        ],
    }

    const event_data = {
        "gwr-event-bookings-majuli-hall": {
            "name": "Majuli Banquet",
            "desc": "Enjoy the welcoming ambiance of Majuli, a banquet hall named after the largest river island in the world and the home to the cheerful Satriya culture. Within a space of 65 x 28 square-feet, with the capacity to host up to X people, we blend the dedication of well-trained staff members and the convenience of amenities to enliven birthday parties, pre-wedding celebrations, engagement parties and other closed-knit events.",
            "info": {
                "maxcap": "150",
                "area": "1,572",
                "entrys": "1",
                "theatre": "100",
                "classroom": "80",
                "cluster": "60",
                "ushape": "44",
                "social": "150",
            },
            "photos": [
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-events-majulihall5.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-events-majulihall1.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-events-majulihall2.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-events-majulihall4.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-events-majulihall3.jpg",
            ],
        },
        "gwr-event-bookings-majuli-lawn": {
            "name": "Majuli Lawn",
            "desc": "Absorb the natural richness and take pleasure in extremely warm hospitality at Majuli, the 157 x 150 square-feet green lawn that invites you to celebrate wedding parties, corporate meetings, and social functions with great panache. The pairing of contemporary services and enchanting hillside views make social gatherings and special events smooth, splendid, and enjoyable. `",
            "info": {
                "maxcap": "3500",
                "area": "33,153",
                "entrys": "2",
                "theatre": "3000",
                "classroom": "2500",
                "cluster": "2500",
                "ushape": "1500",
                "social": "3500",
            },
            "photos": [
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/05/majuli-lawn1-e1655763595638.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Lawns-Majuli-Hall4-e1655763455916.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Lawns-Majuli-Hall7.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Lawns-Majuli-Hall6-e1655763497290.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Lawns-Majuli-Hall5-e1655763516152.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Lawns-Majuli-Hall3.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-umanandalawn-pic27.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-majulilawn-13.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-majulilawn-15.jpg",
            ],
        },
        "gwr-event-bookings-nameri-lawn": {
            "name": "Nameri Lawn",
            "desc": "Enjoy your social or corporate celebrations, under the sky at Nameri, the open lawn measuring 230 x 145 square-feet named after the famous national park and tiger reserve located at the foothills of Assam. Quick accessibility, top-class services and pleasant surroundings prove perfect for family celebrations, networking events, small music concerts and a range of outdoor occasions. ",
            "info": {
                "maxcap": "1500",
                "area": "12,319",
                "entrys": "1",
                "theatre": "1300",
                "classroom": "1000",
                "cluster": "1000",
                "ushape": "N/A",
                "social": "1500",
            },
            "photos": [
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-nameri-lawn-24.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-nameri-lawn-25.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-nameri-lawn-22.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Lawns-Nameri-Hall5-e1655764103157.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-nameri-lawn-21.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-nameri-lawn-23.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Lawns-Nameri-Hall1-rotated-e1655764041628.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-nameri-lawn-28.jpg",
            ],
        },
        "gwr-event-bookings-nameri-hall": {
            "name": "Nameri Banquet",
            "desc": "Enjoy your social or corporate celebrations, under the sky at Nameri, the open lawn measuring 230 x 145 square-feet named after the famous national park and tiger reserve located at the foothills of Assam. Quick accessibility, top-class services and pleasant surroundings prove perfect for family celebrations, networking events, small music concerts and a range of outdoor occasions.",
            "info": {
                "maxcap": "200",
                "area": "1,808",
                "entrys": "1",
                "theatre": "150",
                "classroom": "100",
                "cluster": "120",
                "ushape": "51",
                "social": "200",
            },
            "photos": [
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/05/nameri-hall1.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/05/nameri-lawn1.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Lawns-Nameri-Hall2-rotated-e1655764245350.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Lawns-Nameri-Hall5-e1655764103157.jpg",
            ],
        },
        "gwr-event-bookings-umananda-lawn": {
            "name": "Umananda Lawn",
            "desc": "Cherish some delightful times with your family and professional peers at Umananda, named after Guwahati’s smallest inhabited river islet. An ardent gathering of grandeur awaits you at a beautiful 102 x 120 square-feet outdoor space— forming the front yard of Mynah’s and Aroma— that’s bestowed with the best-in-class amenities and extremely courteous staff.",
            "info": {
                "maxcap": "500",
                "area": "6,222",
                "entrys": "1",
                "theatre": "450",
                "classroom": "257",
                "cluster": "300",
                "ushape": "102",
                "social": "500",
            },
            "photos": [
                "https://thegreenwoodhotels.com/wp-content/uploads/2023/01/gwr-umananda2.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-umanandalawn-hero1.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2023/01/gwr-umananda3.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Lawns-Umananda-Hall4.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-umanandalawn-pic21.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Lawns-Umananda-Hall3.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-umanandalawn-pic22.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Lawns-Umananda-Hall1-e1655765078669.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2023/01/gwr-umananda5.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2023/01/gwr-umananda6.jpg",
            ],
        },
        "gwr-event-bookings-kamarup-hall": {
            "name": "Kamarup Banquet",
            "desc": "A heartfelt banqueting occasion in the company of your family, friends and professional associates embraces you at The Greenwood Hotels & Resorts with a warm welcome. Each moment of family gatherings and corporate events – small or large, intimate or grand – becomes extra special and bright owing to our first-rate hospitality, roomy spaces, and thoughtful planning.",
            "info": {
                "maxcap": "700",
                "area": "5,414",
                "entrys": "2",
                "theatre": "500",
                "classroom": "386",
                "cluster": "451",
                "ushape": "154",
                "social": "700",
            },
            "photos": [
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Lawns-Kamarup-Hall7-e1655764462121.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Lawns-Kamarup-Hall8-e1655764421225.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Lawns-Kamarup-Hall5-e1655764502352.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/05/kamarup-hall1-e1655764699549.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/kamarup-banq4.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/kamarup-banq5.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Lawns-Kamarup-Hall1-e1655764665669.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/kamarup-banq1.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/kamarup-banq2.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/kamarup-banq3.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-kamarup-banq31.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-kamarup-banq32.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-kamarup-banq33.jpg",
            ],
        },

        "gwg-event-bookings-xorai": xorai,
        "gwg-event-bookings": xorai,

        "gwt-event-bookings-orang-lawn": {
            "name": "Orang Lawn",
            "desc": "Orang Lawn is an outdoor event space, the verdant lawns provide you with an iconic venue for choreographed gatherings, celebrations, weddings and other specialized events. The hotel offers a spectacular choice of settings and facilities as well as a dedicated team to ensure that every detail is executed flawlessly.",
            "info": {
                "maxcap": "2000",
                "area": "12,490",
                "entrys": "2",
                "theatre": "1500",
                "classroom": "1000",
                "cluster": "1000",
                "ushape": "N/A",
                "social": "2000",
            },
            "photos": [
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-oranglawn1.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-oranglawn7.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-oranglawn2.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-oranglawn6.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-oranglawn8.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-oranglawn4.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-oranglawn5.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-oranglawn3.jpg",
            ],
        },
        "gwt-event-bookings-orang-hall": {
            "name": "Orang Banquet",
            "desc": "The pillarless Orang Banquet reflects grandeur whilst opening up an array of possibilities. It is the perfect choice for conferences, sit-down affairs or social receptions.",
            "info": {
                "maxcap": "1000",
                "area": "3,600",
                "entrys": "2",
                "theatre": "700",
                "classroom": "500",
                "cluster": "500",
                "ushape": "100",
                "social": "1000",
            },
            "photos": [
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/07/gwh-tezpur-banque21.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/07/gwh-tezpur-banque22.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/07/gwht-banquet-hall.jpg",
            ],
        },
        "gwt-event-bookings-gorh-hall": {
            "name": "The Gorh Banquets",
            "desc": "From birthdays to baby showers, celebrating a big promotion or graduation, an intimate gathering of family and friends or even a corporate get-together, our party halls can transform to fit every occasion. When you look forward to celebrating once-in-a-lifetime moments, you need them most flawlessly thought of and executed. We invite you to celebrate with us and create treasured memories that will last for generations to come.",
            "info": {
                "maxcap": "Gorh I: 50, Gorh II: 50, Gorh III: 70",
                "area": "600",
                "entrys": "1",
                "theatre": "40",
                "classroom": "30",
                "cluster": "30",
                "ushape": "20",
                "social": "70",
            },
            "photos": [
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/12/gwht-extras11.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/12/gwht-extras2.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/12/gwht-extras13.jpg",
            ],
        },
        "gwt-event-bookings-gw-boardrooms": {
            "name": "The Greenwood Boardrooms",
            "desc": "With an unparalleled attention to detail and cleanliness, your next corporate meeting with us will be a welcome escape. Host a professional conference or meeting that will impress delegates and ensure business success. Renowned for executing events of every caliber, our team will ensure delegates are left inspired and recharged.",
            "info": {
                "maxcap": "20",
                "area": "529",
                "entrys": "1",
                "theatre": "N/A",
                "classroom": "N/A",
                "cluster": "N/A",
                "ushape": "N/A",
                "social": "N/A",
            },
            "photos": [
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/12/gwht-extras6.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/12/gwht-extras8.jpg",
                "https://thegreenwoodhotels.com/wp-content/uploads/2022/12/gwht-extras9.jpg",
            ],
        },


    }
    return (

        <Container maxWidth='md' sx={{ mt: -4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', align: 'center', justifyContent: 'center', gap: 2 }}>
                <RoomCard photos={event_data[page]["photos"]} />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 4, mb: 1 }}>
                    <Box component="img" sx={{ width: 35, height: 35 }} src="https://thegreenwoodhotels.com/wp-content/uploads/2022/05/logo-sm.png" />
                    <Typography sx={{ fontFamily: "Savoy Regular", fontSize: 30, letterSpacing: 0 }}>{event_data[page]["name"]}</Typography>
                </Box>
                <Typography sx={{ fontSize: 15, textAlign: 'justify', fontFamily: "Avenir Book" }}>{event_data[page]["desc"]}</Typography>
                <Typography sx={{ textAlign: 'center', fontSize: 15, fontWeight: 700, fontFamily: "Avenir Book" }}>Maximum Capacity: {event_data[page]["info"]["maxcap"]}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                    <Link to="/contact">
                        <Button variant='contained' size='medium' sx={{ borderRadius: 10, fontFamily: "Savoy Regular" }} >Book Now</Button>
                    </Link>

                    <Button variant='contained' size='medium' sx={{ borderRadius: 10, fontFamily: "Savoy Regular" }} >Layout</Button>
                </Box>
                <Container maxWidth='md' sx={{ backgroundColor: '#dddddd', padding: 5, opacity: 0.5 }} >
                    <Box sx={{ display: 'flex', flexDirection: 'column', color: 'black', zIndex: 222 }}>
                        <Typography sx={{ fontWeight: 'bold', fontFamily: "Avenir Book" }}>Area : {event_data[page]["info"]["area"]} sq ft</Typography>
                        <Typography sx={{ fontWeight: 'bold', fontFamily: "Avenir Book" }}>Guest Entry Point : {event_data[page]["info"]["entrys"]}</Typography>
                        <Typography sx={{ mt: 2 }}>Other Conveniences:</Typography>
                        <Typography>– Audio-Visual Equipment</Typography>
                        <Typography>– General Services</Typography>
                        <Typography>– Internet Access</Typography>
                    </Box>
                </Container>

                <Container maxWidth='md' sx={{ backgroundColor: '#173632', padding: 5 }}>
                    <Typography sx={{ color: 'white', textAlign: 'center', mb: 4, fontFamily: "Savoy Regular" }}>SEATING STYLE</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: { xs: 'center' } }}>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box component='img'
                                src="https://thegreenwoodhotels.com/wp-content/uploads/2022/06/theatre.png"
                                sx={{ height: 40, width: 40, color: 'white' }}
                            />
                            <Typography sx={{ color: 'white', fontFamily: "Avenir Book" }}>Theatre: {event_data[page]["info"]["theatre"]}</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box component='img'
                                src="https://thegreenwoodhotels.com/wp-content/uploads/2022/06/classroom.png"
                                sx={{ height: 40, width: 40, color: 'white' }}
                            />
                            <Typography sx={{ color: 'white', fontFamily: "Avenir Book" }}>Classroom: {event_data[page]["info"]["classroom"]}</Typography>
                        </Box>


                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box component='img'
                                src="https://thegreenwoodhotels.com/wp-content/uploads/2022/06/cluster.png"
                                sx={{ height: 40, width: 40, color: 'white' }}
                            />
                            <Typography sx={{ color: 'white', fontFamily: "Avenir Book" }}>Cluster: {event_data[page]["info"]["cluster"]}</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box component='img'
                                src="https://thegreenwoodhotels.com/wp-content/uploads/2022/06/U-SEAT.png"
                                sx={{ height: 40, width: 40, color: 'white' }}
                            />
                            <Typography sx={{ color: 'white', fontFamily: "Avenir Book" }}>U-Shape: {event_data[page]["info"]["ushape"]}</Typography>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box component='img'
                                src="https://thegreenwoodhotels.com/wp-content/uploads/2022/06/social.png"
                                sx={{ height: 40, width: 40, color: 'white' }}
                            />
                            <Typography sx={{ color: 'white', fontFamily: "Avenir Book" }}>Social: {event_data[page]["info"]["social"]}</Typography>
                        </Box>
                    </Box>

                </Container>
            </Box>
        </Container>

    )
}

export default Events