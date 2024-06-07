import React from 'react';
import Slider from 'react-slick';
import { Image } from 'antd';

const SliderComponent = ({ arrImages }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // nhớ là phải bật lên slide mới chạy
        autoplaySpeed: 2000
    };

    return (
        <Slider {...settings}>
            {arrImages.map((image, index) => (
                <Image key={index} src={image} alt="slider" preview={false} width="100%" height="274px" />
            ))}
        </Slider>
    );
};

export default SliderComponent;
