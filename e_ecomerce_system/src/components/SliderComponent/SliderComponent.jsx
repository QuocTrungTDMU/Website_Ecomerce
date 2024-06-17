import React from 'react';
import { Image } from 'antd';
import { WrapperSliderStyle } from './style';

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
        <WrapperSliderStyle {...settings}>
            {arrImages.map((image, index) => (
                <Image key={index} src={image} alt="slider" preview={false} width="100%" height="274px" />
            ))}
        </WrapperSliderStyle>
    );
};

export default SliderComponent;
