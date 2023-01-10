import { Box, Container, Typography } from '@mui/material'
import './GW.css'


const GW = () => {
  return (
    <Box sx={{ mt :-10}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '50vh' }}>
        <div className="video-container">
          <video className="video-bg" autoPlay loop>
            <source src="https://thegreenwoodhotels.com/wp-content/uploads/2022/04/header-video.mp4" type="video/mp4" />

          </video>

          <img src="https://thegreenwoodhotels.com/wp-content/uploads/2022/04/Group-463.png" alt="Overlay Image" className="image-overlay" />
          {/* Other JSX elements here */}
        </div>

      </Box>

      <Box sx={{display:'flex', mb:4}}>
        <Container maxWidth='md'>
            <Box sx={{display:'flex',flexDirection:'column',  alignItems:'center', justifyContent:'center', textAlign:'center'}}>
                <Box sx={{ }}>
                    <img className='about-image' src='https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Fade-Final-Sketch-back2.png' width="60%" />
                </Box>

                <Typography variant='h5' sx={{fontWeight:'bold', fontFamily: 'Savoy Regular'}}>ABOUT THE GREENWOOD</Typography>

                <Typography sx={{fontWeight:'bold', mt:2}} >সেউজৰ পদচিহ্ন গ্ৰীণউডলৈ স্বাগতম  | </Typography>

                <Typography variant='subtitle' sx={{mt:1}}>Assamese: "Seujor Podosihna Greenwood Loi Swagatam."</Typography>

                <Typography variant='body1' sx={{mt:1}}>English: Welcome to The Greenwood, the footprint of greenery. </Typography>

                <Typography variant='body1' sx={{mt:2}}>The Greenwood Hotels and Resorts, a boutique hospitality brand that echoes the traits of an evergreen forest, humbly opens the gateway to the largely unexplored lands of the Seven Sisters of Northeast India, where natural wonders and vibrant traditions abound. Step in to experience the grandeur of this corner of the country in a setting that consciously blends luxury with nature.</Typography>

                <Typography sx={{m:4, fontFamily:'An Either Lifetime', fontSize:'25px'}}> Serenity and Calmness</Typography>
              
                <Typography sx={{}}> Amongst the mountains and lanes</Typography>
                
            </Box>
        </Container>
   </Box>

    </Box>

  )
}

export default GW