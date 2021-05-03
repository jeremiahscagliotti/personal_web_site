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
        <div className='g-wrapper'>
            <div className='resume_top' id='SkillsAnchorTag'>            
                <h2 className='font_red hp_title'><span className='font_white'>S</span>kills</h2>

                <div className='hex_row'>

{/* Framework--------------------------------------------------------------------------- */}
                    <div className='overlay_skills'>
                        {
                        showFramework?<div className='hidden_summary'>
                                <button onClick={()=>setShowFramework(!showFramework)}
                                    className={showFramework ? "x_button" : "x_button"}>X</button>
                                <h3 className='skill_header'>Frameworks</h3>
                                <p className='skill_disc'>
                                    What’s often under looked is the objective for coding the most 
                                    solid framework foundation by making all facets user-friendly 
                                    for every individualized platform. Whether you’re a first-time 
                                    or advanced developer, a framework should have easily traceable 
                                    coding for edits, that is straightforward for any developer and 
                                    a practical structure for every website. Building with code that's 
                                    not just understandable but efficient for all developers, back 
                                    and front end.                                
                                </p>
                                    
                                <ol>

                                    <li className='skill_box'>
                                        <h4 className='skill_subHeader'>React.js</h4>
                                        <p className='skill_sum'>
                                            I enjoy Object-Oriented Programming (OOP), React has a 
                                            simplicity to it with creating components making reusable 
                                            code simple to create, and efficient in organizing for a 
                                            client-side JavaScript framework. 
                                        </p>
                                        <p className='skill_sum'>
                                            I am also familiar with Ruby, Python, and Angular frameworks 
                                            and enjoy learning new ones. The idea of building it once and 
                                            being able to import that component to another project or 
                                            another component.
                                        </p>
                                    </li>

                                    <li className='skill_box'>
                                        <h4 className='skill_subHeader'>Express.js</h4>
                                        <p className='skill_sum'>
                                            Using Node.js for my web servers, Express.js provides a great 
                                            web framework that is built with Node.js. 
                                        </p>
                                        <p className='skill_sum'>
                                            Express.js inherits its performance and scalability from Node.
                                        </p>
                                    </li>   

                                </ol>
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
                                <p className='skill_disc'>
                                    What’s often under looked is the objective for coding the most 
                                    solid framework foundation by making all facets user-friendly 
                                    for every individualized platform. Whether you’re a first-time 
                                    or advanced developer, a framework should have easily traceable 
                                    coding for edits, that is straightforward for any developer and 
                                    a practical structure for every website. Building with code that's 
                                    not just understandable but efficient for all developers, back 
                                    and front end.                                
                                </p>
                                <ol>
                                    <li>
                                        <h4 className='skill_subHeader'>MangoDB</h4>
                                        <p className='skill_sum'>
                                            Using Node.js for my web servers, Express.js provides a great 
                                            web framework that is built with Node.js. 
                                        </p>
                                    </li>
                                    <li>
                                        <h4 className='skill_subHeader'>MySQL</h4>
                                        <p className='skill_sum'>
                                            Not as fast as MongoDB because you are pulling from the entire 
                                            DB and you need to navigate but much easier traverse tables 
                                            within the Schema. 
                                        </p>
                                    </li>
                                    
                                </ol>
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
                                <p className='skill_disc'>
                                    A developer that is well versed on solid software, understands faster 
                                    and more efficient edits in the future. Supporting website interface and 
                                    product display. The combination of the suggested software below is a 
                                    suggestion but not limited to better organization, communication, debugging 
                                    and best tracking for developers.                                 
                                </p>
                                <ol>
                                    <li>
                                        <h4 className='skill_subHeader'>Git</h4>
                                        <p className='skill_sum'>
                                            Git provides a structure for version control, takes a lot of the 
                                            unorganized team efforts, and organizes it for you. Also really helps 
                                            when something goes wrong you just backtrack a build and the site 
                                            is fine. 
                                        </p>
                                    </li>
                                    <li>
                                        <h4 className='skill_subHeader'>Jira</h4>
                                        <p className='skill_sum'>
                                            Jira is the most commonly used Project Tracking Software I have used. 
                                            It is one of the better ones as well, in my opinion, it works well 
                                            with other software like Slack, Jenkins, and Git.
                                        </p>
                                    </li>
                                    <li>
                                        <h4 className='skill_subHeader'>Charles Proxy</h4>
                                        <p className='skill_sum'>
                                            My main use of Charles Proxy is load testing and Debugs. It makes it 
                                            easy to work with mobile and tablet devices also. and Git.
                                        </p>
                                    </li>
                                    <li>
                                        <h4 className='skill_subHeader'>Postman</h4>
                                        <p className='skill_sum'>
                                            When building out a new API (application programming interface) Postman 
                                            is an easy way to access the API and it's a great way to Debug on and 
                                            get to know an old API. It can make various types of HTTP requests(GET, 
                                            POST, PUT, PATCH). It can also save environments for later use from when 
                                            you work on multiple APIs.
                                        </p>
                                    </li>
                                    <li>
                                        <h4 className='skill_subHeader'>Dev Tools</h4>
                                        <p className='skill_sum'>
                                            Programmers Best Friend...
                                        </p>
                                    </li>
                                </ol>
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
                                <p className='skill_disc'>
                                    Being able to be flexible with various methodology structures is key to 
                                    great communication in any development team. Understanding which methods 
                                    are best for the client's objective should be the goal for all front and 
                                    back end. Discerning is equally as impactful as conveying which methodologies 
                                    are needed to your team. Combined or alone, listed below are most of the 
                                    best examples for business management, programming and more.                                
                                </p>
                                    <ol>
                                        <li>
                                            <h4 className='skill_subHeader'>Agile</h4>
                                            <p className='skill_sum'>
                                                Project Management Methodology that I first learned. It's good for 
                                                teams to come together and get through projects and stay organized.
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className='skill_subHeader'>Scrum</h4>
                                            <p className='skill_sum'>
                                                Project Management Methodology is one of the best methods of management of 
                                                time and processing projects and bugs. Having a small team of each skill 
                                                and developing T-shaped skills that we normally don't get an opportunity to 
                                                do and have a scrum leader changes communication and just makes the task so 
                                                much easier to communicate.
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className='skill_subHeader'>Kanban</h4>
                                            <p className='skill_sum'>
                                                Project Management Methodology is great in my experience to get through tasks 
                                                fast but not always the most organized. Worked best with a team that tackled bugs.
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className='skill_subHeader'>OOP</h4>
                                            <p className='skill_sum'>
                                                Object-Oriented Programming, I know this is not normally used for JavaScript but 
                                                ES5 and ES6 helping simulate OOP and React.js components has really contributed 
                                                to creating reusable code. So instead of making 6 div's of the same thing you make 
                                                it once and reuse it.
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className='skill_subHeader'>RESTful</h4>
                                            <p className='skill_sum'>
                                                REST (Representational State Transfer) API takes advantage of HTTP protocols. I 
                                                like it because it keeps everything at the ready and it's very flexible and scalable.
                                            </p>
                                        </li>
                                        <li>
                                            <h4 className='skill_subHeader'>MVC</h4>
                                            <p className='skill_sum'>
                                                (Model, View, and Controller) a framework that makes the communication between the 
                                                API and the Client-side. Works well with RESTful API structure.
                                            </p>
                                        </li>
                                    </ol>
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
                                <p className='skill_disc'>
                                    As developers, we need to be able to convey the process of building a 
                                    website, which is language. Developers that not only understand but 
                                    have motivation to learn, adapt and grow with languages, can help a 
                                    whole team in every step of the website build. This also blends 
                                    communication to clients seamlessly, by taking out the technical 
                                    jargon. This better ensures a satisfied outcome for clients and developers. 
                                    Please see below the house building example for clients.                                
                                </p>
                                <p className='skill_disc'>
                                    HTML is the foundation, walls, levels and basic structure of any website. 
                                    JavaScript is the door hinges, windows, plumping and electrical because 
                                    it’s functionality of the website. This brings in the animation, scrolling 
                                    etc. that starts to personalize your build. jQuery being a version of 
                                    JavaScript that works with API, is like bringing water, gas and electric 
                                    power to your home. Front end of the database grid of the world. CSS and 
                                    SASS are the same basic design of a house where you paint, have furniture, 
                                    decorations and more.                               
                                </p>
                                <ol>
                                    <li>
                                        <h4 className='skill_subHeader'>JavaScript ES5/6</h4>
                                        <p className='skill_sum'>
                                            I mainly write in ECMAScript 6 because it works best when I code in React.
                                        </p>
                                    </li>
                                    <li>
                                        <h4 className='skill_subHeader'>Vanilla JavaScript</h4>
                                        <p className='skill_sum'>
                                            Plain old Javascript for when we don't like change...
                                        </p>
                                    </li>
                                    <li>
                                        <h4 className='skill_subHeader'>jQuery</h4>
                                        <p className='skill_sum'>
                                            Easy to use Javascript library for animating, using Ajax for APIs to just 
                                            traversing HTML files. It puts the $ in Javascript. 
                                        </p>
                                    </li>
                                    <li>
                                        <h4 className='skill_subHeader'>HTML</h4>
                                        <p className='skill_sum'>
                                            (Hypertext Markup Language) is the framework of client-facing layout. With 
                                            React.js I use .js or .jsx file structure but write all my HTML within a JS 
                                            file. One of the biggest things I try to do is make class names or ids easy 
                                            to find, understand, and traverse between files.
                                        </p>
                                    </li>
                                    <li>
                                        <h4 className='skill_subHeader'>CSS</h4>
                                        <p className='skill_sum'>
                                            (Cascading Style sheets) the cosmetic to the HTML and making reusable tags and 
                                            less is always more.
                                        </p>
                                    </li>
                                    <li>
                                        <h4 className='skill_subHeader'>SASS</h4>
                                        <p className='skill_sum'>
                                            (Syntactically awesome style sheets) is CSS but you are able to put the CSS tags in variables.
                                        </p>
                                    </li>                              
                                </ol>
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
