import { Box, Container, Typography } from '@mui/material';
import '../home/GW.css';
import ImageSlider from '../../components/slider/slider';



const GW = () => {

  const images = [
    "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero1.jpg",
    "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero2.jpg",
    "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero3.jpg",
    "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero4.jpg",
    "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero5.jpg",
    "https://www.thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero6.jpg",
  ]

  return (
    <Box sx={{ }}>
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

         

          </Box>
        </Container>
      </Box>

    </Box>

  )
}

export default GW