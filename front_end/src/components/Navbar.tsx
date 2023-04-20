import React from "react";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

type NavbarProps = {
  userrole: string;
}

function testForThings(){
  console.log("Token Type = "+localStorage.getItem('tokentype')+"-------");
}


export function Navbar() {
  const token = localStorage.getItem('token');

  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('tokentype'));
  
  useEffect(() => {
    const handleStoreChange =()=>{
      setLoggedIn(localStorage.getItem('tokentype'));
    }
  // setTimeout(() => {
    window.addEventListener('StorageChange',handleStoreChange);
  //   setCount((count) => count + 1);
  // }, 100);
  return () => window.removeEventListener('StorageChange',handleStoreChange);
},[]);
  if (!token) {
  return null;
  }
  return (

    <nav style={{ display: 'flex', flexDirection: 'row'}}>
      <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', margin: 0, padding: 0 , border:'2px solid black' }}>
        {localStorage.getItem('tokentype') !== "Management" ? (
          <li style={{ margin: '0 10px' }}><Link to="/submit-reimbursement">Submit a Reimbursement</Link></li>
        ) : (
          <li style={{ margin: '0 10px' }}><Link to="/add-user">Add a New User</Link></li>
        )}


        {localStorage.getItem('tokentype') !== "Management" ? (
          <li style={{ margin: '0 10px' }}><Link to='/view-reimbursements-employee'>View Reimbursements</Link></li>
        ) : (
          <li style={{ margin: '0 10px' }}><Link to="/view-reimbursements">View Reimbursements</Link></li>
        )}


        {localStorage.getItem('tokentype') !== "Management" ? (
          <li style={{ margin: '0 10px' }}><Link to="/update-reimbursement-employee">Update a Reimbursement</Link></li>
        ) : (
          <li style={{ margin: '0 10px' }}><Link to="/update-reimbursement">Update a Reimbursement</Link></li>
        )}

        {localStorage.getItem('tokentype') !== "Management" ? (
          <li style={{ margin: '0 10px' }}>
            <Link to="/delete-reimbursement-employee">Delete a Reimbursement</Link>
          </li>
        ) : <li style={{ margin: '0 10px' }}>
        <Link to="/delete-reimbursement">Delete a Reimbursement</Link>
      </li>}
      </ul>
    </nav>
  );
}

