import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Footer } from '../index';
import MobileToggleButton from '../MobileToolbarButton';

import './Toolbar.css';


const Toolbar = props => (

    <div className='toolbar_wrapper'>

            <nav className='toolbar_navigation'>

                <div className='top_nav'>

                    <div className=' toolbar_mobile_button '>
                        <MobileToggleButton click={props.drawerClickHandler} />
                    </div>

                </div>

                <div className='bot_nav'>

                    <div className='toolbar_navigation_items'>
                        <ul>
                            <li className='nav_line one_line'></li>
                            <li> <Link to="/"> Home </Link> </li>
                            <li className='nav_line two_line'></li>
                            <li> <HashLink to="/Skills"> Skills </HashLink> </li>
                            <li className='nav_line two_line'></li>
                            <li> <HashLink to="/Portfolio"> Portfolio </HashLink> </li>
                            <li className='nav_line two_line'></li>
                            <li> <Link to="/about"> About </Link> </li>
                            <li className='nav_line three_line'></li>              
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='footer_menu'>
                {<Footer />}
            </div>
    </div>
);

export default Toolbar;