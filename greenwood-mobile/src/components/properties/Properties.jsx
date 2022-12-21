import { Box, Typography } from '@mui/material'
import React from 'react'
import PropertiesCard from './PropertiesCard'


import GhyHotel from '../../assets/images/ghy-hotel.jpg'
import GhyResort from '../../assets/images/ghy-resort.png'
import TezpurHotel from '../../assets/images/tezput-hotel.jpg'



const PropertiesList = [
    {id:1, name:'The Greenhood Hotel', location:'Guwahati',  img:  GhyHotel  },
    {id:2, name:'The Greenhood Resort', location:'Guwahati', img:  GhyResort  },
    {id:3, name:'The Greenhood Hotel', location:'Tezpur',    img:  TezpurHotel  },
]

const Properties = () => {
  return (
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', mt:7, gap:2}}>
            <Typography variant='h5' sx={{fontWeight:'bold'}}>Greenwood Properties</Typography>
            <Typography variant='body1' sx={{mx:2, textAlign:'center'}}>Revel in the richness and elegance of The Greenwood properties across all our locations– the perfect destinations for guests to soak in world-class conscious luxury and comfort.</Typography>

            <Box sx={{display:'flex', flexDirection:'column' }}>
                {PropertiesList .map((property)=>{
                    return (
                        <PropertiesCard key={property.id} property={property} />
                    )
                })}
            </Box>
        </Box>
  )
}

export default Properties