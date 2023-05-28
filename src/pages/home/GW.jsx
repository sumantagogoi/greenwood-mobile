import { Box, Container, Typography } from '@mui/material'
import './GW.css'
import InfiniteSlider from '../../components/Slider2/slider2';
import Facility from '../../components/facility';


const GW = () => {

    const info = {
        "stay": {
          "title": "The Greenwood Family",
          "bg": "/assets/images/greenwood-family1.jpg",
          "text": "We are a family that stands behind our family and the people that make up the soul of our brand. Any contribution they make takes us a step towards serving our guests better. We strive to give them a sense of belonging and motivate them persistently to keep growing with us on our journey together.",
          "link": "/gw-family"
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
    
        "gwpropert": [
          {
            "title": 'Greenwood Resort, Guwahati',
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

                    <Facility contnt={info["stay"]} key="gwrstay" />
                   


                </Box>
            </Container>
        </Box>
    )
}

export default GW