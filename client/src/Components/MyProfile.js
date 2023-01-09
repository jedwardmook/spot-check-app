import React, { useContext, useState } from "react";
import {Link} from 'react-router-dom'
import { UserContext } from '../context/user'

function MyProfile() {
    const {user, setUser} = useContext(UserContext)

    const [userName, setUserName] = useState(user.username)
    const [name, setName] = useState(user.name)
    const [bio, setBio] = useState(user.bio)
    const [photo, setPhoto] = useState(user.photo_url)
    const [editProfile, setEditProfile] = useState(false)
    
    const handleEditProfile = () => {
        setEditProfile(!editProfile)
    }

    const handleSetPhoto = (e) => {
        let file = e.target.files[0];
        setPhoto(file)
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

    const handlePhotoPatch = (e) => {
        e.preventDefault();
        const photoData = new FormData();

        photoData.append('user[photo]', e.target.photo.files[0])
        submitPhoto(photoData)
    }

    function submitPhoto(photoData){
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            body: photoData
        })
        .then((response) => {
            if (response.ok) {
                response.json().then((user) => {
                setPhoto(user.photo_url);
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
                <img src={photo} alt="Profile pic"/>
                {editProfile && (
                    <div>
                    <form onSubmit={handlePhotoPatch}>
                    <input
                        type="file"
                        name="photo"
                        multiple={false}
                        placeholder="Profile Pic"
                        onChange={(e) => handleSetPhoto(e)}
                        />
                    <button>Change Image</button>
                    </form>
                    </div>
                    )}
            </div>
        </div>
    )
}

export default MyProfile;