import { Box, Container, Typography } from '@mui/material'



const GWGIndex = () => {
  const images = [
    "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero1.jpg",
    "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero2.jpg",
    "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero3.jpg",
    "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero4.jpg",
    "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero5.jpg",
    "https://thegreenwoodhotels.com/wp-content/uploads/2022/09/gwr-main-hero6.jpg",
  ]

  return (
    <Box sx={{ mt: 3 }}>
      {/* <Box sx={{ display: 'flex', flexDirection: 'column', height: '50vh' }}>
        <ImageSlider images={images} />

      </Box> */}

      <Box sx={{ display: 'flex', mb: 4 }}>
        <Container maxWidth='md'>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <Box sx={{}}>
              {/* <img className='about-image' src='https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Reception3.png' width="90%" /> */}
            </Box>

            <Typography variant='h5' sx={{ fontWeight: 'bold', fontFamily: 'Savoy Regular' }}>ABOUT THE GREENWOOD, GUWAHATI </Typography>


            <Typography variant='body1' sx={{ mt: 2 }}>


              Framed by the alpine
              mountains of Meghalaya on one side and the charming city of Guwahati on the other,
              lies the newest luxury property of Greenwood Hotels and Resorts: an urban oasis to nurture unparalleled leisure.
              Experience this burgeoning city through a modern lens in the most luxurious accommodations this city can offer.

              <br></br>  <br></br>
              Top-rung facilities, elegant accommodations, impeccable
              dining and around-the-clock professional management awaits you at this home away from home.

            </Typography>





          </Box>
        </Container>
      </Box >

    </Box >

  )
}

export default GWGIndex