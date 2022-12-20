import { Box, Container } from '@mui/material'
import React from 'react'
import About from '../../components/about/About'
import CategoryTabs from '../../components/CatTabs/CategoryTabs'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const Home = () => {

  return (
  <Box sx={{display:'flex', flexDirection:'column', height:'100vh'}}>
        <Header/>
        <CategoryTabs/>
        <Box sx={{display:'flex', flexDirection:'column', height:'100%', overflowY:'scroll'}}>
            <Container maxWidth='md'>
                   <About/> 
            </Container>
        </Box>
        <Box>
            <Footer/>
        </Box>


  </Box>
  )
}

export default Home