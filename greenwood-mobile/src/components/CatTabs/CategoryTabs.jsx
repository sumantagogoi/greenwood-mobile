import { Box, Container, Tab, Tabs } from '@mui/material'
import React from 'react'
import {useState} from 'react'


const CategoryTabsData = [
    {id:1, name:'Greenwood Guwahati'},
    {id:2, name:'Greenwood Tezpur'},
    {id:3, name:'Greenwood Beltola'},  
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
                            <Tab key={item.id} label={item.name}></Tab>
                        )
                    })}
                </Tabs>
            </Box>
        </Container>
  )
}

export default CategoryTabs