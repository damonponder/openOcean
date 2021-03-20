import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../assets/openOceanLogo.png'
import './navbar.style.scss'

const NavigationBar = () => {
        return(
            <React.Fragment>
            <div className='logo-header-div'>
                <a id='logo-header-pic'><img src={logo} alt="nasa-main-logo" className='logo-header-pic'/></a>
            </div>
                <nav id='nav'>
                    <li className='nav-button' id="home-nav-button"><Link to="/">Home</Link></li>
                    <li className='nav-button' id="home-nav-button"><Link to="/search">Search</Link></li>
                    <li className='nav-button' id="home-nav-button"><Link to="/query">Network</Link></li>
                    <li className='nav-button' id="home-nav-button"><Link to="/visualize">Profile</Link></li>
                    <li className='nav-button' id="home-nav-button"><Link to="/analyze">Notifications</Link></li>
                    <li className='nav-button' id="home-nav-button"><Link to="/configure">Message</Link></li>
                    <li className='nav-button' id="home-nav-button"><Link to="/research">Venture Vault</Link></li>
                </nav>
            </React.Fragment>
        )
    }
export default NavigationBar

