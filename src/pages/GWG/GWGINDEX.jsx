import {Box, Container} from '@mui/material'
import About from '../../components/about/About'
import CategoryTabs from '../../components/CatTabs/CategoryTabs'
import Header from '../../components/header/Header'
import Nav2 from '../../components/Nav2/Nav2'



const GWGINDEX = () => {
  return (
    <Box sx={{display:'flex', flexDirection:'column', height:'100vh'}}>
       <Header/>
       <Nav2/>
        <Box sx={{display:'flex', flexDirection:'column', height:'100%', overflowY:'scroll'}}>
            <Container maxWidth='md'>
                   <About   /> 
            </Container>
        </Box>
        <Box>
       <CategoryTabs/>
            
        </Box>


  </Box>
  )
}

export default GWGINDEX