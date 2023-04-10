import React from 'react';

export function HomeLanding()
{
    return (
        <main>
            <h3>WELCOME</h3>
            <div>
            <label><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>
            <br/>
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
            <button>LOG IN</button>
            </div>
        </main>
    );
}