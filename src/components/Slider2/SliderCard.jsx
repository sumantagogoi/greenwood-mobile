import { Box, Button, MobileStepper } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import './RoomCard.css'
import { autoPlay } from 'react-swipeable-views-utils';

const RoomCard = ({ photos }) => {

    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    const [activeStep, setActiveStep] = useState(0)

    const maxSteps = photos?.length;

    const handleNext = () => {
        if (activeStep === maxSteps - 1) {
            setActiveStep(0);
        } else {
            setActiveStep((prevSteps) => prevSteps + 1);
        }
    };

    const handleBack = () => {

        if (activeStep === 0) {
            setActiveStep(maxSteps - 1);
        } else {
            setActiveStep((prevSteps) => prevSteps - 1)
        }
    }

    const handleStateChange = (step) => {
        setActiveStep(step)
    }

    return (
        <Box sx={{ flexGrow: 1, position: 'relative', }} className='carousal'>
            <AutoPlaySwipeableViews
                axis={'x'}
                index={activeStep}
                onChangeIndex={handleStateChange}
                enableMouseEvents
                animateTransitions={true}
                autoPlay={true}     // set to true to enable autoplay
                interval={5000}     // set the delay between each slide transition (in milliseconds)

            >

                {photos?.map((item, index) => {
                    return (
                        <div key={index}  >
                            <Box component='img'
                                src={item}
                                sx={{ height: 250, overflow: 'hidden', display: 'block', borderRadius: 3, margin: "auto", zIndex: -11 }}
                            />
                        </div>
                    )
                })}
            </AutoPlaySwipeableViews>

            <Box sx={{ width: '100%' }}>
                <MobileStepper
                    sx={{ background: 'transparent', zIndex: 99 }}
                    steps={maxSteps}
                    position={'static'}
                    activeStep={activeStep}
                    nextButton={
                        // <Button size='small' onClick={handleNext} disabled={activeStep === maxSteps - 1} sx={{
                        <Button size='small' onClick={handleNext} sx={{
                            color: '#173632', backgroundColor: 'white', opacity: 2, borderRadius: 10, p: 1, minWidth: 'auto', border: "1px solid grey", mt: -10, ':hover': { backgroundColor: 'white' }
                        }}>
                            <AiOutlineRight />
                        </Button>
                    }
                    backButton={
                        <Button size='small' onClick={handleBack} sx={{
                            color: '#173632', backgroundColor: 'white', opacity: 2, borderRadius: 10, p: 1, minWidth: 'auto', border: "1px solid grey", mt: -10, ':hover': { backgroundColor: 'white' }
                        }}>
                            <AiOutlineLeft />
                        </Button>
                    }

                />
            </Box>
        </Box>
    )
}

export default RoomCard
