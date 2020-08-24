import React from 'react';
import './App.css';
import './css/Header.module.css';
import './css/Navbar.module.css';
import './css/Profile.module.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
    return (

        /*  === APP_WRAPPER ===  */
        <div className='app-wrapper'>
            {/*  === HEADER ===  */}
            <Header/>

            {/*  === SIDEBAR ===  */}
            <Navbar/>

            {/*  === CONTENT_CONTAINER ===  */}
            <Profile/>
        </div>
    );
};

export default App;
