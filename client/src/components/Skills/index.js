import React,{ useState } from 'react';
import './index.css';

const SkillsComponent = props => {

    const [ showFramework,setShowFramework ] = useState(false);
    const [ showDataBase, setShowDataBase ] = useState(false);
    const [ showSoftware,setShowSoftware ] = useState(false);
    const [ showMethodologies, setShowMethodologies ] = useState(false);
    const [ showPlatforms, setShowPlatforms ] = useState(false);
    const [ showLanguages, setShowLanguages ] = useState(false);

    return (
        
            <div className='resume_top skill_body' id='SkillsAnchorTag'>            
                <h2 className='font_red hp_title'>
                    <span className='font_white'>S</span>
                    kills
                </h2>

                <div className='hex_row'>

{/* Framework--------------------------------------------------------------------------- */}
                    <div className='overlay_skills'>
                        {
                            showFramework?<div className='hidden_summary'>
                                <button onClick={()=>setShowFramework(!showFramework)}
                                    className={showFramework ? "x_button" : "x_button"}>X</button>
                                <h3 className='skill_header'>Frameworks</h3>
                                <div className='scroll_skills'> 
                                    <p className='skill_disc'>
                                        What’s often under looked is the objective <br className='mobile_br' />for coding the most 
                                        solid framework <br className='mobile_br' />foundation by making all facets user-friendly <br className='mobile_br' />
                                        for every individualized platform. <br className='mobile_br' />Whether you’re a first-time 
                                        or advanced <br className='mobile_br' />developer, a framework should have easily <br className='mobile_br' />traceable 
                                        coding for edits, that is <br className='mobile_br' />straightforward for any developer and 
                                        a <br className='mobile_br' />practical structure for every website. Building <br className='mobile_br' />with code that's 
                                        not just understandable but <br className='mobile_br' />efficient for all developers, <br className='mobile_br' />back 
                                        and front end.                                
                                    </p>
                                        
                                    <ol>

                                        <li className='skill_box'>
                                            <h4 className='skill_subHeader'>React.js</h4>
                                            <p className='skill_sum'>
                                                I enjoy Object-Oriented Programming (OOP), <br className='mobile_br' />React has a <br className='desk_br' />
                                                simplicity to it with creating <br className='mobile_br' />components making reusable <br className='desk_br' />
                                                code simple to <br className='mobile_br' />create, and efficient in organizing for a <br className='desk_br' />
                                                client-side <br className='mobile_br' />JavaScript framework. 
                                            </p>
                                            <p className='skill_sum'>
                                                I am also familiar with Ruby, Python, and Angular <br className='mobile_br' />frameworks <br className='desk_br' />
                                                and enjoy learning new ones. The <br className='mobile_br' />idea of building it once and <br className='desk_br' />
                                                being able to import <br className='mobile_br' />that component to another project or <br className='desk_br' />
                                                <br className='mobile_br' />another component.
                                            </p>
                                        </li>

                                        <li className='skill_box bottom_space'>
                                            <h4 className='skill_subHeader'>Express.js</h4>
                                            <p className='skill_sum'>
                                                Using Node.js for my web servers, Express.js <br className='mobile_br' />provides a great <br className='desk_br' />
                                                web framework that is <br className='mobile_br' />built with Node.js. 
                                            </p>
                                            <p className='skill_sum'>
                                                Express.js inherits its performance <br className='mobile_br' />and scalability from Node.
                                            </p>
                                        </li>   

                                    </ol>
                                </div>
                            </div>:null
                        }
                    </div>
                    <div onClick={()=>setShowFramework(!showFramework)}
                        className={showFramework ? "hex_button" : "hex_button"}>
                        <div className='hex_1'>
                            <div className='hex_2'>
                                <div className='hex_3'>
                                    <div className='hex_4'>
                                        <h3 className='font_white'>FRAMEWORKS</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                               

{/* DataBase--------------------------------------------------------------------------- */}
                    <div className='overlay_skills'>
                        {
                            showDataBase?<div className='hidden_summary'>
                                <button onClick={()=>setShowDataBase(!showDataBase)}
                                    className={showDataBase ? "x_button" : "x_button"}>X</button>
                                <h3 className='skill_header'>DataBase</h3>
                                <div className='scroll_skills'>
                                    <p className='skill_disc'>
                                        What’s often under looked is the objective <br className='mobile_br' />for coding the most 
                                        solid framework <br className='mobile_br' />foundation by making all facets user-friendly <br className='mobile_br' />
                                        for every individualized platform. Whether <br className='mobile_br' />you’re a first-time 
                                        or advanced developer, <br className='mobile_br' />a framework should have easily traceable <br className='mobile_br' />
                                        coding for edits, that is straightforward <br className='mobile_br' />for any developer and 
                                        a practical structure <br className='mobile_br' />for every website. Building with code that's <br className='mobile_br' />
                                        not just understandable but efficient for all <br className='mobile_br' />developers, back 
                                        and front end.                                
                                    </p>
                                    <ol>
                                        <li className='skill_box'>
                                            <h4 className='skill_subHeader'>MangoDB</h4>
                                            <p className='skill_sum'>
                                                Using Node.js for my web servers, Express.js <br className='mobile_br' />provides a great <br className='desk_br' />
                                                web framework that is <br className='mobile_br' />built with Node.js. 
                                            </p>
                                        </li>
                                        <li className='skill_box'>
                                            <h4 className='skill_subHeader'>MySQL</h4>
                                            <p className='skill_sum'>
                                                Not as fast as MongoDB because you are pulling <br className='mobile_br' />from the entire <br className='desk_br' />
                                                DB and you need to navigate but <br className='mobile_br' />much easier traverse tables <br className='desk_br' />
                                                within the Schema. 
                                            </p>
                                        </li>
                                        
                                    </ol>
                                </div>
                            </div>:null
                        }
                    </div>
                    <div onClick={()=>setShowDataBase(!showDataBase)}
                        className={showDataBase ? "hex_button" : "hex_button"}>
                        <div className='hex_1'>
                            <div className='hex_2'>
                                <div className='hex_3'>
                                    <div className='hex_4'>
                                        <h3 className='font_white'>DATA BASE</h3>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                            
{/* Software--------------------------------------------------------------------------- */}                            
                    <div className='overlay_skills'>
                        {
                            showSoftware?<div className='hidden_summary'>
                                <button onClick={()=>setShowSoftware(!showSoftware)}
                                className={showSoftware ? "x_button" : "x_button"}>X</button>
                                <h3 className='skill_header'>Software</h3>
                                <div className='scroll_skills'>
                                    <p className='skill_disc'>
                                        A developer that is well versed on solid <br className='mobile_br' />software, understands faster 
                                        and more <br className='mobile_br' />efficient edits in the future. Supporting <br className='mobile_br' />website interface and 
                                        product display. The <br className='mobile_br' />combination of the suggested software <br className='mobile_br' />below is a 
                                        suggestion but not limited to <br className='mobile_br' />better organization, communication, <br className='mobile_br' />debugging 
                                        and best tracking for developers.                                 
                                    </p>
                                    <ol>
                                        <li className='skill_box'>
                                            <h4 className='skill_subHeader'>Git</h4>
                                            <p className='skill_sum'>
                                                Git provides a structure for version control, takes <br className='mobile_br' />a lot of the <br className='desk_br' />
                                                unorganized team efforts, and <br className='mobile_br' />organizes it for you. Also really helps <br className='desk_br' />
                                                when <br className='mobile_br' />something goes wrong you just backtrack a build <br className='mobile_br' />and the site <br className='desk_br' />
                                                is fine. 
                                            </p>
                                        </li>
                                        <li className='skill_box'>
                                            <h4 className='skill_subHeader'>Jira</h4>
                                            <p className='skill_sum'>
                                                Jira is the most commonly used Project Tracking <br className='mobile_br' />Software I have used. <br className='desk_br' />
                                                It is one of the better ones <br className='mobile_br' />as well, in my opinion, it works well <br className='desk_br' />
                                                with other <br className='mobile_br' />software like Slack, Jenkins, and Git.
                                            </p>
                                        </li>
                                        <li className='skill_box'>
                                            <h4 className='skill_subHeader'>Charles Proxy</h4>
                                            <p className='skill_sum'>
                                                My main use of Charles Proxy is load testing and <br className='mobile_br' />Debugs. It makes it <br className='desk_br' />
                                                easy to work with mobile and <br className='mobile_br' />tablet devices also. and Git.
                                            </p>
                                        </li>
                                        <li className='skill_box'>
                                            <h4 className='skill_subHeader'>Postman</h4>
                                            <p className='skill_sum'>
                                                When building out a new API (application <br className='mobile_br' />programming interface) Postman <br className='desk_br' />
                                                is an easy way to <br className='mobile_br' />access the API and it's a great way to Debug on <br className='mobile_br' />and <br className='desk_br' />
                                                get to know an old API. It can make various <br className='mobile_br' />types of HTTP requests(GET, <br className='desk_br' />
                                                POST, PUT, PATCH). <br className='mobile_br' />It can also save environments for later use from <br className='mobile_br' />when <br className='desk_br' />
                                                you work on multiple APIs.
                                            </p>
                                        </li>
                                        <li className='skill_box bottom_space'>
                                            <h4 className='skill_subHeader'>Dev Tools</h4>
                                            <p className='skill_sum'>
                                                Programmers Best Friend...
                                            </p>
                                        </li>
                                    </ol>
                                </div>
                            </div>:null
                        }
                    </div>
                    <div onClick={()=>setShowSoftware(!showSoftware)}
                        className={showSoftware ? "hex_button" : "hex_button"}>
                        <div className='hex_1'>
                            <div className='hex_2'>
                                <div className='hex_3'>
                                    <div className='hex_4'>
                                        <h3 className='font_white'>SOFTWARE</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='hex-row'>
{/* Methodologies--------------------------------------------------------------------------- */}                            
                    <div className='overlay_skills'>
                        {
                            showMethodologies?<div className='hidden_summary'>
                                <button onClick={()=>setShowMethodologies(!showMethodologies)}
                                className={showMethodologies ? "x_button" : "x_button"}>X</button>
                                <h3 className='skill_header'>Methodologies</h3>
                                <div className='scroll_skills'> 
                                    <p className='skill_disc'>
                                        Being able to be flexible with various <br className='mobile_br' />methodology structures is key to 
                                        great <br className='mobile_br' />communication in any development team. <br className='mobile_br' />Understanding which methods 
                                        are best for <br className='mobile_br' />the client's objective should be the goal <br className='mobile_br' />for all front and 
                                        back end. Discerning is <br className='mobile_br' />equally as impactful as conveying which <br className='mobile_br' />methodologies 
                                        are needed to your team. <br className='mobile_br' />Combined or alone, listed below are most <br className='mobile_br' />of the 
                                        best examples for business <br className='mobile_br' />management, programming and more.                                
                                    </p>
                                    <ol>
                                        <li className='skill_box'>
                                            <h4 className='skill_subHeader'>Agile</h4>
                                            <p className='skill_sum'>
                                                Project Management Methodology that I first <br className='mobile_br' />learned. It's good for <br className='desk_br' />
                                                teams to come together <br className='mobile_br' />and get through projects and stay organized.
                                            </p>
                                        </li>
                                        <li className='skill_box'>
                                            <h4 className='skill_subHeader'>Scrum</h4>
                                            <p className='skill_sum'>
                                                Project Management Methodology is one of the <br className='mobile_br' />best methods of management of <br className='desk_br' />
                                                time and <br className='mobile_br' />processing projects and bugs. Having a small <br className='mobile_br' />team of each skill <br className='desk_br' />
                                                and developing T-shaped skills <br className='mobile_br' />that we normally don't get an opportunity to <br className='desk_br' />
                                                do <br className='mobile_br' />and have a scrum leader changes communication <br className='mobile_br' />and just makes the task so <br className='desk_br' />
                                                much easier <br className='mobile_br' />to communicate.
                                            </p>
                                        </li>
                                        <li className='skill_box'>
                                            <h4 className='skill_subHeader'>Kanban</h4>
                                            <p className='skill_sum'>
                                                Project Management Methodology is great in my <br className='mobile_br' />experience to get through tasks <br className='desk_br' />
                                                fast but not always <br className='mobile_br' />the most organized. Worked best with a team <br className='mobile_br' />that tackled bugs.<br className='desk_br' />
                                            </p>
                                        </li>
                                        <li className='skill_box'>
                                            <h4 className='skill_subHeader'>OOP</h4>
                                            <p className='skill_sum'>
                                                Object-Oriented Programming, I know this is not <br className='mobile_br' />normally used for JavaScript but <br className='desk_br' />
                                                ES5 and ES6 <br className='mobile_br' />helping simulate OOP and React.js components <br className='mobile_br' />has really contributed <br className='desk_br' />
                                                to creating reusable code. <br className='mobile_br' />So instead of making 6 div's of the same thing <br className='mobile_br' />you make <br className='desk_br' />
                                                it once and reuse it.
                                            </p>
                                        </li>
                                        <li className='skill_box'>
                                            <h4 className='skill_subHeader'>RESTful</h4>
                                            <p className='skill_sum'>
                                                REST (Representational State Transfer) API takes <br className='mobile_br' />advantage of HTTP protocols. I <br className='desk_br' />
                                                like it because it <br className='mobile_br' />keeps everything at the ready and it's very <br className='mobile_br' />flexible and scalable.
                                            </p>
                                        </li>
                                        <li className='skill_box bottom_space'>
                                            <h4 className='skill_subHeader'>MVC</h4>
                                            <p className='skill_sum'>
                                                (Model, View, and Controller) a framework that <br className='mobile_br' />makes the communication between the <br className='desk_br' />
                                                API and <br className='mobile_br' />the Client-side. Works well with <br className='mobile_br' />RESTful API structure.
                                            </p>
                                        </li>
                                    </ol>
                                </div>
                            </div>:null
                        }
                    </div>     
                    <div onClick={()=>setShowMethodologies(!showMethodologies)}
                        className={showMethodologies ? "hex_button" : "hex_button"}>
                        <div className='hex_1'>
                            <div className='hex_2'>
                                <div className='hex_3'>
                                    <div className='hex_4'>
                                        <h3 className='font_white'>METHODOLOGIES</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

{/* Platforms--------------------------------------------------------------------------- */}                            
                    <div className='overlay_skills'>
                        {
                            showPlatforms?<div className='hidden_summary'>
                                <button onClick={()=>setShowPlatforms(!showPlatforms)}
                                className={showPlatforms ? "x_button" : "x_button"}>X</button>
                                <h3 className='skill_header'>Platforms</h3>
                                <p className='skill_disc'>
                                    The widespread, professional and preferred preference for a developer platform is 
                                    Windows but all developers can and should be able to work as well on Linux or Unix. 
                                    My personal devices are Windows and Android in preference being superior. Though the 
                                    difference in platforms doesn’t affect how a website is built, the explanation of 
                                    website experience on individual platforms is explained below.                                
                                </p>
                                <p className='skill_disc'>
                                    Platforms are the device or devices such as desktops and laptops being the most common, 
                                    used by a developer to create a website. Websites should have full functionality on all 
                                    platforms (devices), so developers can create clients business’s best online experience. 
                                    This is done in the framework of your website.                               
                                </p>
                            </div>:null   
                        }
                    </div> 
                    <div onClick={()=>setShowPlatforms(!showPlatforms)}
                        className={showPlatforms ? "hex_button" : "hex_button"}>
                        <div className='hex_1'>
                            <div className='hex_2'>
                                <div className='hex_3'>
                                    <div className='hex_4'>
                                        <h3 className='font_white'>PLATFORMS</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
                            
                <div className='hex-row'>
{/* Languages--------------------------------------------------------------------------- */}                            
                    <div className='overlay_skills'>
                        {
                            showLanguages?<div className='hidden_summary'>
                                <button onClick={()=>setShowLanguages(!showLanguages)}
                                 className={showLanguages ? "x_button" : "x_button"}>X</button>
                                <h3 className='skill_header'>Languages</h3>
                                <div className='scroll_skills'> 
                                    <p className='skill_disc'>
                                        As developers, we need to be able to <br className='mobile_br' />
                                        convey the process of building a <br className='mobile_br' />
                                        website, which is language. Developers <br className='mobile_br' />
                                        that not only understand but have <br className='mobile_br' />
                                        motivation to learn, adapt and grow <br className='mobile_br' />
                                        with languages, can help a whole team <br className='mobile_br' />
                                        in every step of the website build. <br className='mobile_br' />
                                        This also blends communication to <br className='mobile_br' />
                                        clients seamlessly, by taking out the <br className='mobile_br' />
                                        technical jargon. This better ensures <br className='mobile_br' />
                                        a satisfied outcome for clients and <br className='mobile_br' />
                                        developers. Please see below the house <br className='mobile_br' />
                                        building example for clients.                                
                                    </p>
                                    <p className='skill_disc'>
                                        HTML is the foundation, walls, levels <br className='mobile_br' />
                                        and basic structure of any website. <br className='mobile_br' />
                                        JavaScript is the door hinges, windows, <br className='mobile_br' />
                                        plumping and electrical because <br className='mobile_br' />
                                        it’s functionality of the website. This <br className='mobile_br' />
                                        brings in the animation, scrolling <br className='mobile_br' />
                                        etc. that starts to personalize your <br className='mobile_br' />
                                        build. jQuery being a version of <br className='mobile_br' />
                                        JavaScript that works with API, is like <br className='mobile_br' />
                                        bringing water, gas and electric <br className='mobile_br' />
                                        power to your home. Front end of the <br className='mobile_br' />
                                        database grid of the world. CSS and <br className='mobile_br' />
                                        SASS are the same basic design of a house <br className='mobile_br' />
                                        where you paint, have furniture, <br className='mobile_br' />
                                        decorations and more.                               
                                    </p>
                                    <ol>
                                        <li className='skill_box'>
                                            <h4 className='skill_subHeader'>JavaScript ES5/6</h4>
                                            <p className='skill_sum'>
                                                I mainly write in ECMAScript 6 because it works <br className='mobile_br' />
                                                best when I code in React.
                                            </p>
                                        </li>
                                        <li className='skill_box'>
                                            <h4 className='skill_subHeader'>Vanilla JavaScript</h4>
                                            <p className='skill_sum'>
                                                Plain old Javascript for when we don't like <br className='mobile_br' />
                                                change...
                                            </p>
                                        </li>
                                        <li className='skill_box'>
                                            <h4 className='skill_subHeader'>jQuery</h4>
                                            <p className='skill_sum'>
                                                Easy to use Javascript library for animating, <br className='mobile_br' />
                                                using Ajax for APIs to just <br className='desk_br' />
                                                traversing HTML files. <br className='mobile_br' />It puts the $ in Javascript. 
                                            </p>
                                        </li>
                                        <li className='skill_box'>
                                            <h4 className='skill_subHeader'>HTML</h4>
                                            <p className='skill_sum'>
                                                (Hypertext Markup Language) is the framework <br className='mobile_br' />of client-facing layout. With <br className='desk_br' />
                                                <br className='mobile_br' />React.js I use .js or .jsx file structure <br className='mobile_br' />but write all my HTML within a JS <br className='desk_br' />
                                                <br className='mobile_br' />file. One of the biggest things I try to do <br className='mobile_br' />is make class names or ids easy <br className='desk_br' />
                                                <br className='mobile_br' />to find, understand, and traverse between files.
                                            </p>
                                        </li>
                                        <li className='skill_box'>
                                            <h4 className='skill_subHeader'>CSS</h4>
                                            <p className='skill_sum'>
                                                (Cascading Style sheets) the cosmetic to the HTML <br className='mobile_br' />and making reusable tags and <br className='desk_br' />
                                                <br className='mobile_br' />less is always more.
                                            </p>
                                        </li>
                                        <li className='skill_box bottom_space'>
                                            <h4 className='skill_subHeader'>SASS</h4>
                                            <p className='skill_sum'>
                                                (Syntactically awesome style sheets) is CSS but you <br className='mobile_br' />are able to put the <br className='desk_br' />
                                                <br className='mobile_br' />CSS tags in variables.
                                            </p>
                                        </li>                              
                                    </ol>
                                </div>
                            </div>:null  
                        }
                    </div>        
                    <div onClick={()=>setShowLanguages(!showLanguages)}
                        className={showLanguages ? "hex_button" : "hex_button"}>
                        <div className='hex_1'>
                            <div className='hex_2'>
                                <div className='hex_3'>
                                    <div className='hex_4'>
                                        <h3 className='font_white'>LANGUAGES</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    );
};

