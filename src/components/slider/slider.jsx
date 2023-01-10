import React from 'react';
import Slider from 'react-slick';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            
            {
            images.map((image, index) => {
                    return (
                        <img key={index} src={image} alt={`Image ${index + 1}`} width="100%" />
                    );
                })}
        </Slider>
    );
}

export default ImageSlider;

