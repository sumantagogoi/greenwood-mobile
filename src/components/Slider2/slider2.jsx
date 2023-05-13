import { Box, Button, MobileStepper, CardContent, Typography, CardMedia } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import './RoomCard.css'
import { autoPlay } from 'react-swipeable-views-utils';
import { Link } from 'react-router-dom';

const RoomCard = ({ data, title }) => {

    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    const [activeStep, setActiveStep] = useState(0)

    const maxSteps = data?.length;

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
            <Typography variant="h5" sx={{ fontFamily: "Savoy Regular", textTransform: "uppercase" }}>{title}</Typography>
            <AutoPlaySwipeableViews
                axis={'x'}
                index={activeStep}
                onChangeIndex={handleStateChange}
                enableMouseEvents
                animateTransitions={true}
                autoPlay={true}     // set to true to enable autoplay
                interval={5000}     // set the delay between each slide transition (in milliseconds)

            >

                {data?.map((item, index) => {
                    return (
                        <div key={index}  >
                            <Box key={index} sx={{ width: "22vw", display: "flex", justifyContent: "center", alignItems: "center", margin: "auto" }}>
                                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: 250 }}>
                                    <Typography variant="h7" sx={{fontFamily: "Savoy Regular"}}>{item.title}</Typography>
                                    <CardMedia image={item.image} sx={{ width: 250, height: 250, objectFit: "cover" }} />
                                    <Typography variant="body1" sx={{ fontFamily: "Avenir Book", mt: 2, mb: -1 }}>{item.description}</Typography>
                                </CardContent>
                            </Box>
                            {
                                item.link ? (
                                <Link to={item.link}>
                                    <Button variant="contained" sx={{
                                        fontFamily: "Savoy Regular", textTransform: "uppercase",
                                        backgroundColor: 'rgba(0,0,0,0)',
                                        borderRadius: '20px',
                                        color: '#666',
                                        border: '1px solid #666',
                                        zIndex: 15,
                                        mb: 2
                                    }}>
                                        View More
                                    </Button>
                                </Link>
                                ) : (
                                <></>
                                )
                            }
                            
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
                        <Button size='large' onClick={handleNext} sx={{
                            color: '#173632', backgroundColor: 'white', opacity: 2, borderRadius: 10, p: 1, minWidth: 'auto', border: "1px solid grey", mt: -70, ':hover': { backgroundColor: 'white' }
                        }}>
                            <AiOutlineRight />
                        </Button>
                    }
                    backButton={
                        <Button size='large' onClick={handleBack} sx={{
                            color: '#173632', backgroundColor: 'white', opacity: 2, borderRadius: 10, p: 1, minWidth: 'auto', border: "1px solid grey", mt: -70, ':hover': { backgroundColor: 'white' }
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
