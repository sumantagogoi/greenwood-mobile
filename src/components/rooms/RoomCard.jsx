import { Box, Button, MobileStepper } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils';

import { useTheme } from '@mui/material/styles';

import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import './RoomCard.css'

const RoomCard = () => {

    

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
        {id:1, imgUrl :'https://thegreenwoodhotels.com/wp-content/uploads/elementor/thumbs/gwr-standard4-e1655583000953-pqif7tvddrbw2lphio0xn0ak2idmt1hjwwfwyvxvz4.jpg'},
        {id:2, imgUrl :'https://thegreenwoodhotels.com/wp-content/uploads/elementor/thumbs/gwr-standard3-e1655582966903-pqif6xwuxe453uzwpa7ma8cvver5jbyogi9enh99uo.jpg'},
        {id:3, imgUrl :'https://thegreenwoodhotels.com/wp-content/uploads/elementor/thumbs/gwr-standard5-ppzhmh9frjjpplktergijf8861ury6wooak7w3pqu8.jpg'},
        {id:4, imgUrl :'https://thegreenwoodhotels.com/wp-content/uploads/elementor/thumbs/gwr-standard2-e1655582749221-pqif19xvqccx4h86sc1kr5tuysoi50gxcgp1ifnpcw.jpg'},
        {id:5, imgUrl :'https://thegreenwoodhotels.com/wp-content/uploads/elementor/thumbs/gwr-standard1-e1655582876953-pqif4lbduawc2yesf9n71tpeeqc4akmu4vjpgkqpeo.jpg'},
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

export default RoomCard