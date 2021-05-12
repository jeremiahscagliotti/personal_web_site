import React, {useState} from 'react';
import { SliderData } from './imageData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

import './index.css';

const ImageSlider = (props, slides) => {
    

    return (
        <div>

        </div>
    ) 
};

export default ImageSlider; 

    // const [current, setCurrent] = useState(0);
    // const length = slides.length;

    // const nextSlide = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1)
    // };

    // const prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1)
    // };

    // if (!Array.isArray(slides) || slides.length <= 0) {
    //     return null;
    // }

        // <div className="slider">
        //     <FaArrowAltCircleLeft className='lt_arrow' onClick='prevSlide'/>
        //     <FaArrowAltCircleRight className='rt_arrow'  onClick='nextSlide'/>
        //     {SliderData.map((slide, index) => {
        //         return (
        //             <div className={index === current ? 'slide active' : 'slide'}
        //              key={index}>
        //                  {index === current && (
        //                  <img src={slide.image} alt='about me' className='images'/>
        //                  )}
        //             </div>
        //         )
        //     })} 
        // </div>  