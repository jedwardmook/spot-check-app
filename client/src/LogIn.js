import './Styles/login.min.css';
import logo from "./images/spot_check-2.png"
import React, { useState } from "react";

function LogIn() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        fetch('/sessions', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        }).then((response) => {
            if (response.ok) {
                response.json().then((user) => {
                    console.log(user);
                })
            } else {
                response.json().then((errors) => console.log(errors.errors))
            }
        })        
        setUsername("");
        setPassword("");
    }

    return (
        <div className="login_div">
            <div className='login_info_div'>
                <img className="logo" src={logo}/>
                <h1 className='welcome'>Log into your account</h1>
            <div className='login_form'>
                <input
                    className='login_top'
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                <input 
                    className='login_bottom'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <button onClick={handleLogin} className="login_button">Submit</button>
            </div>
            </div>
        </div>
    )
}

export default LogIn;