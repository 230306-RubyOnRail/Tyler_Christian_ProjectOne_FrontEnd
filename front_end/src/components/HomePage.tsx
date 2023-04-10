import React, { useState } from 'react';

export function HomeLanding() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        user_password: password
      })
    })
      .then(response => {
        if(!response.ok) {
        setErrorMessage('Invalid username or password');}
        else {return response.json();}
    })
      .then(data => {
        const token = data.token;
        setToken(token);
        // Extract the token from the response data
        // Use the token to authenticate requests to your Rails API
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  console.log(token);

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