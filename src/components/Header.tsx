import React from 'react';
// import {
//     Link
//   } from "react-router-dom";
import './Header.scss';
import logo from '../images/logo-white.svg';

export default function Header() {
    return (
        <div className='container'>
            <a className='logo-href'>
                <img src={logo} className='logo'/>
                <div className='navbar'>
                    <nav>
                        <ul className='list'>
                            <li>Case studies
                            {/* <Link to="/">Case studies</Link> */}
                            </li>
                            <li>Experiments
                            {/* <Link to="/about">Experiments</Link> */}
                            </li>
                            <li>Contact
                            {/* <Link to="/users">Contact</Link> */}
                            </li>
                        </ul>
                    </nav>
                </div>
            </a>
        </div>
    )
}