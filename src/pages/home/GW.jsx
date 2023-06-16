import { Box, Container, Typography } from '@mui/material'
import './GW.css'
import InfiniteSlider from '../../components/Slider2/slider2';
import Facility from '../../components/facility';


const GW = () => {

    const info = {
        "gwfamily": {
          "title": "The Greenwood Family",
          "bg": "/assets/images/greenwood-family1.jpg",
          "text": "We are a family that stands behind our family and the people that make up the soul of our brand. Any contribution they make takes us a step towards serving our guests better. We strive to give them a sense of belonging and motivate them persistently to keep growing with us on our journey together.",
          "link": "/gw-family"
        },
    
        "discoverassam": {
          "title": "Discover Assam",
          "bg": "https://www.thegreenwoodhotels.com/wp-content/uploads/2023/01/rhino.jpg",
          "text": "Come get a glimpse of a land that’s strongly entrenched in its glorious history, diverse traditions and plentiful adventures",
          "link": "/discover-assam"
        },
    
        
    
        "gwproperty": [
          {
            "title": 'The Greenwood Resort, Guwahati',
            "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero4.jpg',
            "description": "The Greenwood Resort perfectly marries the splendour of a rich, modern-day resort...",
            "link": "/gwr",
          },
          {
            "title": 'The Greenwood, Tezpur',
            "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwht-oranglawn8.jpg',
            "description": "Standing as one of the most prominent luxury escapes in the town of Tezpur...",
            "link": "/gwt",
          },
          {
            "title": "The Greenwood, Guwahati",
            "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/11/Facade-1-of-9.jpg',
            "description": "Greenwood's newest property in Beltola, Guwahati has set a new bar... an urban oasis to nurture unparalleled leisure",
            "link": "/gwg",
          },
          // add more slides as needed
        ],
    
        "gwexp": [
          {
            "title": 'The Stay',
            "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-exec-suite9-1.jpg',
            "description": "World-class hospitality and luxurious ensuite amenities create a charming haven mirroring the warmth of your home away from home.",
            "link": "/stay",
          },
          {
            "title": "Dining and Bar",
            "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/gwr-mynah8.jpg',
            "description": "Treat yourself to global culinary creations, refined cocktail concoctions, and groovy music at our chain of cafes, restaurants and bar spaces.",
            "link": "/fnb",
          },
          {
            "title": "Events and Bookings",
            "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/05/gw-events.jpg',
            "description": "Choose from an unparalleled selection of banquet halls, lush lawns and conferencing facilities across all of The Greenwood properties.",
            "link": "/event-bookings",
          },
          {
            "title": "Spa and Wellness",
            "image": 'https://www.thegreenwoodhotels.com/wp-content/uploads/2022/05/Kayan-bg1-01-768x764.jpg',
            "description": "Seasoned and trained experts, cosy and soothing settings and state-of-the-art amenities come together to pamper you during your time at The Greenwood Hotels & Resorts.",
            "link": "/spa-wellness",
          },
      
        ]
    
      }


    return (

        <Box sx={{ display: 'flex', mb: 10 }}>
            <Container maxWidth='md'>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                    <Box sx={{ mt: -10 }}>
                        <img className='about-image' src='/assets/images/gw1.jpg' width="100%" />
                    </Box>
                    <Box sx={{}}>
                        <img className='about-image' src='https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/Fade-Final-Sketch-back2.png' width="60%" />
                    </Box>

                    <Typography variant='h5' sx={{ fontWeight: 'bold', fontFamily: 'Savoy Regular' }}>ABOUT THE GREENWOOD</Typography>

                    <Typography sx={{ fontWeight: 'bold', mt: 2, fontSize: 12 }} >সেউজৰ পদচিহ্ন গ্ৰীণউডলৈ স্বাগতম  | </Typography>


                    <Typography variant='body1' sx={{ mt: 1, fontFamily: "Savoy Italic", fontSize: 12 }}>Welcome to The Greenwood, the footprint of greenery. </Typography>

                    <Typography variant='body1' sx={{ mt: 4 }}>The Greenwood Hotels and Resorts, a boutique hospitality brand that echoes the traits of an evergreen forest, humbly opens the gateway to the largely unexplored lands of the Seven Sisters of Northeast India, where natural wonders and vibrant traditions abound. Step in to experience the grandeur of this corner of the country in a setting that consciously blends luxury with nature.</Typography>

                    <Typography sx={{ m: 4, fontFamily: 'An Either Lifetime', fontSize: '25px' }}> Serenity and Calmness</Typography>

                    <Typography sx={{ fontFamily: "Savoy Italic" }}> Amongst the mountains and lanes</Typography>

                    <Facility contnt={info["gwfamily"]} key="gwfamily" />

                    <InfiniteSlider data={info["gwproperty"]} title="The Greenwood Properties" key="gwproperty" />  
                    
                    <Box sx={{mt: 10}}></Box>

                    <InfiniteSlider data={info["gwexp"]} title="The Greenwood Experience" key="gwexp"/>   

                    <Facility contnt={info["discoverassam"]} key="discoverassam" />                  


                </Box>
            </Container>
        </Box>
    )
}

export default GW