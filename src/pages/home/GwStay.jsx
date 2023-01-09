import {Box, Container, Typography} from '@mui/material'
const GwStay = () => {
  return (
    <Box sx={{display:'flex', mt:-10}}>
    <Container>
        <Box sx={{display:'flex',flexDirection:'column',  alignItems:'center', justifyContent:'center', textAlign:'center'}}>
            <Box sx={{ mb: 5 }}>
                <img className='about-image' src='https://thegreenwoodhotels.com/wp-content/uploads/2022/04/greenwood-stay-e1651167473555.png' width="105%"/>
            </Box>

            <Typography variant='h5' sx={{fontWeight:'bold', fontFamily: "Savoy Regular", textTransform:"uppercase" }}>Staying At Greenwood</Typography>

            <Typography sx={{ mt:2, width: "70%"}} >
              World-class hospitality and luxurious ensuite amenities create a charming haven mirroring the warmth of your home away from home.
              </Typography>

                   
        </Box>
    </Container>
</Box>
  )
}

export default GwStay