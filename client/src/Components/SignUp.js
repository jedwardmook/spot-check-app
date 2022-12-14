import '../Styles/signup.min.css';
import logo from "../images/spot_check-2.png"
import React, { useState } from "react";

function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const handleSignup = (e) => {
        e.preventDefault();
        fetch('/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: passwordConfirmation,
                name: null,
                bio: null,
                photo: null,
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
        setPasswordConfirmation("");
    }
    
    return (
      <div className="signup_div">
        <div className="signup_info_div">
            <img className="logo" src={logo}/>
            <h1 className='welcome'>Sign up for your account</h1>
        <div className="signup_form">
            <input
                className="signup_top_input"
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            <input
                className="signup_input"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            <input
                className="signup_bottom_input"
                placeholder='Confirm Password'
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
        <button className="signup_button" onClick={handleSignup}>Submit</button>
        </div>
        </div>
      </div>
    );
  }
  
  export default SignUp;