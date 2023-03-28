import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Box, Typography, CardMedia, CardContent } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles1 = makeStyles((theme) => ({

  slideContainer: {


    width: '100%',
    transition: 'transform 0.3s ease-in-out',
  },
  slide: {



    width: '50%',
    minWidth: '30px',
  },
  media: {
    height: 100,
    paddingTop: '60.25%',
  },
}));

const InfiniteSlider = ({ data }) => {
  const classes = useStyles1();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleChangeIndex = (index) => {
    setCurrentSlide(index);
  };

  const slideCount = data.length;

  // duplicate the first and second slide to the end for infinite scrolling
  const slides = data.concat(data.slice(0, 2));

  return (
    <Box>
      <SwipeableViews
        index={currentSlide}
        onChangeIndex={handleChangeIndex}
        slideStyle={{ padding: 0 }}
        slideClassName={classes.slideContainer}
        resistance
        enableMouseEvents
      >
        {slides.map((item, index) => (
          <Box key={index} className={classes.slide}>
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <CardMedia className={classes.media} image={item.image} />
              <Typography variant="body1">{item.description}</Typography>
            </CardContent>
          </Box>
        ))}
      </SwipeableViews>
    </Box>
  );
};

export default InfiniteSlider;