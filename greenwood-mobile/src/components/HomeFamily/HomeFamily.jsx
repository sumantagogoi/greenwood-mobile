import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HomeFamilyImage from '../../assets/images/greenwood-family1.png'
import './HomeFamily.css'

const HomeFamily = () => {
  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative', mt:8}}>
        
        <Box>
            <img className='family-image' src={HomeFamilyImage}/>
        </Box>
        <div className='img-overlay'></div>
        <Box className='image-text'>
            <Typography sx={{fontSize:25, textAlign:'center'}}> " The Greenwoord Family</Typography>
            <Typography sx={{fontSize:10, textAlign:'center',mx:2}} >We are a family that stands behind our family and the people that make up the soul of our brand. Any contribution they make takes us a step towards serving our guests better. We strive to give them a sense of belonging and motivate them persistently to keep growing with us on our journey together.
            </Typography>
            <Button variant='outlined' sx={{color:'white', borderColor:'white', mt:2}}>View More</Button>
        </Box>

    </Box>
  )
}

export default HomeFamily