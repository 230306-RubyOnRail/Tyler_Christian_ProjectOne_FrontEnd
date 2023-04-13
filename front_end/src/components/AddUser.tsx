import React, { useState } from 'react'

export function AddUser() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handleUserTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const userType = event.target.value.toLowerCase();
        if (userType === "employee" || userType === "management") {
          setUserType(userType);
          setError("");
        } else {
          setError("User type must be 'employee' or 'management'");
        }
    };
    const handleAddUserClick = () => {
        fetch('http://localhost:3000/users_create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                user_password: password,
                user_type: userType
            })
        })
            .then(response => {
                if (!response.ok) {
                    console.log("Error");
                }
                else {
                    console.log("Success");
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    return(<div>
        <h1>CREATE EMPLOYEE</h1>
        <input type="text" placeholder="Username" onChange={handleUsernameChange} />
        <input type="password" placeholder="Password" onChange={handlePasswordChange} />
        <input type="text" placeholder="User Type" onChange={handleUserTypeChange} />
        {error && <p>{error}</p>}
        <button onClick={handleAddUserClick}>ADD USER</button>
    </div>);
}