export default SkillsComponent;



// <div className='overlay_skills'>

// {
//     showFramework?<div className='hidden_summary'>
//         <button onClick={()=>setShowFramework(!showFramework)}
//             className={showFramework ? "x_button" : "x_button"}>X</button>
//         <h3 className='skill_header'>Frameworks</h3>
//         <p className='skill_disc'>
//             What’s often under looked is the objective for coding the most 
//             solid framework foundation by making all facets user-friendly 
//             for every individualized platform. Whether you’re a first-time 
//             or advanced developer, a framework should have easily traceable 
//             coding for edits, that is straightforward for any developer and 
//             a practical structure for every website. Building with code that's 
//             not just understandable but efficient for all developers, back 
//             and front end.                                
//         </p>
            
//         <ol>

//             <li className='skill_box'>
//                 <h4 className='skill_subHeader'>React.js</h4>
//                 <p className='skill_sum'>
//                     I enjoy Object-Oriented Programming (OOP), React has a 
//                     simplicity to it with creating components making reusable 
//                     code simple to create, and efficient in organizing for a 
//                     client-side JavaScript framework. 
//                 </p>
//                 <p className='skill_sum'>
//                     I am also familiar with Ruby, Python, and Angular frameworks 
//                     and enjoy learning new ones. The idea of building it once and 
//                     being able to import that component to another project or 
//                     another component.
//                 </p>
//             </li>

