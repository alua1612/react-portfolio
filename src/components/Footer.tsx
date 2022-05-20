import React from 'react';
import './Footer.scss';
import logo from '../images/logo-white.svg';

export default function Footer() {
    const date = new Date();
    return (
        <div className='footer'>
            <img src={logo} className='logo'/>
            <div className='social hovered'>
                <a>Telegram</a>
                <a>LinkedIn</a>
                <a>Github</a>
            </div>
            <div className='footer-date'>
                <p>©  {date.getFullYear()} Yergali Zhakhan</p>
            </div>
        </div>
    )
}