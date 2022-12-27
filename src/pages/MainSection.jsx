import { Box, Container } from '@mui/material'
import React from 'react'
import Nav2 from '../components/Nav2/Nav2'
//import * as GWG from './GWG/GWGIndex'

const PathToComponent = {
  "/": "About"
};


const MainSection = ({ page }) => {
  return (
    <Box>
      <div className='bg1'>
        <h1>{page}</h1>
      </div>
      <Nav2 page={page} />
    </Box>

  );


}

export default MainSection