//             <li className='skill_box'>
//                 <h4 className='skill_subHeader'>Express.js</h4>
//                 <p className='skill_sum'>
//                     Using Node.js for my web servers, Express.js provides a great 
//                     web framework that is built with Node.js. 
//                 </p>
//                 <p className='skill_sum'>
//                     Express.js inherits its performance and scalability from Node.
//                 </p>
//             </li>   

//         </ol>
//     </div>:null
// }

// {
//     showDataBase?<div className='hidden_summary'>
//         <button onClick={()=>setShowDataBase(!showDataBase)}
//             className={showDataBase ? "x_button" : "x_button"}>X</button>
//         <h3 className='skill_header'>DataBase</h3>
//         <p className='skill_disc'>
//             What’s often under looked is the objective for coding the most 
//             solid framework foundation by making all facets user-friendly 
//             for every individualized platform. Whether you’re a first-time 
//             or advanced developer, a framework should have easily traceable 
//             coding for edits, that is straightforward for any developer and 
//             a practical structure for every website. Building with code that's 
//             not just understandable but efficient for all developers, back 
//             and front end.                                
//         </p>
//         <ol>
//             <li>
//                 <h4 className='skill_subHeader'>MangoDB</h4>
//                 <p className='skill_sum'>
//                     Using Node.js for my web servers, Express.js provides a great 
//                     web framework that is built with Node.js. 
//                 </p>
//             </li>
//             <li>
//                 <h4 className='skill_subHeader'>MySQL</h4>
//                 <p className='skill_sum'>
//                     Not as fast as MongoDB because you are pulling from the entire 
//                     DB and you need to navigate but much easier traverse tables 
//                     within the Schema. 
//                 </p>
//             </li>
            
