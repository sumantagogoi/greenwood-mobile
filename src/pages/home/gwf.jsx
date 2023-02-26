import { Box, Container, Typography } from '@mui/material'
import './GW.css'


const GWFamily = () => {
  return (
    <div className="scrollable">
  
  <Box sx={{display:'flex', mb:10}}>
        <Container maxWidth='md'>
            <Box sx={{display:'flex',flexDirection:'column',  alignItems:'center', justifyContent:'center', textAlign:'center'}}>
                <Box>
                    <img className='about-image' src='https://www.thegreenwoodhotels.com/wp-content/uploads/2022/06/Reception3.png' width="60%" />
                </Box>

                <Typography variant='h5' sx={{fontWeight:'bold', fontFamily:'An Either Lifetime'}}>Welcome To Greenwood</Typography>

                <Typography sx={{ mt:2, fontSize: 15}} > Assam’s most beloved boutique hospitality brands, The Greenwood Hotels & Resorts, takes pride in its long-standing history of untiring commitment towards development and improvement in the realm of growing hospitality.</Typography>


                <Typography  sx={{mt:1, fontSize: 15}}>After being acquired by the Kalita family of Guwahati in 2013, The Greenwood, with its three properties across the state, has achieved incredible milestones in delivering world-class hospitality amidst the lushness of the green settings that popularly define the Seven Sisters of Northeast India.</Typography>

                <Typography  sx={{mt:2, fontSize:15}}>Our vision at The Greenwood is to provide all our guests with a glimpse of the vibrant culture and traditions, as well as the natural hotspots nestled in this corner of the country, thereby making them more accessible to the mainland paradigm. You can trust that our top-of-the-line, well-personalised services will exceed your expectations at all times.</Typography>

                <Typography sx={{mt:2, fontSize:15}}> Exuding an aura that’s as warm and welcoming as your own sweet home, The Greenwood is where a strongly motivated team strives consistently to bring eco-conscious and luxurious hospitality to all our guests. Come and retreat to the greener pastures with a brand that’s growing from strength to strength.</Typography>
              
  
                
            </Box>
        </Container>
   </Box>
      </div>

      )
}

      export default GWFamily