import React, { useState } from 'react';
import { Navbar } from './Navbar';
import "./styles/ViewReimbursementsEmployee.css";

export function UpdateReimbursementEmployee() {
    const [updateID, setUpdateID] = useState('');
    const [updateAmount, setUpdateAmount] = useState('');
    const user_id = localStorage.getItem('user_id');
    const [updateSuccess, setUpdateSuccess] = useState(false);

    const handleUpdateIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateID(event.target.value);
    };

    const handleUpdateAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateAmount(event.target.value);
    };

    const handleUpdateClick = () => {
        fetch('http://ec2-3-132-179-108.us-east-2.compute.amazonaws.com:3000/reimbursements/' + updateID, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                user_id: user_id,
                amount: updateAmount
            })
        })
            .then(response => {
                if (!response.ok) {
                    console.log("Error");
                }
                else {
                    setUpdateSuccess(true);
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
            <h1>Update a Reimbursement</h1>
            <input type="text" placeholder="Enter Reimbursement Number:" onChange={handleUpdateIDChange} />
            <input type="text" placeholder="Enter New Amount:" onChange={handleUpdateAmountChange} />
            <button onClick={handleUpdateClick}>Update Reimbursement</button>
            {updateSuccess && <p>Update successful</p>}
        </div>
    );
}




// import React, { useState } from 'react'
// import { Navbar } from './Navbar'


// export function UpdateReimbursementEmployee() {
//     const [reimbursementID, setReimbursementID] = useState('');
//     const [reimbursementAmount, setReimbursementAmount] = useState('');
//     const [error, setError] = useState('');
//     const tokentype = localStorage.getItem('tokentype');
//     const [status, setStatus] = useState('');

//     const  handleReimbursementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setReimbursementAmount(event.target.value);
//     };

//     const handleReimbursementIDChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setReimbursementID(event.target.value);
//     };
    
//     const handleChangeReimbursementClick = () => {
        
//         fetch('http://localhost:3000/reimbursements/' + reimbursementID, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 amount: reimbursementAmount,
//                 status: "Pending"
//             })
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     console.log("Error");
//                 }
//                 else {
//                     console.log("Success");
//                 }
//             })
//             .catch(error => {
//                 console.error('Error:', error);
//             });
//     };


//     return(<div>
//         <h1>Update a Reimbursement</h1>
//         <input type="text" placeholder="Enter Reimbursement Number:" onChange={handleReimbursementIDChange} />
//         <input type="text" placeholder="Enter New Amount" onChange={handleReimbursementChange} />
//         {error && <p>{error}</p>}
//         <button onClick={handleChangeReimbursementClick}>Update Reimbursement</button>
//     </div>);
// }