//         </ol>
//     </div>:null
// }

// {
//     showSoftware?<div className='hidden_summary'>
//         <button onClick={()=>setShowSoftware(!showSoftware)}
//         className={showSoftware ? "x_button" : "x_button"}>X</button>
//         <h3 className='skill_header'>Software</h3>
//         <p className='skill_disc'>
//             A developer that is well versed on solid software, understands faster 
//             and more efficient edits in the future. Supporting website interface and 
//             product display. The combination of the suggested software below is a 
//             suggestion but not limited to better organization, communication, debugging 
//             and best tracking for developers.                                 
//         </p>
//         <ol>
//             <li>
//                 <h4 className='skill_subHeader'>Git</h4>
//                 <p className='skill_sum'>
//                     Git provides a structure for version control, takes a lot of the 
//                     unorganized team efforts, and organizes it for you. Also really helps 
//                     when something goes wrong you just backtrack a build and the site 
//                     is fine. 
//                 </p>
//             </li>
//             <li>
//                 <h4 className='skill_subHeader'>Jira</h4>
//                 <p className='skill_sum'>
//                     Jira is the most commonly used Project Tracking Software I have used. 
//                     It is one of the better ones as well, in my opinion, it works well 
//                     with other software like Slack, Jenkins, and Git.
//                 </p>
//             </li>
//             <li>
//                 <h4 className='skill_subHeader'>Charles Proxy</h4>
//                 <p className='skill_sum'>
//                     My main use of Charles Proxy is load testing and Debugs. It makes it 
//                     easy to work with mobile and tablet devices also. and Git.
//                 </p>
//             </li>
//             <li>
//                 <h4 className='skill_subHeader'>Postman</h4>
//                 <p className='skill_sum'>
//                     When building out a new API (application programming interface) Postman 
//                     is an easy way to access the API and it's a great way to Debug on and 
//                     get to know an old API. It can make various types of HTTP requests(GET, 
//                     POST, PUT, PATCH). It can also save environments for later use from when 
//                     you work on multiple APIs.
//                 </p>
//             </li>
//             <li>
//                 <h4 className='skill_subHeader'>Dev Tools</h4>
//                 <p className='skill_sum'>
//                     Programmers Best Friend...
//                 </p>
//             </li>
//         </ol>
//     </div>:null
// }

