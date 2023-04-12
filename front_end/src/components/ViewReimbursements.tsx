import React from "react";

export function ViewReimbursements() {
  fetch('http://localhost:3000/reimbursement-manager/1', {
    method: 'GET'
  }).then(data =>{console.log("VIEW REIMBURSEMENTS:"+data.json().toString())}).then().catch(error=>{console.error('error',error);});

    return (
    <div>
      <h1>View Reimbursements</h1>
    </div>
  );
}