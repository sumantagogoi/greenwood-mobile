import { Box, Container, Tab, Tabs } from '@mui/material'
import React from 'react'

import Header from '../../components/header/Header'
import MainSection from '../../pages/MainSection'
import CategoryTabs from '../../components/CatTabs/CategoryTabs';
import LocationTab from '../../components/CatTabs/LocationTab';


const Home = ({page}) => {

  return (
  <Box sx={{display:'flex', flexDirection:'column', height:'100vh'}}>
        <Header/>
        <LocationTab page={page} />
        <CategoryTabs page={page} />
        <MainSection page={page} />        
  </Box>
  )
}

export default Home