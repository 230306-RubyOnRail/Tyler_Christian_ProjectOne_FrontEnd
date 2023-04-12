import React from "react";

function getReimbToTable(usrIN:JSON)
{
  return(
    <tr>
      <td>
        usrIn.
      </td>
    </tr>
  )
}

export function ViewReimbursements() {
  let arrayThing: Array<JSON>;
  fetch('http://localhost:3000/reimbursement-manager/1', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(data => {
      arrayThing = data.reimbursements;
      arrayThing.forEach(e=>{console.log("TEST" + JSON.stringify(e))});
      
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