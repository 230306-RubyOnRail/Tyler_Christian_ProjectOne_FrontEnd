import React, { useState } from 'react';
import { Navbar } from './Navbar';

export function SubmitReimbursement() {
  const [reimbursementAmount, setReimbursementAmount] = useState('');
  const [reimbursementDescription, setReimbursementDescription] = useState('');
  const userrole = 'Employee';
  const user_id = localStorage.getItem('user_id');

  const handleReimbursementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReimbursementAmount(event.target.value);
  };

  const handleReimbursementReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReimbursementDescription(event.target.value);
  };

  const handleAddUserClick = () => {
    fetch('http://localhost:3000/reimbursement_lists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: reimbursementAmount,
        description: reimbursementDescription,
        user_id: user_id
      })
    })
  };

  return (
    <div>
      <h1>Submit Reimbursement</h1>
      <Navbar />
      <input type="text" placeholder="Enter Reimbursement Amount:" onChange={handleReimbursementChange} />
      <input type="text" placeholder="Enter Reimbursement Reason:" onChange={handleReimbursementReasonChange} />
      <button onClick={handleAddUserClick}>Submit Reimbursement</button>
    </div>
  );
}