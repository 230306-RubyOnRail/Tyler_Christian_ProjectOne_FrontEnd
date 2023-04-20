import React, { useState } from 'react';
import { Navbar } from './Navbar';

export function DeleteReimbursement() {
    const [deleteID, setDeleteID] = useState('');
    const [deleteMessage, setDeleteMessage] = useState('');
    const user_id = localStorage.getItem('user_id');

    const handleDeleteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDeleteID(event.target.value);
    };

    const handleDeleteClick = () => {
        fetch('http://ec2-3-132-179-108.us-east-2.compute.amazonaws.com:3000/reimbursements_delete/' + deleteID, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                user_id: user_id
            })
        })
            .then(response => {
                if (!response.ok) {
                    console.log("Error");
                }
                else {
                    setDeleteMessage("Reimbursement deleted");
                    console.log("Success");
                }
            }
            )
            .catch(error => {
                console.error('Error:', error);
            }
            );
    };

    return (
        <div>
            <h1>Delete a Reimbursement</h1>
            <input type="text" placeholder="Enter Reimbursement Number:" onChange={handleDeleteChange} />
            <button onClick={handleDeleteClick}>Delete Reimbursement</button>
            <p>{deleteMessage}</p>
        </div>
    );
}
