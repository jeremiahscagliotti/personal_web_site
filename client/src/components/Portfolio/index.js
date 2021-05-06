import React from 'react';
import { SMM } from '../../Images/index';

import './index.css';


const PortfolioComponent = props => {

    return (             
        
            <div className='resume_bottom' id='PortfolioAnchorTag'>
                <h2 className='font_red hp_title'><span className='font_white'>P</span>ortfolio</h2>
                <div className='web_dev'>
                    <div className='portfolio_content'>
                        <div className='portfolio_info'>
                            <a href='https://savannahmariemassage.com/' target="_blank" rel="noreferrer">
                                <img src={ SMM } alt='SMM website page' />
                                <h3 className='font_white'>Savannah Marie Massage</h3>
                            </a>
                            <div className='portfolio_skills font_red'>
                                    <ol>
                                        <li>React.js</li>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Route53</li>
                                        <li>S3 Bucket</li>
                                    </ol>
                                </div>
                            <p className='font_white'>
                                My client was looking for a low cost website and a high quality feel
                                and look. I built my clients site in React knowing hooks would still 
                                work on a static page. We sate down design the entire layout and how to
                                keep our cost low and still build out an afordable way to book clients 
                                still get her client intakes to her clients. I found that squareup.comp
                                provides a service that we needed and it cut the cost of the site and 
                                then I found AWS provides a static hosting services.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
 

    );
};

export default PortfolioComponent;
