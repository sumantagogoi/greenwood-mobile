import { Box, Button, MobileStepper } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'

import { useTheme } from '@mui/material/styles';

import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

const EventsCard = () => {

    

    const [activeStep, setActiveStep] = useState(0)

    const handleNext = ()=>{
        setActiveStep((prevSteps)=>prevSteps + 1)
    }

    const handleBack = ()=>{
        setActiveStep((prevSteps)=> prevSteps - 1)
    }

    const handleStateChange = (step)=>{
        setActiveStep(step)
    }

    const theme = useTheme();
    const RoomImages =[
        {id:1, imgUrl :'https://thegreenwoodhotels.com/wp-content/uploads/elementor/thumbs/gwr-events-majulihall5-pq36r2x1hivclenbxyzjyjgfm8umrtl2mbbqxpp8yo.jpg'},
        {id:2, imgUrl :'https://thegreenwoodhotels.com/wp-content/uploads/elementor/thumbs/gwr-events-majulihall1-pq36qvebyul20iy95vqjelcqv5vp28r7xa3v3i0ecg.jpg'},
        {id:3, imgUrl :'https://thegreenwoodhotels.com/wp-content/uploads/elementor/thumbs/gwr-events-majulihall2-pq36qxa0cinmnqviuwjsjkvo1xmfhmyoljeu21xm00.jpg'},
        {id:4, imgUrl :'https://thegreenwoodhotels.com/wp-content/uploads/elementor/thumbs/gwr-events-majulihall4-pq36r11d3usry6q28y6atjxifh3wcfdly20rz5s1b4.jpg'},
        {id:5, imgUrl :'https://thegreenwoodhotels.com/wp-content/uploads/elementor/thumbs/gwr-events-majulihall3-pq36qz5oq6q7ayssjxd1okel8pd5x1659spt0lutnk.jpg'},
    ]

    const maxSteps = RoomImages?.length;

  return (
        <Box sx={{flexGrow:1, position:'relative'}} className='carousal'>
            <SwipeableViews
            axis={'x'}
            index={activeStep}
            onChangeIndex={handleStateChange}
            enableMouseEvents
            >

                {RoomImages?.map((item)=>{
                    return (
                        <div key={item.id}>
                        <Box component='img'
                            src={item.imgUrl}
                            sx={{height:200, width:'100%', overflow:'hidden', display:'block', borderRadius:3}}
                        />
                    </div>
                    )
                })}       
        </SwipeableViews>
        <Box sx={{width:'100%', position:'absolute', bottom:10}}>
            <MobileStepper
            sx={{background:'transparent'}}
            steps={maxSteps}
            position={'static'}
            activeStep={activeStep}
            nextButton ={
                <Button size='small' onClick={handleNext} disabled={activeStep === maxSteps - 1} sx={{
                    color: '#173632', backgroundColor: 'white',opacity: 2, borderRadius: 10, p: 1, minWidth: 'auto'
                }}>
                    <AiOutlineRight/>
                </Button>
            }
            backButton = {
                    <Button size='small' onClick={handleBack} disabled={activeStep === 0} sx={{
                        color: '#173632', backgroundColor: 'white',opacity: 2, borderRadius: 10,p: 1,minWidth: 'auto' 
                    }}>
                        <AiOutlineLeft/>
                    </Button>
            }
            
            />
        </Box>
        </Box>
  )
}

export default EventsCard