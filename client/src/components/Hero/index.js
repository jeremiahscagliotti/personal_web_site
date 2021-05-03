import React,{ useState } from 'react';

import { BnW } from '../../Images/index';


const HeroComponent = props => {

    return (

        <div className='g-wrapper hero'>
            <div className='body-wrapper'>
                <div className='hero_content'>
                    <div className='hero_sub'>        
                            <h1 className="font_white text_left">Jeremiah Scagliotti</h1>
                            <h2 className="font_red text_left">Front-End Developer</h2>
                    </div>
                </div>
                <div className='hero_content'>
                    <div className='hero_img'>
                        <img src={BnW}></img>
                    </div>
                </div>
                <h3 className='font_white fixed_layer'>Let your light so shine before men, that they may see your good works and glorify your Father in heaven. <span className='font_red'> - Matthew 5:16</span></h3>            
            </div>          
        </div>
        
    );    
};

export default HeroComponent;