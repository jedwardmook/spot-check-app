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
        username<input
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>
        password<input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        <button onClick={handleLogin}>Submit</button>
        </div>
    )
}

export default LogIn;