import '../Styles/navbar.min.css';
import logo from '../images/text_logo.png'
import React, {useState, useContext} from "react"
import { UserContext } from '../context/user';
import { SwitchesContext } from '../context/switches';
import { Link } from "react-router-dom"


function Navbar({addSpot, setAddSpot}) {
    const [isClicked, setIsClicked] = useState(false)
    const {user} = useContext(UserContext)
    const {placesDiv, setPlacesDiv} = useContext(SwitchesContext)

    const handleMenuToggle = () => {
        setIsClicked(!isClicked)
    }

    const handleCancel = () => {
        setAddSpot(!addSpot)
    }

    const handlePlacesDiv = () => {
        setPlacesDiv(!placesDiv)
    }

    return (
        <div className="navbar_div">
            <div onClick={handleMenuToggle} className="navbar_menu">
                <div className='dash'></div>
                <div className='dash'></div>
                <div className='dash'></div>
                {isClicked && 
                    <div className="navbar_user_menu">
                        <div className='menu_link'>{user? <h4>{user.username} </h4>: <h4>Username</h4>}</div>
                        <Link className="menu_links" to="/myprofile"><div className='menu_link'><h4>Profile</h4></div></Link>
                        <div className='menu_links'><div className='menu_link' onClick={handlePlacesDiv}>
                            {placesDiv ? <h4>Add A Spot</h4> : <h4>Find A Spot</h4>}</div></div>
                        <Link className="menu_links" to=""><div className='menu_link'><h4>Log Out</h4></div></Link>
                    </div>}
            </div>
                <Link to="/"><img className="navbar_logo" alt="Spot Check" src={logo} /></Link>
            {addSpot &&
                <div className='add_spot_window'>
                <div className='add_spot_div'>
                    <Link to="/addspot"><button className='add_spot_button' onClick={handleCancel}>Add Spot?</button></Link>
                    <button className='cancel_button' onClick={handleCancel}>Cancel</button>
                </div>
            </div>}
        </div>
    )
}

export default Navbar