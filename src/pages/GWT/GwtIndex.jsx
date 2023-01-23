import { Box, Container, Typography } from '@mui/material';
import '../home/GW.css';
import ImageSlider from '../../components/slider/slider';



const GWTIndex = () => {

  const images = [
    "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero1.jpg",
    "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero2.jpg",
    "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero3.jpg",
    "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero4.jpg",
    "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero5.jpg",
    "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero6.jpg",
  ]

  return (
   
    

      <Box sx={{ display: 'flex', pb: 10 }}>
        <Container maxWidth='md'>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <Box sx={{}}>
              {/* <img className='about-image' src='https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Reception3.png' width="90%" /> */}
            </Box>

            <Typography variant='h5' sx={{ fontWeight: 'bold', fontFamily: 'Savoy Regular' }}>ABOUT <br></br>THE GREENWOOD,<br></br> TEZPUR</Typography>


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

            <Box sx={{ display: "flex", alignItems: "center", flexDirection: 'row', mt: 12 }}>
              <img src="https://thegreenwoodhotels.com/wp-content/uploads/2022/05/gwexp.png" alt="GW" style={{ width: '45px', height: '45px', marginRight: '4px' }} />
              <Typography variant="h7" style={{ fontFamily: 'Savoy Regular', textTransform: 'uppercase', textAlign: "left" }}>
                THE CONTEMPORARY AMBIENCE
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mt: 2, flexDirection: 'row' }} >
              <Typography variant="body1" sx={{ fontFamily: 'Savoy Italic', width: '90%', textAlign: "left" }}>
                Featuring a wide selection of exquisite suites and rooms, along with elegant dining, bar and event spaces,
                the property brings to you the lavishness and rich authenticity deeply entrenched in its remarkable history and distinct culture.
              </Typography>
          </Box>



      </Box>
    </Container>
      </Box >

   

  )
}

export default GWTIndex