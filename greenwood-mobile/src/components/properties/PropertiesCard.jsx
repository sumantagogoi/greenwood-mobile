import { Box, Typography } from '@mui/material'
import React from 'react'

const PropertiesCard = ({property}) => {
  return (
   <Box className='card-wrapper'>
       <Box className='card-img' sx={{width:'100%', height:'230px'}}>
            <img src={property.img} alt={property.name}/>
            <Typography>{property.name}</Typography>
            <Typography>{property.location}</Typography>
       </Box>
   </Box>
  )
}

export default PropertiesCard