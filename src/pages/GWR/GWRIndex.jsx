import { Box, Container, Typography } from '@mui/material';
import '../home/GW.css';
import InfiniteSlider from '../../components/slider/slider';
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

  const faci_info = {
    "stay": {
      "title":"The Stay",
      "bg": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/05/GWROOMS_050-1.jpg",
      "text": "Soak in the comfort and opulence of our eclectic mix of luxurious rooms and suites at The Greenwood, all individually designed to tickle the fancy of anyone who wishes for homely hospitality, splendid ensuite amenities, and alluring outdoor views.",
      "link": "/gwr-stay"
    },

    "dine": {
      "title":"Dining & Bar",
      "bg": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/cullinarybg1.jpg",
      "text": "Combining the finest of traditional Indian cooking with culinary concepts from all over the world, the restaurants & bar at The Greenwood offers distinctive cuisines to choose from. Our Chefs at the Greenwood are trained and equipped with state of art skills and treat you to a great culinary experience. They bring the ingredients and prepare choicest delicacies. Plan a special surprise, or host your family & friends, this is the perfect way to answer both taste and hygiene concerns.",
      "link": "/gwr-fnb"
    },

    "events": {
      "title":"Events and Meetings>",
      "bg": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/05/1-30edit.jpg",
      "text": "We offer a wide selection of spaces from which you can choose what suits you best, as per your preferences, and the events that you wish to host. Our well-equipped banquet halls have the capacity to accommodate 50 to 500 guests at a time. Our open, wide and green lawns are ideal for a gathering of 400 to 3000 people.",
      "link": "/gwr-event-bookings"
    },

    "spa": {
      "title":"Spa",
      "bg": "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/spa3.jpg",
      "text": "Revitalize your senses at The Greenwood",
      "link": "/kayana"
    },

    "dine2": [
      {
        "title": 'Slide 1',
        "image": 'https://source.unsplash.com/random/400x225',
        "description": 'Description for slide 1',
      },
      {
        "title": 'Slide 2',
        "image": 'https://source.unsplash.com/random/400x225',
        "description": 'Description for slide 2',
      },
      {
        "title": 'Slide 3',
        "image": 'https://source.unsplash.com/random/400x225',
        "description": 'Description for slide 3',
      },
      // add more slides as needed
    ],
    
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

            <Facility  contnt = {faci_info["stay"]} key="gwrstay" />

            <Facility  contnt = {faci_info["dine"]} key="dine" />

            <Facility  contnt = {faci_info["events"]} key="events" />

            <Facility  contnt = {faci_info["spa"]} key="spa" />

            {/* <InfiniteSlider data = {faci_info["dine"]} key="gwrdine"  /> */}
        
          </Box>
        </Container>
      </Box>

    </Box>

  )
}

export default GW