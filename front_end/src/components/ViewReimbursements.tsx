import React from "react";

export function ViewReimbursements() {
  fetch('http://localhost:3000/reimbursement-manager/1', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => {
      console.log("VIEW REIMBURSEMENTS:", JSON.stringify(data));
    })
    .catch(error => {
      console.error('error', error);
    });

  return (
    <div>
      <h1>View Reimbursements</h1>
    </div>
  );
}