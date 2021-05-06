import React from 'react';
import { Skills, Portfolio, Hero } from '../../components';
import { JSred } from '../../Images/index';

import './index.css';

const HomePage = props => {

    return (

        <div className='g-wrapper hero'>
            <div className='hero_logo'>
                                <img src={JSred} alt='JS red logo img'></img>  
                            </div>
            <div className='hero_body '> 
                <Hero />
                <div className='line'></div>
                <div className='resume_body'>
                    <Skills />
                    <div className='line'></div>
                    <Portfolio />  
                </div>
            </div>
        </div>

    );
};

export default HomePage;
