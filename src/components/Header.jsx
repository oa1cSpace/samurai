import React from 'react';
import header from '../css/Header.module.css';

const Header = () => {
    return(
            <header className={header.header}>
                <img src="https://i.pinimg.com/originals/3c/b9/34/3cb9349cf5e425fe4e8e31b8bd831e92.jpg" alt="LOGO"/>
            </header>
    );
}

export default Header;