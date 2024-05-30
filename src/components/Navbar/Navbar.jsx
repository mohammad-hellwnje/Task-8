import { useState } from 'react'
import React from 'react'
import img from './../../assets/image/logo.svg'
import './style/style.css'
export default function Navbar () {
    const [Toggle ,setToggle ] = useState (false)
    const toggleHandler = () => {
        setToggle(!Toggle)
    };
    return (
        <nav>
            <div className="logo">
                <img src={img} alt="image"/>
                <p>Digital marketing agency</p>
            </div>
            <ul className={Toggle?'active':""}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Clients & Partners</a></li>
                <li>
                    <a href="#" className='about'>About US</a>
                    <i class="fa-solid fa-chevron-down down-icon"></i>
                    <ul className='submnue'>
                        <li>Who & Why</li>
                        <li>Internship</li>
                        <li>Achievement</li>
                        <li>Searrch For ID</li>
                    </ul>
                </li>
                <li><a href="#">Let's Talk</a></li>
            </ul>
            <i class="fa-solid fa-bars bars-icon" onClick={toggleHandler}></i>
        </nav>
    )
    
}
