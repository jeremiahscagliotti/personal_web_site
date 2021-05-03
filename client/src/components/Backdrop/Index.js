import React from 'react';

import './index.css';

const Backdrop = props => (
    <div className='backdrop' onClick={ props.click } />
);

export default Backdrop;
