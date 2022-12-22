import { Box, Typography } from '@mui/material'
import React from 'react'
import './Properties.css'

const PropertiesCard = ({property}) => {
  return (
   <Box className='card-wrapper' >
       <Box className='card-img' sx={{width:'100%', }}>
          <Box>
          <img className='property-list-image' src={property.img} alt={property.name}/>
          </Box>

          <Box>
            <Typography>{property.name}</Typography>
            <Typography>{property.location}</Typography>
          </Box>
           
            
       </Box>
   </Box>
  )
}

export default PropertiesCard