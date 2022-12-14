import '../Styles/navbar.min.css';
import logo from '../images/text_logo.png'
import React, {useState, useContext} from "react"
import { UserContext } from '../context/user';
import { Link } from "react-router-dom"


function Navbar() {
    const [isClicked, setIsClicked] = useState(false)
    const {user} = useContext(UserContext)

    const handleMenuToggle = () => {
        setIsClicked(!isClicked)
    }

    return (
        <div className="navbar_div">
            <div onClick={handleMenuToggle} className="navbar_menu">
                <div className='dash'></div>
                <div className='dash'></div>
                <div className='dash'></div>
                {isClicked && 
                    <div className="navbar_user_menu">
                        <div className='menu_link'>{user? <h4>{user.username} </h4>: <h4>Username</h4>}</div><hr/>
                        <Link className="menu_links" to="/myprofile"><div className='menu_link'><h4>Profile</h4></div><hr/></Link>
                        <Link className="menu_links" to="/addspot"><div className='menu_link'><h4>Add Spot</h4></div><hr/></Link>
                        <Link className="menu_links" to=""><div className='menu_link'><h4>Log Out</h4></div></Link>
                    </div>}
            </div>
            <Link to="/"><img className="navbar_logo" src={logo} /></Link>
        </div>
    )
}

export default Navbar