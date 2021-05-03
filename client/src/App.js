import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Backdrop, Toolbar, MobileToolbar, Skills, Portfolio } from './components';
import { Home, About } from './containers';
import Map from './Images/OldWorldMap.jpg'
import './App.css';

class App extends Component {

    //---------------------------------START TOOLBAR FUNCTIONALITY---------------------------------
    //stat and drawerToggleClickHnadler save the statue of the drawer from false to true. Then I render mobileToolbar and backdrop
    //to false so id does not appear. Backdrop is seperate so we can use it in other parts of the site.
    //After we send the trigger to the toolbar.js and get the onClick trigger to open mobile toolbar.

    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };


    //---------------------------------START BACKDROP FUNCTIONALITY---------------------------------

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    }

    //---------------------------------START -- FUNCTIONALITY---------------------------------



    //---------------------------------START RENDER FUNCTIONALITY---------------------------------
    
    renderHeader = () => {
        //let mobileToolbar;
        let backdrop;
        if (this.state.sideDrawerOpen) {
            //mobileToolbar = <MobileToolbar />;
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
      return (
        <header className='header' >
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <MobileToolbar slidMobileToolbar={this.state.sideDrawerOpen} />
            {backdrop}
        </header>
      ) 
    }

    renderRouter = () => {
        return ( 
            <div className='body'>
                <main>
                    <Route path='/' component={Home} exact />
                    <Route path='/about' component={About} exact />
                    <Route path='/skills' component={Skills} exact />
                    <Route path='/portfolio' component={Portfolio} exact />
                </main>
            </div>
        )
    }

    render() {
        return (
            <Router >
                <div className='main-wrapper'
                    style={{
                        // maxWidth: "1280px",
                        // textAlign: "center",
                        // margin: "auto",
                        // border: "1px solid lightgrey",
                        // boxShadow: "10px 0 10px -2px lightgrey"
                    }}>
                    {/* <img src={Map} /> */}
                    <div className='body-wrapper body-black'>
                        <div className='topborder'></div>
                        {this.renderHeader()}
                        {this.renderRouter()}
                        <div className='botborder'></div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;