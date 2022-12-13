import './Styles/navbar.min.css';
import logo from '../src/images/text_logo.png'
import React from "react"

function Navbar() {

    
    return (
        <div className="navbar_div">
            <div className="navbar_menu">
                <div className='dash'></div>
                <div className='dash'></div>
                <div className='dash'></div>
            </div>
            <img className="navbar_marker" src={logo} />
        </div>
    )
}

export default Navbar