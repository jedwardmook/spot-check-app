import React, { useContext } from "react";
import { UserContext } from '../context/user'

function MyProfile() {

    const {user} = useContext(UserContext)

    return (
        <div className="profile_div">
            <div className="info_div">
                <h2>Username: {user.username}</h2>
                <h3>Name: {user.name}</h3>
                <h3>About: {user.bio}</h3>
            </div>
            <div className="photo_div">
                <img src={user.photo} alt="Profile pic"/>
            </div>
        </div>
    )
}

export default MyProfile;