// {
//     showMethodologies?<div className='hidden_summary'>
//         <button onClick={()=>setShowMethodologies(!showMethodologies)}
//          className={showMethodologies ? "x_button" : "x_button"}>X</button>
//         <h3 className='skill_header'>Methodologies</h3>
//         <p className='skill_disc'>
//             Being able to be flexible with various methodology structures is key to 
//             great communication in any development team. Understanding which methods 
//             are best for the client's objective should be the goal for all front and 
//             back end. Discerning is equally as impactful as conveying which methodologies 
//             are needed to your team. Combined or alone, listed below are most of the 
//             best examples for business management, programming and more.                                
//         </p>
//             <ol>
//                 <li>
//                     <h4 className='skill_subHeader'>Agile</h4>
//                     <p className='skill_sum'>
//                         Project Management Methodology that I first learned. It's good for 
//                         teams to come together and get through projects and stay organized.
//                     </p>
//                 </li>
//                 <li>
//                     <h4 className='skill_subHeader'>Scrum</h4>
//                     <p className='skill_sum'>
//                         Project Management Methodology is one of the best methods of management of 
//                         time and processing projects and bugs. Having a small team of each skill 
//                         and developing T-shaped skills that we normally don't get an opportunity to 
//                         do and have a scrum leader changes communication and just makes the task so 
//                         much easier to communicate.
//                     </p>
//                 </li>
//                 <li>
//                     <h4 className='skill_subHeader'>Kanban</h4>
//                     <p className='skill_sum'>
//                         Project Management Methodology is great in my experience to get through tasks 
//                         fast but not always the most organized. Worked best with a team that tackled bugs.
//                     </p>
//                 </li>
//                 <li>
//                     <h4 className='skill_subHeader'>OOP</h4>
//                     <p className='skill_sum'>
//                         Object-Oriented Programming, I know this is not normally used for JavaScript but 
//                         ES5 and ES6 helping simulate OOP and React.js components has really contributed 
//                         to creating reusable code. So instead of making 6 div's of the same thing you make 
//                         it once and reuse it.
//                     </p>
//                 </li>
//                 <li>
//                     <h4 className='skill_subHeader'>RESTful</h4>
//                     <p className='skill_sum'>
//                         REST (Representational State Transfer) API takes advantage of HTTP protocols. I 
//                         like it because it keeps everything at the ready and it's very flexible and scalable.
//                     </p>
//                 </li>
//                 <li>
//                     <h4 className='skill_subHeader'>MVC</h4>
//                     <p className='skill_sum'>
//                         (Model, View, and Controller) a framework that makes the communication between the 
//                         API and the Client-side. Works well with RESTful API structure.
//                     </p>
//                 </li>
//             </ol>
//     </div>:null
// }

