import { Box, Container, Tab, Tabs } from '@mui/material'
import React from 'react'
import {useState} from 'react'
import {FcHome} from 'react-icons/fc'
import {MdFastfood} from 'react-icons/md'
import {GiPartyPopper, GiSaloon} from 'react-icons/gi'
import {BiBed} from 'react-icons/bi'



const CategoryTabsData = [
    {id:1, name:'STAY', icon:<BiBed size={27}/>,},
    {id:2, name:'DINNING & BAR', icon:<MdFastfood size={27}/>},
    {id:3, name:'EVENTS AND BOOKINGS', icon:<GiPartyPopper size={27}/>},  
    {id:4, name:'WELLNESS & SPA', icon:<GiSaloon size={27} /> },
]

const CategoryTabs = () => {

    const [value, setValue] = useState(0)

    const handleChange = (event, newValue)=>{
        setValue(newValue)
    }

  return (
        <Container maxWidth='md'>
            <Box sx={{display:'flex', flexGrow:1, mt:2, mb:2, justifyContent:'center'}}>
                <Tabs value={value} onChange={handleChange} variant='scrollable' allowScrollButtonsMobile >
                    {CategoryTabsData.map((item)=>{
                        return (
                            <Tab key={item.id} label={item.name} icon={item.icon}></Tab>
                        )
                    })}
                </Tabs>
            </Box>
        </Container>
  )
}

export default CategoryTabs