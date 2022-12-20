import { Box, Container } from '@mui/material'
import React from 'react'
import CategoryTabs from '../../components/CatTabs/CategoryTabs'
import Header from '../../components/header/Header'

const Home = () => {

  return (
  <Box sx={{display:'flex', flexDirection:'column', height:'100vh'}}>
        <Header/>
        <CategoryTabs/>
        <Box sx={{display:'flex', flexDirection:'column', height:'100%', overflowY:'scroll'}}>
            <Container maxWidth='md'>

            </Container>
        </Box>

  </Box>
  )
}

export default Home