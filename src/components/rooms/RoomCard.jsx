import { Box, Button, MobileStepper } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'

import { useTheme } from '@mui/material/styles';

import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import './RoomCard.css'

const RoomCard = ({photos}) => {

    

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

    const maxSteps = photos?.length;

  return (
        <Box sx={{flexGrow:1, position:'relative'}} className='carousal'>
            <SwipeableViews
            axis={'x'}
            index={activeStep}
            onChangeIndex={handleStateChange}
            enableMouseEvents
            >

                {photos?.map((item,index)=>{
                    return (
                        <div key={index}>
                        <Box component='img'
                            src={item}
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

export default RoomCard