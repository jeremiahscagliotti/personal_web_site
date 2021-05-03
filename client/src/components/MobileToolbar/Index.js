import React from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to="/contact"> Contact </Link> 
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default MobileToolbar;