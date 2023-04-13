import React from "react";
import { Link } from 'react-router-dom';

type NavbarProps = {
  userrole: string;
}
function testForThings(){
  console.log("Token Type = "+localStorage.getItem('tokentype')+"-------");
}
export function Navbar() {
  return (
    <nav style={{ display: 'flex', flexDirection: 'row'}}>
      <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', margin: 0, padding: 0 , border:'2px solid black' }}>
        {localStorage.getItem('tokentype') !== "Management" ? (
          <li style={{ margin: '0 10px' }}><Link to="/submit-reimbursement">Submit a Reimbursement</Link></li>
        ) : (
          <li style={{ margin: '0 10px' }}><Link to="/add-user">Add a New User</Link></li>
        )}
        <li style={{ margin: '0 10px' }}><Link to="/view-reimbursements">View Reimbursements</Link></li>
        <li style={{ margin: '0 10px' }}><Link to="/update-reimbursement">Update or Delete a Reimbursement</Link></li>
        <button onClick={testForThings}>TEST </button>
      </ul>
    </nav>
  );
}

// this works 
// import React from "react";
// import { Link } from 'react-router-dom';

// type NavbarProps = {
//   userrole: string;
// }

// export function Navbar({ userrole }: NavbarProps) {
//   return (
//     <nav>
//       <ul>
//         {userrole === "Employee" ? (
//           <li><Link to="/submit-reimbursement">Submit a Reimbursement</Link></li>
//         ) : (
//           <li><Link to="/add-user">Add a New User</Link></li>
//         )}
//         <li><Link to="/view-reimbursements">View Reimbursements</Link></li>
//         <li><Link to="/update-reimbursement">Update or Delete a Reimbursement</Link></li>
//       </ul>
//     </nav>
//   );
// }