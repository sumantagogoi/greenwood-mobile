import { Box, Button, Container, Grid, Typography, Link } from '@mui/material'
import React from 'react'
import { BiWifi } from "react-icons/bi"
import { autoPlay } from 'react-swipeable-views-utils'
import RoomCard from '../components/Slider2/SliderCard';

const FNB = ({ page }) => {

  const fnb_data = {
    "gwr-fnb-bagan": {
      "name": "Bagan",
      "logo": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/07/Asset-2_1@2x.png",
      "desc": "Drop in to get a glimpse of the natural beauty and warmth of Assam at our cosy and dreamy Cafe Bagan, a name that modestly hints at the widely famed signature of the Northeastern state— it’s lush tea gardens. Splendid outdoor views and luscious treats, offered in a neat and welcoming setting, With their tropical gardens, natural stones and wood combined with modern international materials, this upscale destination will bring you the serene feeling once you walk in.",
      "info": "open your heart and mind and get your happy hormones flowing!",
      "email": "fnb@greenwoodresort.in",
      "phone": " +91 70990 47327",
      "timings": "07:00 - 23:00",
      "insta": "@bagan.cafe",
      "foodmenu": "#",
      "drinksmenu": "#",
      "photos": [
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-bagan-hero2.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-bagan-hero6.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-bagan-hero1.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-bagan-hero5.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-bagan-hero3.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-bagan-hero4.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/Bagan-GWR-0-1.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/Bagan-GWR-0-2.jpg",
      ],
    },

    "gwr-fnb-mynah": {
      "name": "Mynah",
      "logo": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/Logo-Orange@2x.png",
      "desc": "Drop in to get a glimpse of the natural beauty and warmth of Assam at our cosy and dreamy Cafe Bagan, a name that modestly hints at the widely famed signature of the Northeastern state— it’s lush tea gardens. Splendid outdoor views and luscious treats, offered in a neat and welcoming setting, With their tropical gardens, natural stones and wood combined with modern international materials, this upscale destination will bring you the serene feeling once you walk inSettle in for a pleasant and joyful time at our bar, Mynah’s , a name inspired by a bird local to Assam, known for its vibrant colour, melodic sound and its omnipresence across our properties. A stylish and inviting space, embodying the freedom of our feathered friend, is set perfectly to lift your spirits up with sumptuous fares, tantalising cocktails, and lively music tracks..",
      "info": "A space brought to you, to bring people together!",
      "email": "fnb@greenwoodresort.in",
      "phone": " +91 70990 47323",
      "timings": "12:00 - 00:00",
      "insta": "mynahs.bar",
      "foodmenu": "#",
      "drinksmenu": "#",
      "photos": [
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-mynah41.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/Mynahs-Indoor.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-myna-live.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/05/GWMYNAH_04.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-mynah8.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-mynah42.jpg",
      ],
    },

    "gwr-fnb-aroma": {
      "name": "Aroma",
      "logo": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/aroma-blur.png",
      "desc": "Aroma offers a lip-smacking spread of global cuisine, special menus on select days, and a magnificent view through its large windows . A one-of-a-kind culinary experience at Aroma, a warmly familial multi-cuisine restaurant, where the whiff of varied flavours tantalises your senses and draws you in for a delicious experience. A splendidly designed indoor space, awaits your presence.",
      "info": "The flavours in our food unfolds with each bite!",
      "email": "fnb@greenwoodresort.in",
      "phone": " +91 70990 47326",
      "timings": "07:00 - 23:00",
      "insta": "aroma.moderndining",
      "foodmenu": "#",
      "drinksmenu": "#",
      "photos": [
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero2.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-aroma1.jpg",
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
        <RoomCard photos={fnb_data[page]["photos"]} />

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 2, mb: 1 }}>
          <Box component="img" sx={{ height: 100 }} src={fnb_data[page]["logo"]} />

        </Box>

        <Typography sx={{
          textAlign: 'center', fontSize: 25, letterSpacing: 2,
          fontFamily: "Freight Big Bold", mt: 1, textTransform: "capitalize",
          color: "#222", fontWeight: 600,
        }}>
          {fnb_data[page]["info"]}</Typography>

        <Typography sx={{ fontSize: 16, textAlign: 'justify', fontFamily: "Freight Big Light", letterSpacing: 1.7, color: "#222" }}>{fnb_data[page]["desc"]}</Typography>

        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={6}>
            <Typography sx={{ fontSize: 19, textAlign: 'justify', fontFamily: "Freight Big Light", letterSpacing: 1.7, color: "red", mb: -1, mt: 2 }}>Daily Open</Typography>
            <Typography sx={{ fontSize: 16, textAlign: 'justify', fontFamily: "Freight Big Light", letterSpacing: 1.7, color: "black" }}>{fnb_data[page]["timings"]}</Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <Box sx={{ textAlign: "right" }}>
              <Link href={fnb_data[page]["foodmenu"]}>
                <img src="/assets/images/food-menu.png" alt="" width={60} />
              </Link>

              {
                fnb_data[page]["drinksmenu"] ? (
                  <Link href={fnb_data[page]["drinksmenu"]}>
                    <img src="/assets/images/drinks-menu.png" alt="" width={82} />
                  </Link>
                ) : (<></>)
              }

            </Box>

          </Grid>

        </Grid>



        <Typography sx={{ fontSize: 16, textAlign: 'center', fontFamily: "Savoy Regular", letterSpacing: 1.7, color: "#222", mb: -1 }}>CONTACT DETAILS</Typography>
        <Typography sx={{ fontSize: 19, textAlign: 'center', fontFamily: "Freight Big Light", letterSpacing: 1.7, color: "red", mb: -2 }}>{fnb_data[page]["email"]}</Typography>
        <Typography sx={{ fontSize: 19, textAlign: 'center', fontFamily: "Freight Big Light", letterSpacing: 1.7, color: "red", mb: -2 }}>{fnb_data[page]["phone"]}</Typography>
        <Typography sx={{ fontSize: 19, textAlign: 'center', fontFamily: "Freight Big Light", letterSpacing: 1.7, color: "red" }}>Follow us on instagram @{fnb_data[page]["insta"]}</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>

          <img src="/assets/images/gwr/gwr-bagan-foot.jpg" alt="Bagan" width="100%" />

        </Box>

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

      </Box>
    </Container>

  )
}

export default FNB