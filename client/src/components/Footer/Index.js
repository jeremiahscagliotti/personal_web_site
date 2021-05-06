import React from 'react';
import { GitHub, Gmail, LinkedIn, Phone } from '../../Images/index';

import './index.css';


const Footer = props => {
    return (
        <div className='footer_wrapper'>
            <div className='footer_icons'>
                <ul>
                    <li>
                        <a href='tel:323-217-8481'>
                            <img src={Phone} alt='Cell: (323)-217-8481'/>
                        </a>   
                    </li>
                    <li>
                        <a href='mailto:jeremiahscagliotti@gmail.com'>
                            <img src={Gmail} alt='Gmail: jeremiahscagliotti@gmail.com'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/jeremiah-scagliotti/' target="_blank" rel="noreferrer">
                            <img src={LinkedIn} alt='LinkedIn: https://www.linkedin.com/in/jeremiah-scagliotti/'/>  
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/jeremiahscagliotti' target="_blank" rel="noreferrer">
                            <img src={GitHub} alt='GitHub: https://github.com/jeremiahscagliotti'/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;