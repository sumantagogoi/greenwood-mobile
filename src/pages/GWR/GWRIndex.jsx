import { Box, Container, Typography } from '@mui/material';
import '../home/GW.css';
import InfiniteSlider from '../../components/Slider2/slider2';
import Facility from '../../components/facility';


const GW = () => {

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
      "title":"The Stay",
      "bg": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/05/GWROOMS_050-1.jpg",
      "text": "Soak in the comfort and opulence of our eclectic mix of luxurious rooms and suites at The Greenwood, all individually designed to tickle the fancy of anyone who wishes for homely hospitality, splendid ensuite amenities, and alluring outdoor views.",
      "link": "/gwr-stay"
    },

    "events": {
      "title":"Events and Meetings",
      "bg": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/05/1-30edit.jpg",
      "text": "We offer a wide selection of spaces from which you can choose what suits you best, as per your preferences, and the events that you wish to host. Our well-equipped banquet halls have the capacity to accommodate 50 to 500 guests at a time. Our open, wide and green lawns are ideal for a gathering of 400 to 3000 people.",
      "link": "/gwr-event-bookings"
    },

    "spa": {
      "title":"The Best Spa Experience",
      "bg": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/spa3.jpg",
      "text": "Revitalize your senses at The Greenwood",
      "link": "/gwr-spa-wellness"
    },

    "dine": [
      {
        "title": 'AROMA: Modern Dining',
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/05/GWMYNAH_12.jpg',
        "description": 'A one-of-a-kind culinary experience at Aroma, a warmly familial multi-cuisine restaurant...',
        "link":"/gwr-fnb-aroma",
      },
      {
        "title": 'BAGAN: Poolside Cafe',
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/bagan-2x.jpg',
        "description": 'Drop in to get a glimpse of the natural beauty and warmth of Assam at our cosy and dreamy Cafe Bagan... ',
        "link":"/gwr-fnb-bagan",
      },
      {
        "title": "MYNAH'S: Bar & Bistro",
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/05/GWMYNAH_04.jpg',
        "description": 'Settle in for a pleasant and joyful time at our bar, Mynah’s, a name inspired by a bird local to Assam...',
        "link":"/gwr-fnb-mynah",
      },      
      // add more slides as needed
    ],

    "acti": [
      {
        "title": 'The Greenwood Poolside',
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/05/DSC8499-Edit.jpg',
        "description": 'For relaxing or refreshing our swimming pool is the ideal place to unwind, just beside the cosy Bagan cafe. Enjoy it in solitude or with friends and family, the pool area is our little sanctuary.',
        "link":"",
      },
      {
        "title": "Bah: The Library",
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/05/bah-gwr-hom1.jpg',
        "description": 'Unleash the bibliophile in you at our well stocked library, featuring an enormous collection of books of all genres to keep you engrossed during your stay with us.',
        "link":"",
      },
      {
        "title": "Greenwood Play Area",
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/05/kids.jpg',
        "description": "Well-stocked with toys and games of many kinds and new ways to learn, our kid’s play area makes for the perfect space for the little ones to come and enjoy their time under supervision..",
        "link":"",
      },
      {
        "title": "The Greenhouse",
        "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/05/GW-Farm5.jpg',
        "description": "We believe in the concept of farm to table dining, allowing our guests to experience exactly how the finest produce is brought to their table, creating mouth-watering dishes.",
        "link":"",
      },
    ]
    
  }

  return (
    <Box sx={{}}>
      {/* <Box sx={{ display: 'flex', flexDirection: 'column', height: '50vh' }}>
        <ImageSlider images={images} />

      </Box> */}

      <Box sx={{ display: 'flex', mb: 10 }}>
        <Container maxWidth='md'>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <Box sx={{}}>
              <img className='about-image' src='https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/Reception3.png' width="90%" />
            </Box>

            <Typography variant='h5' sx={{ fontWeight: 'bold', fontFamily: 'Savoy Regular' }}>ABOUT <br></br>THE GREENWOOD RESORT</Typography>


            <Typography variant='body1' sx={{ mt: 2 }}>

              Propped against the lush hills of Guwahati, Assam—The Gateway to Northeast India—The Greenwood Resort welcomes you to a luxurious stay just a stone’s
              throw from the busy cityscape. Located down the hill in Khanapara, just a few meters off National Highway 37, The Greenwood perfectly marries the splendour
              of a rich, modern-day resort with the serenity of a natural retreat.
              A pathway flanked by palms, teaks, and other trees ushers you into an authentic Assamese experience that will stay with you forever. On entering the space,
              you get a close peek into the northeastern state’s cultural and geographical diversity and richness that have historically and rightfully set a distinct mark on the world

            </Typography>

            <Typography sx={{ m: 4, fontFamily: 'An Either Lifetime', fontSize: '20px' }}> Gateway to The North-East</Typography>

            <Facility  contnt = {info["stay"]} key="gwrstay" />

            <InfiniteSlider data = {info["dine"]} title="Dining & Bar" key="gwrdine"  />

            <Facility  contnt = {info["events"]} key="events" />

            <Facility  contnt = {info["spa"]} key="spa" />

            <InfiniteSlider data = {info["acti"]} title="Discover Activities" key="gwracti"  />            
        
          </Box>
        </Container>
      </Box>

    </Box>

  )
}

export default GW