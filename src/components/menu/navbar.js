import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import nasaLogo from '../../assets/favicon.ico'
import './navbar.style.scss'

class Navbar extends Component {
    render() {
        return(
            <React.Fragment>
                <nav id='nav'>
                    <a id='insight-home-anchor-left'><img src={nasaLogo} alt="nasa-main-logo" class='logo-header-left'/></a>
                    <li className='nav-button' id="home-nav-button"><Link to="/">Home</Link></li>
                    <li className='nav-button' id="home-nav-button"><Link to="/explore">Explore</Link></li>
                    <li className='nav-button' id="home-nav-button"><Link to="/search">Search</Link></li>
                    <li className='nav-button' id="home-nav-button"><Link to="/query">Query</Link></li>
                    <li className='nav-button' id="home-nav-button"><Link to="/visualize">Visualize</Link></li>
                    <li className='nav-button' id="home-nav-button"><Link to="/analyze">Analyze</Link></li>
                    <li className='nav-button' id="home-nav-button"><Link to="/configure">Configure</Link></li>
                    <li className='nav-button' id="home-nav-button"><Link to="/research">Research</Link></li>
                    <a id='insight-home-anchor-right'><img src={nasaLogo} alt="nasa-main-logo" className='logo-header-right'/></a>
                </nav>
            </React.Fragment>
        )
    }
}
export default Navbar

