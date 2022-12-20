import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './About.css'

const About = () => {
  return (
   <Box sx={{display:'flex', mt:2}}>
        <Container maxWidth='md'>
            <Box sx={{display:'flex',flexDirection:'column',  alignItems:'center', justifyContent:'center', textAlign:'center'}}>
                <Box sx={{ }}>
                    <img className='about-image' src='https://thegreenwoodhotels.com/wp-content/uploads/2022/06/Fade-Final-Sketch-back2.png' />
                </Box>

                <Typography variant='h5' sx={{fontWeight:'bold'}}>ABOUT THE GREENWOOD</Typography>

                <Typography sx={{fontWeight:'bold', mt:2}} >সেউজৰ পদচিহ্ন গ্ৰীণউডলৈ স্বাগতম  | </Typography>

                <Typography variant='subtitle' sx={{mt:1}}>Assameese Senjor Podosihna Greenwood Loi Swagatam.</Typography>

                <Typography variant='body1' sx={{mt:1}}>English Welcome to The Greenwood, the footprint of greenery. </Typography>

                <Typography variant='body1' sx={{mt:2}}>The Greenwood Hotels and Resorts, a boutique hospitality brand that echoes the traits of an evergreen forest, humbly opens the gateway to the largely unexplored lands of the Seven Sisters of Northeast India, where natural wonders and vibrant traditions abound. Step in to experience the grandeur of this corner of the country in a setting that consciously blends luxury with nature.</Typography>

                <Typography sx={{mt:4, fontFamily:'Great Vibes, cursive', fontSize:'40px'}}> Serenity and Calmness</Typography>
              
                <Typography sx={{}}> Amongst the mountains and lanes</Typography>
                
            </Box>
        </Container>
   </Box>
  )
}

export default About