// {
//     showPlatforms?<div className='hidden_summary'>
//         <button onClick={()=>setShowPlatforms(!showPlatforms)}
//          className={showPlatforms ? "x_button" : "x_button"}>X</button>
//         <h3 className='skill_header'>Platforms</h3>
//         <p className='skill_disc'>
//             The widespread, professional and preferred preference for a developer platform is 
//             Windows but all developers can and should be able to work as well on Linux or Unix. 
//             My personal devices are Windows and Android in preference being superior. Though the 
//             difference in platforms doesn’t affect how a website is built, the explanation of 
//             website experience on individual platforms is explained below.                                
//         </p>
//         <p className='skill_disc'>
//             Platforms are the device or devices such as desktops and laptops being the most common, 
//             used by a developer to create a website. Websites should have full functionality on all 
//             platforms (devices), so developers can create clients business’s best online experience. 
//             This is done in the framework of your website.                               
//         </p>
//     </div>:null   
// }

// {
//     showLanguages?<div className='hidden_summary'>
//         <button onClick={()=>setShowLanguages(!showLanguages)}
//         className={showLanguages ? "x_button" : "x_button"}>X</button>
//         <ol>
//             <li>
//                 <h4 className='skill_subHeader'>JavaScript ES5/6</h4>
//                 <p className='skill_sum'>
//                     I mainly write in ECMAScript 6 because it works best when I code in React.
//                 </p>
//             </li>
//             <li>
//                 <h4 className='skill_subHeader'>Vanilla JavaScript</h4>
//                 <p className='skill_sum'>
//                     Plain old Javascript for when we don't like change...
//                 </p>
//             </li>
//             <li>
//                 <h4 className='skill_subHeader'>jQuery</h4>
//                 <p className='skill_sum'>
//                     Easy to use Javascript library for animating, using Ajax for APIs to just 
//                     traversing HTML files. It puts the $ in Javascript. 
//                 </p>
//             </li>
//             <li>
//                 <h4 className='skill_subHeader'>HTML</h4>
//                 <p className='skill_sum'>
//                     (Hypertext Markup Language) is the framework of client-facing layout. With 
//                     React.js I use .js or .jsx file structure but write all my HTML within a JS 
//                     file. One of the biggest things I try to do is make class names or ids easy 
//                     to find, understand, and traverse between files.
//                 </p>
//             </li>
//             <li>
//                 <h4 className='skill_subHeader'>CSS</h4>
//                 <p className='skill_sum'>
//                     (Cascading Style sheets) the cosmetic to the HTML and making reusable tags and 
//                     less is always more.
//                 </p>
//             </li>
//             <li>
//                 <h4 className='skill_subHeader'>SASS</h4>
//                 <p className='skill_sum'>
//                     (Syntactically awesome style sheets) is CSS but you are able to put the CSS tags in variables.
//                 </p>
//             </li>                              
//         </ol>
//     </div>:null  
// }

// </div>
