import React from 'react';
// import {
//     Link
//   } from "react-router-dom";
import './Header.scss';
import logo from '../images/logo-white.svg';

export default function Header() {
    return (
        <div className='container'>
            <div className='logo-href'>
                <img src={logo} className='logo'/>
                <div className='navbar'>
                    <nav>
                        <ul className='list hovered'>
                            <li><a>Case studies</a>
                            {/* <Link to="/">Case studies</Link> */}
                            </li>
                            <li><a>Experiments</a>
                            {/* <Link to="/about">Experiments</Link> */}
                            </li>
                            <li><a>Contact</a>
                            {/* <Link to="/users">Contact</Link> */}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}