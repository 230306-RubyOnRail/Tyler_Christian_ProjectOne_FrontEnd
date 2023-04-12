import React from 'react'
import { Navbar } from './Navbar'

export function Manager() {
    const userrole: string = 'Manager';
    console.log("This is a barrier of separation")
    console.log(localStorage.getItem('token'))
    console.log(localStorage.getItem('user_id'))
    console.log("--------------------------------");
    console.log(localStorage.getItem('tokentype'))
    return (
        
        <div>
            <h1>Manager</h1>
        </div>
    )
}