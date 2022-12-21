import { Box, Container } from '@mui/material'
import React from 'react'
import About from '../../components/about/About'
import CategoryTabs from '../../components/CatTabs/CategoryTabs'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import HomeFamily from '../../components/HomeFamily/HomeFamily'
import Properties from '../../components/properties/Properties'

const Home = () => {

  return (
  <Box sx={{display:'flex', flexDirection:'column', height:'100vh'}}>
        <Header/>
        <Footer/>
        <Box sx={{display:'flex', flexDirection:'column', height:'100%', overflowY:'scroll'}}>
            <Container maxWidth='md'>
                   <About/> 
                   <HomeFamily/>
                   <Properties/>
            </Container>
        </Box>
        <Box>
        <CategoryTabs/>
            
        </Box>


  </Box>
  )
}

export default Home