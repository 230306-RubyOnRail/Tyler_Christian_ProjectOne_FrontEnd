import React from 'react'
import { Navbar } from './Navbar'
export function Employee() {
    const userrole = 'Employee';
    return (
        <div>
            <Navbar userrole={userrole} />
            <h1>Employee</h1>
        </div>
    )
}