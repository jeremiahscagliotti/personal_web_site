import React from 'react';

import './index.css';

const mobileToggleButton = props => (

    <button className='toggle_button' onClick={props.click}>
        <div className='odd_toggle_button_line' />
        <div className='even_toggle_button_line' />
        <div className='odd_toggle_button_line' />
    </button>
);

export default mobileToggleButton;