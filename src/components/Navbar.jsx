import React from 'react';
import navbar from '../css/Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={navbar.nav}>
            <div className={navbar.item}>
                <a>Profile</a>
            </div>
            <div className={navbar.item}>
                <a>Messages</a>
            </div>
            <div>
                <a className={navbar.item} href="">News</a>
            </div>
            <div>
                <a className={navbar.item} href="">Music</a>
            </div>
            <div className={navbar.item}>
                <a href="#">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;