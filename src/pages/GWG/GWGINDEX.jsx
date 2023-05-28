import { Box, Container, Typography } from '@mui/material';
import '../home/GW.css';
import InfiniteSlider from '../../components/Slider2/slider2';
import Facility from '../../components/facility';



const GWGIndex = () => {
  const images = [
    "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero1.jpg",
    "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero2.jpg",
    "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero3.jpg",
    "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero4.jpg",
    "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero5.jpg",
    "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero6.jpg",
  ]

  const info = {
    "stay": {
      "title": "The Stay",
      "bg": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/11/gwg-luxury-rooms8.jpg",
      "text": "The hotel has 48 well-equipped boutique rooms with state-of-the-art facilities that redefine chic living. Guwahati’s idyllic setting and climate is perfect for you to luxuriate in the hotel’s plush ambience, contemporary architecture, and thoughtful service.",
      "link": "/gwg-stay"
    },

    "events": {
      "title": "Events and Meetings",
      "bg": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-render-10.jpg",
      "text": "Our dedicated team creates everlasting moments with perfectly curated events, conjuring magical experiences that reflect your personal style as well as your wildest dreams. Choose a grand, classic feel for your event, celebration or meeting with Xorai, our indoor ballroom that hosts upto 350 guests, and converts deftly into two smaller ballrooms for more intimate celebrations. It gives a mesmerizing backdrop for once-in-a-lifetime experiences that are destined to be the talk of the year.",
      "link": "/gwg-event-bookings"
    },

    "spa": {
      "title": "The Best Spa Experience",
      "bg": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/spa3.jpg",
      "text": "Revitalize your senses at The Greenwood",
      "link": "/gwg-spa-wellness"
    },

    "dine": [
      {
        "title": 'Jholoe: Experiential Dining',
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-restaurants5.jpg',
        "description": "Bringing to light the balanced duality of the contrary forces of yin and yang, Jholoe...",
        "link": "/gwg-fnb-aroma",
      },
     
      {
        "title": "Kiya: Jazz Bar & Karaoke",
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-restaurants18.jpg',
        "description": 'Kiya channelises a light pastel vibe that is playfully chic...',
        "link": "/gwg-fnb-mynah",
      },

      {
        "title": 'BAGAN: Patio Cafe',
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/11/gwg-restaurant-bagan.jpg',
        "description": 'Our 24x7 open-air cafe is an indulgent refuge for gourmets from morning to evening with unfet... ',
        "link": "/gwg-fnb-bagan",
      },

      {
        "title": 'Sakahi: Terrace Lounge',
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwg-sakahit7.jpg',
        "description": 'Coming Soon ',
        "link": "#",
      },
      // add more slides as needed
    ],

    "acti": [
    
      {
        "title": "Swimming Pool",
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/11/gwg-Swimming-PoolOthers31.jpg',
        "description": '',
        "link": "",
      },
      {
        "title": 'Gym',
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/11/gwg-Gym11.jpg',
        "description": '',
        "link": "",
      },
      {
        "title": "Yoga",
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/11/gwg-Yoga37.jpg',
        "description": "",
        "link": "",
      },

    ]

  }

  return (


    <Box sx={{ display: 'flex', mb: 10 }}>
      <Container maxWidth='md'>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <Box sx={{}}>
            <img className='about-image' src='/assets/images/gwg/gwg.jpg' width="90%" />
          </Box>

          <Typography variant='h6' sx={{ fontWeight: 'bold', fontFamily: 'Savoy Regular', mt: 2 }}>ABOUT <br></br>THE GREENWOOD, GUWAHATI </Typography>


          <Typography variant='body1' sx={{ mt: 2 }}>


            Framed by the alpine
            mountains of Meghalaya on one side and the charming city of Guwahati on the other,
            lies the newest luxury property of Greenwood Hotels and Resorts: an urban oasis to nurture unparalleled leisure.
            Experience this burgeoning city through a modern lens in the most luxurious accommodations this city can offer.

            <br></br>  <br></br>
            Top-rung facilities, elegant accommodations, impeccable
            dining and around-the-clock professional management awaits you at this home away from home.

          </Typography>

          <Facility contnt={info["stay"]} key="gwrstay" />

          <InfiniteSlider data={info["dine"]} title="Cullinary" key="gwrdine" />

          <Facility contnt={info["events"]} key="events" />

          <Facility contnt={info["spa"]} key="spa" />

          <InfiniteSlider data={info["acti"]} title="Discover Activities" key="gwracti" />


        </Box>
      </Container>
    </Box >

  )
}

export default GWGIndex