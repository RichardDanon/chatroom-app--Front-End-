import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

//don't forget if you want to add it, and test it, just add it to app.js
function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // TODO: Implement API call to authenticate user
      axios
        .post("http://127.0.0.1:8000/api/users/login", { username, password })
        .then((response) => {
          if (response.status === 200) {
            if (response.data != []) {
              sessionStorage.setItem("user", JSON.stringify(response.data));
              onLoginSuccess();
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  
    //not tested yet
    return (
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div class="inputbox">
            <input
              type="text"
              value={username}
              placeholder="username"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div class="inputbox">
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button className="submitButton" type="submit">Login</button>
        </form>
      </div>
    );
  
}

export default Login;