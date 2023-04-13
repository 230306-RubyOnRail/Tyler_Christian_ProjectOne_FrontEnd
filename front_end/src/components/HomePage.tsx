import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import {User} from '../models/users'
export function HomeLanding() {
  localStorage.setItem('token', "NULL");
  localStorage.setItem('tokentype', "NULL");
  localStorage.setItem('user_id', "0");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  localStorage.setItem('UsrLogin','false');
  //const history = useHistory();
 
//   const routeChange = (path :string) =>{
//     let path1 = `/`+path;
//     window.location.href=path1;
//   };
    let navigate = useNavigate(); 
    // const routeChange = (path :string) =>{     
    // navigate(path);
    
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  
  const handleLoginClick = () => {
    console.log("HANDLE LOGIN CLICK USERNAME "+ username + "password: " + password);
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_name: username,
        user_password: password
      })
    })
      .then(response => {
        if(!response.ok) {
        setErrorMessage('Invalid username or password');}
        else {return response.json();}
    })
      .then(data => {
        const {token, tokentype, user_id} = data;
        console.log(token, tokentype);
        setToken(cur_token => token);
        localStorage.setItem('token', token);
        localStorage.setItem('tokentype', tokentype);
        window.dispatchEvent(new Event("StorageChange"));
        localStorage.setItem('user_id', user_id);
        if (tokentype === "Management")
        {navigate("/Management")}
        else if (tokentype === "Employee")
        {navigate("/Employee")}
        else {console.log("No type")}
        // Extract the token from the response data
        // Use the token to authenticate requests to your Rails API
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  console.log(token)
  return (
    <main>
      <h3>WELCOME</h3>
      <div>
        <label><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required value={username} onChange={handleUsernameChange} />
        <br />
        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required value={password} onChange={handlePasswordChange} />
        <button onClick={handleLoginClick}>LOG IN</button>
      </div>
      <div>
        {errorMessage}
      </div>
    </main>
  );
}

