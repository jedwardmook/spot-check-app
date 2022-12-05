import React, { useState } from "react";

function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    function handleSubmit(e){
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
        setUsername("")
        setPassword("")
        setPasswordConfirmation("")
    }
    
    return (
      <div className="signup_div">
        username<input
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>
        password<input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        confirm password<input 
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  }
  
  export default SignUp;