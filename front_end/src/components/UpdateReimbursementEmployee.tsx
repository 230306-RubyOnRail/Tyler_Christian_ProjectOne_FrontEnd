import React, { useState } from 'react'
import { Navbar } from './Navbar'


export function UpdateReimbursementEmployee() {
    const [reimbursementID, setReimbursementID] = useState('');
    const [reimbursementAmount, setReimbursementAmount] = useState('');
    const [error, setError] = useState('');
    const tokentype = localStorage.getItem('tokentype');
    const [status, setStatus] = useState('');

    const  handleReimbursementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReimbursementAmount(event.target.value);
    };

    const handleReimbursementIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReimbursementID(event.target.value);
    };
    
    const handleChangeReimbursementClick = () => {
        
        fetch('http://localhost:3000/reimbursements/' + reimbursementID, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: reimbursementAmount,
                status: "Pending"
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
        <h1>Update a Reimbursement</h1>
        <input type="text" placeholder="Enter Reimbursement Number:" onChange={handleReimbursementIDChange} />
        <input type="text" placeholder="Enter New Amount" onChange={handleReimbursementChange} />
        {error && <p>{error}</p>}
        <button onClick={handleChangeReimbursementClick}>Update Reimbursement</button>
    </div>);
}