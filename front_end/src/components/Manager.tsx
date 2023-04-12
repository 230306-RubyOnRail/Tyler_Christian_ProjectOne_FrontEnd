import React from 'react'
import { Navbar } from './Navbar'

export function Manager() {
    const userrole: string = 'Manager';
    return (
        <div>
            <h1>Manager</h1>
            <Navbar userrole={userrole} />
        </div>
    )
}