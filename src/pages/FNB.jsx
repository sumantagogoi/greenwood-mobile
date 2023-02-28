import { Box, Button, Container, Grid, Typography, Link, TextField } from '@mui/material'
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
      "desc": "Settle in for a pleasant and joyful time at our bar, Mynah’s, a name inspired by a bird local to Assam, known for its vibrant colour, melodic sound and its omnipresence across our properties. A stylish and inviting space, embodying the freedom of our feathered friend, is set perfectly to lift your spirits up with sumptuous fares, tantalising cocktails, and lively music tracks.",
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

    "gwt-fnb-bagan": {
      "name": "Bagan",
      "logo": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/07/Asset-2_1@2x.png",
      "desc": "Drop in to get a glimpse of the natural beauty and warmth of Assam at our cosy and dreamy Cafe Bagan, a name that modestly hints at the widely famed signature of the Northeastern state— it’s lush tea gardens. Splendid outdoor views and luscious treats, offered in a neat and welcoming setting, With their tropical gardens, natural stones and wood combined with modern international materials, this upscale destination will bring you the serene feeling once you walk in.",
      "info": "open your heart and mind and get your happy hormones flowing!",
      "email": "fnb@thegreenwoodhotels.com",
      "phone": "+91 88110 72203",
      "timings": "07:00 - 23:00",
      "insta": "@bagan.cafe",
      "foodmenu": "#",
      "drinksmenu": "#",
      "photos": [
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/07/gwh-tezpur-bagan1.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/07/gwh-tezpur-bagan2.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-bagan6.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-bagan5.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-bagan3.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-bagan2.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/07/gwh-tezpur-bagan5.jpg",
      ],
    },

    "gwt-fnb-mynah": {
      "name": "Mynah",
      "logo": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/Logo-Orange@2x.png",
      "desc": "Settle in for a pleasant and joyful time at our bar, Mynah’s, a name inspired by a bird local to Assam, known for its vibrant colour, melodic sound and its omnipresence across our properties. A stylish and inviting space, embodying the freedom of our feathered friend, is set perfectly to lift your spirits up with sumptuous fares, tantalising cocktails, and lively music tracks.",
      "info": "A space brought to you, to bring people together!",
      "email": "fnb@thegreenwoodhotels.com",
      "phone": "+91 88110 72203",
      "timings": "12:00 - 00:00",
      "insta": "mynahs.bar",
      "foodmenu": "#",
      "drinksmenu": "#",
      "photos": [
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/07/gwh-tezpur-mynah2.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-mynah3.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-mynah1.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-mynah2.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/07/gwh-tezpur-mynah1.jpg",
      ],
    },

    "gwt-fnb-aroma": {
      "name": "Aroma",
      "logo": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/aroma-blur.png",
      "desc": "Aroma offers a lip-smacking spread of global cuisine, special menus on select days, and a magnificent view through its large windows . A one-of-a-kind culinary experience at Aroma, a warmly familial multi-cuisine restaurant, where the whiff of varied flavours tantalises your senses and draws you in for a delicious experience. A splendidly designed indoor space, awaits your presence.",
      "info": "The flavours in our food unfolds with each bite!",
      "email": "fnb@thegreenwoodhotels.com",
      "phone": "+91 88110 72203",
      "timings": "07:00 - 23:00",
      "insta": "aroma.moderndining",
      "foodmenu": "#",
      "drinksmenu": "#",
      "photos": [
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/07/gwh-tezpur-aroma4.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/07/gwh-tezpur-aroma3.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/07/gwh-tezpur-aroma1.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-aroma3.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-aroma2.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-aroma1.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-aroma6.jpg",
      ],
    },

    "gwg-fnb-bagan": {
      "name": "Bagan",
      "logo": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/07/Asset-2_1@2x.png",
      "desc": "<b>Our Food</b><br>With an entirely unique approach that is progressive and creative yet innovative, our food focuses on reimagining European & Meditteranian using seasonal ingredients and showcasing them in a contemporary way. Our cuisine is best described as the blend of relaxation with taste of modern gastronomy.<br><br><b>Our Drinks</b><br>A great place to chill out at The Bagan, has a unique selection of reimagined classic hot beverages with firm Indian roots. The mocktail program pays tribute to the untold stories of Assam and each edition of the Bagan menu takes on a unique design to bring the story to life.",
      "info": "open your heart and mind and get your happy hormones flowing!",
      "email": "fnb.gwg@thegreenwoodhotels.com",
      "phone": "+91 70990 21283",
      "timings": "09:00 - 3:00am",
      "insta": "bagan.cafe",
      "foodmenu": "#",
      "drinksmenu": "#",
      "photos": [
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/11/gwg-restaurant-bagan.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-restaurants1.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-restaurants3.jpg",
      ],
    },

    "gwg-fnb-kiya": {
      "name": "Kiya",
      "logo": "/assets/images/gwg/kiya.jpg",
      "desc": "Radically modern and truly dramatic, the Kiya Bar, located next to the restaurant Jholoe, is a visually spectacular space with intricately faceted, polished, teak paneled surfaces embracing a forty-foot, cathedralesque, vaulted interior space. The music is au point and current, and the attentive barstaff serves up a fantastic array of classic and unique cocktails. The food at the bar is a selection of the exhaustive Sushi, finger foods with the influence of various chilis of Assam, Meghalaya and Nagaland and an elegant tapas bar.",
      "info": "A space brought to you, to bring people together!",
      "email": "fnb.gwg@thegreenwoodhotels.com",
      "phone": "+91 70990 21283",
      "timings": "12:00 - 00:00",
      "insta": "jholoekiya",
      "foodmenu": "#",
      "drinksmenu": "#",
      "photos": [
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-restaurants7.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-restaurants8.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-restaurants18.jpg",
      ],
    },

    "gwg-fnb-jholoe": {
      "name": "Jholoe",
      "logo": "/assets/images/gwg/jholoe.jpg",
      "desc": "Jholoe is the tale of homecoming. It’s the story of all Indian soul & its world travels through its creations. <br><br> It brings back the experiences, adventures, & journey through many a gastronomic destination to share the stories over a meal. <br><br> It tells you that however wide and far it has traversed, however unique and bizarre, wondrous and magical its epicurean journey has been – India has never left the heart, soul, & being.<br><br> Today it has brought back all those encounters to create a fare that touches every corner of the world, but remains essentially Indian in essence – a reflection of its own being.",
      "info": "Global cuisine under Indian spell",
      "email": "fnb.gwg@thegreenwoodhotels.com",
      "phone": "+91 70990 21283",
      "timings": "07:00 - 23:00",
      "insta": "jholoekiya",
      "foodmenu": "#",
      "drinksmenu": "#",
      "photos": [
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-restaurants5.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-restaurants4.jpg",
        "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-restaurants6.jpg",
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
        <RoomCard key={page} photos={fnb_data[page]["photos"]} />

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 2, mb: 1 }}>
          <Box component="img" sx={{  maxHeight: 100, maxWidth:"90%", objectFit: "contain" }} src={fnb_data[page]["logo"]} />

        </Box>

        <Typography sx={{
          textAlign: 'center', fontSize: 25, letterSpacing: 2,
          fontFamily: "Freight Big Bold", mt: 1, textTransform: "capitalize",
          color: "#222", fontWeight: 600,
        }}>
          {fnb_data[page]["info"]}</Typography>

        <Typography sx={{ fontSize: 16, textAlign: 'justify', fontFamily: "Freight Big Light", letterSpacing: 1.7, color: "#222" }} 
        component="div" dangerouslySetInnerHTML={{ __html:  fnb_data[page]["desc"]}}>          
          </Typography>

        <Grid container spacing={2}>
          <Grid item xs={6} sm={6} md={6}>
            <Typography sx={{ fontSize: 19, textAlign: 'justify', fontFamily: "Freight Big Light", letterSpacing: 1.7, color: "#e10796c", mb: -1, mt: 2 }}>Daily Open</Typography>
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
        <Typography sx={{ fontSize: 19, textAlign: 'center', fontFamily: "Freight Big Light", letterSpacing: 1.7, color: "#e10796c", mb: -2 }}>{fnb_data[page]["email"]}</Typography>
        <Typography sx={{ fontSize: 19, textAlign: 'center', fontFamily: "Freight Big Light", letterSpacing: 1.7, color: "#e10796c", mb: -2 }}>{fnb_data[page]["phone"]}</Typography>
        <Typography sx={{ fontSize: 19, textAlign: 'center', fontFamily: "Freight Big Light", letterSpacing: 1.7, color: "#e10796c" }}>Follow us on instagram @{fnb_data[page]["insta"]}</Typography>
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