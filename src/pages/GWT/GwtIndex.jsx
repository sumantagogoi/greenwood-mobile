import { Box, Container, Typography } from '@mui/material';
import '../home/GW.css';
import InfiniteSlider from '../../components/Slider2/slider2';
import Facility from '../../components/facility';


const GWTIndex = () => {

  const images = [
    "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-home-hero1.jpg",
    "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-home-hero2.jpg",
    "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-home-hero3.jpg",
    "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-home-hero4.jpg",
    "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-home-hero5.jpg",
    "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-home-hero6.jpg",
  ]

  const info = {
    "stay": {
      "title": "The Stay",
      "bg": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/Group-1336.png",
      "text": "Pick from our selection of well-appointed rooms under the categories of Executive, Premium and Deluxe Rooms, all of which distinctly redefine comfort and luxury. Touching the eye-pleasing surroundings of our property and featuring convenient amenities, each of our rooms emanates unmistakable richness in all aspects to embed the stay on the mind forever.",
      "link": "/gwt-stay"
    },

    "events": {
      "title": "Events and Meetings",
      "bg": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/07/gwh-tezpur4.jpg",
      "text": "We offer a range of events and meetings packages. We can also tailor-make packages to match your preferences and special requests.",
      "link": "/gwt-event-bookings"
    },

    "spa": {
      "title": "The Best Spa Experience",
      "bg": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/spa3.jpg",
      "text": "Revitalize your senses at The Greenwood",
      "link": "/gwt-spa-wellness"
    },

    "dine": [
      {
        "title": 'AROMA: Modern Dining',
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/07/Tezpur-Flavours-Selection.jpg',
        "description": "Aroma offers a lip-smacking spread of global cuisine, special menus on select days...",
        "link": "/gwt-fnb-aroma",
      },
      {
        "title": 'BAGAN: Garden Cafe',
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/07/gwh-tezpur-bagan.jpg',
        "description": 'Drop in to get a glimpse of the natural beauty and warmth of Assam at our cosy and dreamy... ',
        "link": "/gwt-fnb-bagan",
      },
      {
        "title": "MYNAH'S by Arrack",
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/07/Tezpur-Mynah-Selection1.jpg',
        "description": 'Settle in for a pleasant and joyful time at our bar, Mynah’s, a name inspired by a bird local to Assam...',
        "link": "/gwt-fnb-mynah",
      },
      // add more slides as needed
    ],

    "acti": [
      {
        "title": 'Gymnasium',
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/gwh-tezpur-6.jpg',
        "description": 'Whether you are looking for an intense workout session, basic warm-up or just an energy boost, our fitness centre comes well-equipped to meet all your healthy lifestyle.',
        "link": "",
      },
      {
        "title": "Safari Tour",
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/Group-1339.png',
        "description": 'Enjoy a one day safari trip to the UNESCO World Heritage Site – The Kaziranga National Park, home of the one-horned rhino.',
        "link": "",
      },
      {
        "title": "Tea Bagan Tour",
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/07/gwht-teagardens-tezpur.jpg',
        "description": "Surrounded around 73 tea gardens and that includes the biggest tea garden in the world. Enjoy the essence of culture and the flavour of tea while you are in Tezpur.",
        "link": "",
      },
  
    ]

  }

  return (

    <Box sx={{ display: 'flex', pb: 10 }}>
      <Container maxWidth='md'>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <Box sx={{}}>
            <img className='about-image' src='/assets/images/gwt/gwht2.jpg' width="90%" />
          </Box>

          <Typography variant='h6' sx={{ fontWeight: 'bold', fontFamily: 'Savoy Regular' }}>ABOUT <br></br>THE GREENWOOD, TEZPUR</Typography>


          <Typography variant='body1' sx={{ mt: 2 }}>


            Standing as one of the most prominent luxury escapes in the town of Tezpur, the ‘Cultural Capital’ of Assam,
            The Greenwood, Tezpur entices anyone who wishes to absorb naturesque, vibrant and fun-filled moments,
            just close to the bustling urban landscape of the historic town.
            <br></br>
            Enjoying close proximity to renowned World Heritage Sites and nature reserves less than 50 kms, such as
            Kaziranga National Park and Nameri National Park, as well as some of the most spectacular cultural and historical hotspots in the state.
            <br></br>
            This property is a quintessential replica of a retreat surrounded by beautiful hills, deep valleys and
            lush greenery adding an ancient touch to take you back to an era you would have only read about.
            <br></br>
            You simply need to visit Tezpur in Assam!

          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", flexDirection: 'row', mt: 6 }}>
            <img src="https://www.thegreenwoodhotels.com/wp-content/uploads/2022/05/gwexp.png" alt="GW" style={{ width: '45px', height: '45px', marginRight: '4px' }} />
            <Typography variant="h7" style={{ fontFamily: 'Savoy Regular', textTransform: 'uppercase', textAlign: "left" }}>
              THE CONTEMPORARY AMBIENCE
            </Typography>
          </Box>
          <Box sx={{ display: "flex", mt: 2, mb:  5, flexDirection: 'row' }} >
            <Typography variant="body1" sx={{ fontFamily: 'Savoy Italic', width: '90%', textAlign: "left" }}>
              Featuring a wide selection of exquisite suites and rooms, along with elegant dining, bar and event spaces,
              the property brings to you the lavishness and rich authenticity deeply entrenched in its remarkable history and distinct culture.
            </Typography>
          </Box>

          <Facility contnt={info["stay"]} key="gwrstay" />

          <InfiniteSlider data={info["dine"]} title="Dining & Bar" key="gwrdine" />

          <Facility contnt={info["events"]} key="events" />

          <Facility contnt={info["spa"]} key="spa" />

          <InfiniteSlider data={info["acti"]} title="Discover Activities" key="gwracti" />



        </Box>
      </Container>
    </Box >



  )
}

export default GWTIndex