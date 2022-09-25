import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />

            <div>
                <a href="/home">Home</a>
                <a href="/blogs">Blogs</a>
                <a href="/contact">Contact</a>
                <a href="/abous">About US</a>
            </div>
        </nav>
    );
};

export default Header;