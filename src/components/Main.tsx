import React from 'react';
import './Main.scss'
import logo from '../images/logo.svg'
import telegram from '../images/telegram.svg'
import linkedin from '../images/linkedin.svg'
import github from '../images/github.svg'

export default function Main() {
    return (   
        <>    
        <div className='main'>
            <img src={logo} className='bckgr-img' />
            <div className='main-info container'>
                <div className='name-block'>
                    <h1 className='name'>Yergali Zhakhan</h1>
                    <p className='subtitle'>Mobile Developer</p>
                    <button className='about-btn'>About Me</button>
                </div>
                <div className='social-links'>
                    <a>
                        <img src={telegram}/>
                    </a>
                    <a>
                        <img src={linkedin}/>
                    </a>
                    <a>
                        <img src={github}/>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}