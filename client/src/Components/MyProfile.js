import React, { useContext, useState } from "react";
import {Link} from 'react-router-dom'
import { UserContext } from '../context/user'

function MyProfile() {
    const {user, setUser} = useContext(UserContext)

    const [userName, setUserName] = useState(user.username)
    const [name, setName] = useState(user.name)
    const [bio, setBio] = useState(user.bio)
    const [photo, setPhoto] = useState(user.photo)
    const [editProfile, setEditProfile] = useState(false)
    
    const handleEditProfile = () => {
        setEditProfile(!editProfile)
    }

    const handleProfilePatch = (e) => {
        e.preventDefault();
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: userName,
                name: name,
                bio: bio,
                photo: photo,
            })
        })
        .then((response) => {
            if (response.ok) {
                response.json().then((user) => {
                    setUser(user);
                });
            } else {
                response.json().then((errors) => console.log(errors));
            }
        });
        handleEditProfile();
    }

    return (
        <div className="profile_div">
            <div className="info_div">
                <Link to='/'><p>back to spots</p></Link>
                <h2>Username: {user.username}</h2>
                {editProfile && 
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)} 
                        placeholder="Username"
                        />}
                <h3>Name: {user.name}</h3>
                {editProfile && 
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        />}
                <h3>About: {user.bio}</h3>
                {editProfile && 
                    <input
                        type="text"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="About"
                        />}
                <h5 onClick={handleEditProfile}>Edit Profile</h5>
                {editProfile && 
                <button onClick={handleProfilePatch}>Submit Changes</button>}
            </div>
            <div className="photo_div">
                <img src={user.photo} alt="Profile pic"/>
                {editProfile && 
                    <input
                        type="text"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        placeholder="Profile Pic"
                        />}
            </div>
        </div>
    )
}

export default MyProfile;