import React from 'react';
import { Skills, Portfolio, Hero } from '../../components';
import { JSred } from '../../Images/index';

import './index.css';

const HomePage = props => {

    return (

        <div className='g-wrapper hero'>
            <div className='hero_logo'>
                                <img src={JSred}></img>  
                            </div>
            <div className='hero_body '>
                
                <Hero />

                <div className='line'></div>
                <div className='resume_body'>
                    
                    <Skills />

                <div className='line'></div>

                    <Portfolio />

                    <div className='resume_bottom'>
                        <h2 className='font_white'></h2>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomePage;
