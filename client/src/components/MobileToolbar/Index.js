import React from 'react';
import { Link } from 'react-router-dom';
import { GitHub, Gmail, LinkedIn, Phone } from '../../Images/index';

import './index.css';

const MobileToolbar = props => {

    let drawerClasses = 'mobile_drawer';

    if (props.slidMobileToolbar) {
        drawerClasses = 'mobile_drawer open';
    }

    return (

        <nav className={drawerClasses}>

            <div className='navbar' onClick={props.click}>
                <ul>

                    <li>
                        <Link to="/"> Home </Link>
                    </li>

                    <li>
                        <Link to="/about"> About </Link>
                    </li>

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
        </nav>
    );
};

export default MobileToolbar;