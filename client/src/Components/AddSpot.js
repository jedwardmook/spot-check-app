import React,{ useState, useContext} from "react";
import { UserContext } from "../context/user";
import { Link } from "react-router-dom"
import "../Styles/addspot.min.css"
import logo from "../images/spot_check-2.png"

function AddSpot({spotLat, spotLng, addSpot, setAddSpot}){
    const {user} = useContext(UserContext)
    const [name, setName] = useState("")
    const [lat, setLat] = useState(spotLat)
    const [lng, setLng] = useState(spotLng)
    const [about, setAbout] = useState("")
    const [userId, setUserId] = useState(user.id)

    const handleSubmitSpot = (e) => {
        e.preventDefault();
        fetch('/spots', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                lat: lat,
                lng: lng,
                about: about,
                user_id: userId,
            }),
        }).then((response) => {
            if (response.ok) {
                response.json().then((spot) => {
                    console.log(spot);
                })
            } else {
                response.json().then((errors) => console.log(errors.errors))
            }
        })
        setAddSpot(!addSpot)
    }

    return (
        <div className="add_spot_window">
            <div className="add_spot_main_div">
            <Link  className='close' to='/'><h5 className="add_spot_exit_button">x</h5></Link>
                <img className="logo" src={logo} alt="Spot Check"/>
                <h1 className='welcome'>Add your spot</h1>
            <div className="add_spot_form_div">
                <form onSubmit={handleSubmitSpot}>
                    <input
                        placeholder="Name of Spot"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="add_spot_top_input"   
                    />
                    <br/>
                    <br/>
                    <input 
                        type="file"
                        className="add_spot_photo"
                        placeholder="Add Photos"
                    />
                    <h5 className="add_spot_photos_title">Add Photos</h5>
                    <textarea
                        placeholder="Description of Spot"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        className="add_spot_textarea"   
                    />
                    <br/>
                    <button className="add_spot_submit">Add Spot</button>
                    </form>
            </div>
            </div>
        </div>
    )
}

export default AddSpot;