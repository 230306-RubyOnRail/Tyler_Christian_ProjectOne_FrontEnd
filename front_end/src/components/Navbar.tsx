
import React from "react";
import { Link } from 'react-router-dom';

export  function Navbar() {
  return (
    <nav>
      <ul>
        {/* {userrole === "Employee" ? (
          <li><Link to="SubmitReimbursement">Submit a Reimbursement</Link></li>
        ) : (
          <li><Link to="AddUser">Add a New User</Link></li>
        )} */}
        <li><Link to="ViewReimbursements">View Reimbursements</Link></li>
        <li><Link to="UpdateReimbursement">Update or Delete a Reimbursement</Link></li>
      </ul>
    </nav>
  );
}



// import React from "react";
// import { Link } from 'react-router-dom';


// export  function Navbar() {
//     return (
//         <nav>
//             <ul>
//                 {userrole === "Employee" ? (
//                     <li><Link to="SubmitReimbursement">Submit a Reimbursement</Link> </li>
//                 ) : (<li><Link to="AddUser">Add a New User</Link></li>)}
//                 <li><Link to="ViewReimbursements">View Reimbursements</Link> </li>
//                 <li><Link to="UpdateReimbursement">Update or Delete a Reimbursement</Link> </li>
//             </ul>
//         </nav>
//     )
// }