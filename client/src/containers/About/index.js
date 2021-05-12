import React from 'react';
import { Slide } from '../../components';
import { SliderData } from '../../components/Slide/imageData';
import './index.css';

const About = props => {

    // ReactDOM.render(
    //     <Carousel />,
    //     document.getElementById('container')
    //   );

    return (

        <div className='body-wrapper '>
            <div className='desk_about'>
                <div className='gallery'>
                    
                    <ol>
                        <li><img src={SliderData[4].image} alt='about me' className='images'/></li>
                        <li><img src={SliderData[2].image} alt='about me' className='images'/></li>
                        <li><img src={SliderData[1].image} alt='about me' className='images'/></li>
                        <li><img src={SliderData[0].image} alt='about me' className='images'/></li>
                        <li><img src={SliderData[3].image} alt='about me' className='images'/></li>

                    </ol>
                </div>
                <div className='about_summary font_white'>
                <h2 className='font_red about_body'><span className='font_white'>A</span>bout</h2>
                    <div className='about_summary_one'>
                        <p>
                            I created this website to be an expression of not just 
                            what I love visually but as momentum for a career of 
                            helping others. Not many people see website creation 
                            and development as a labor of love but as a Christian, 
                            friend and employee, it’s a moment where in a client / 
                            companies space, I can be of service. There’s nothing 
                            small about helping launch any sized business or 
                            continuing to help it grow. So the spotlight gets to 
                            stay where it's truly deserved, the outcome of what 
                            any client or company is looking for, their perfect 
                            website. 
                        </p>
                    </div>
                    <div className='about_summary_one'>
                        <p>
                            When I’m not coding or developing, the outdoors is my 
                            greatest escape. Camping, backpacking, fishing or any 
                            self sufficient survival in the wilderness, is the most 
                            fun for me. In smaller ways just problem solving 
                            mechanically, technically or woodworking is a great 
                            time. I enjoy coding for the challenge of problem 
                            solving, so having puzzles in my hobbies like cooking, 
                            fitness, some gaming, and everything else listed, keeps 
                            me sharp but also is just a cohesive lifestyle for me. 
                            I know I thrive best in structure and a basic routine, 
                            so the escape out to God’s creation really allows me to 
                            decompress from the day to day. Mixing it up is always 
                            healthy.
                        </p>
                    </div>
                    <div className='about_summary_one'>
                        <p>
                            Enjoy the content created, please contact me if you have any 
                            inquiries. Thank you so much for taking the time to learn a 
                            bit about me.
                        </p>
                    </div>
                    {/* <div className='pend_fix'>
                        <ol>
                            <li>
                                I need to find a better way to do my overflow for mobile.
                            </li>
                            <li>
                                Tablet is currently not supported (scaled). working on my scaling. 
                            </li>
                        </ol>
                    </div> */}
                </div>
            </div>
            <div className='mobile_about'>
                <div className='gallery'>
                <h2 className='font_red about_body'><span className='font_white'>A</span>bout</h2>
                <ol>
                ````````<li>
                            <p className='font_white'>
                                I created this website to be an expression of not just 
                                what I love visually but as momentum for a career of 
                                helping others. Not many people see website creation 
                                and development as a labor of love but as a Christian, 
                                friend and employee, it’s a moment where in a client / 
                                companies space, I can be of service. There’s nothing 
                                small about helping launch any sized business or 
                                continuing to help it grow. So the spotlight gets to 
                                stay where it's truly deserved, the outcome of what 
                                any client or company is looking for, their perfect 
                                website. 
                            </p>
                        </li>
                        <li><img src={SliderData[4].image} alt='about me' className='images'/></li>
                        <li>
                            <p className='font_white'>
                                When I’m not coding or developing, the outdoors is my 
                                greatest escape. Camping, backpacking, fishing or any 
                                self sufficient survival in the wilderness, is the most 
                                fun for me. In smaller ways just problem solving 
                                mechanically, technically or woodworking is a great 
                                time. I enjoy coding for the challenge of problem 
                                solving, so having puzzles in my hobbies like cooking, 
                                fitness, some gaming, and everything else listed, keeps 
                                me sharp but also is just a cohesive lifestyle for me. 
                                I know I thrive best in structure and a basic routine, 
                                so the escape out to God’s creation really allows me to 
                                decompress from the day to day. Mixing it up is always 
                                healthy.
                            </p>
                        </li>
                        <li><img src={SliderData[2].image} alt='about me' className='images'/></li>
                        <li className='font_white'>
                            <p>
                            Enjoy the content created, please contact me if you have any 
                            inquiries. Thank you so much for taking the time to learn a 
                            bit about me,
                            </p>
                        </li>
                        <li><img src={SliderData[1].image} alt='about me' className='images'/></li>

                        <li><img src={SliderData[0].image} alt='about me' className='images'/></li>

                        <li><img src={SliderData[3].image} alt='about me' className='images'/></li>
                    </ol>
                </div>
                
            </div>
            
        </div>
        
    );
};

export default About;

// /* <Slide /*slides={SliderData}*/ /> */