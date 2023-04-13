import React from "react";
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react'; 
type NavbarProps = {
  userrole: string;
}




export function Navbar() {
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('tokentype'));
  const testForThings = () =>{
    console.log("Token Type = "+localStorage.getItem('tokentype')+"-------");
    console.log("isLoggedIn = "+isLoggedIn+"-------");
  }
  
  const [count, setCount] = useState(0);

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

  // useEffect(()=>{
  //   console.log("USEEFFECT____");
  //   if(isLoggedIn !== localStorage.getItem('tokentype'))
  //   {
  //     console.log("NOT EQUAL"+isLoggedIn+"====="+localStorage.getItem('tokentype'));
  //   }
  //   else
  //   {
  //     console.log("ISEQUAL"+isLoggedIn+"====="+localStorage.getItem('tokentype'));
  //   }
  //   }
    
  //   );




  return (
    <>
    {isLoggedIn == "NULL"? (
    <>
    {/* COUNT {count} times {isLoggedIn} */}
    </>
    ):( <nav style={{ display: 'flex', flexDirection: 'row'}}>
      <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', margin: 0, padding: 0 , border:'2px solid black' }}>
        {isLoggedIn === "Employee" ? (
          <>
          {/* <li>EMPLOYEE {count} times {isLoggedIn}</li> */}
          <li style={{ margin: '0 10px' }}><Link to="/submit-reimbursement">Submit a Reimbursement</Link></li>
          </>
        ) : (
          <>
          {/* <li>MANAGER {count} times {isLoggedIn}</li> */}
          <li style={{ margin: '0 10px' }}><Link to="/add-user">Add a New User</Link></li></>
          
        )}
        <li style={{ margin: '0 10px' }}><Link to="/view-reimbursements">View Reimbursements</Link></li>
        <li style={{ margin: '0 10px' }}><Link to="/update-reimbursement">Update or Delete a Reimbursement</Link></li>
        {/* <button onClick={testForThings}>TEST </button> */}
      </ul>
    </nav>)
    }
   
  </>
    
  );

}

{/* <nav style={{ display: 'flex', flexDirection: 'row'}}>
        <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', margin: 0, padding: 0 , border:'2px solid black' }}>
          {}
          <li style={{ margin: '0 10px' }}><Link to="/add-user">Add a New User</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/view-reimbursements">View Reimbursements</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/update-reimbursement">Update or Delete a Reimbursement</Link></li>
          <button onClick={testForThings}>TEST </button>
        </ul>
      </nav> */}





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


// if(localStorage.getItem('tokentype') === "NULL" ){
//   return(<></>);
// }
// else if(localStorage.getItem('tokentype') === "Manager" )
// {
//   return (
//     <nav style={{ display: 'flex', flexDirection: 'row'}}>
//       <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', margin: 0, padding: 0 , border:'2px solid black' }}>
//         <li style={{ margin: '0 10px' }}><Link to="/add-user">Add a New User</Link></li>
//         <li style={{ margin: '0 10px' }}><Link to="/view-reimbursements">View Reimbursements</Link></li>
//         <li style={{ margin: '0 10px' }}><Link to="/update-reimbursement">Update or Delete a Reimbursement</Link></li>
//         <button onClick={testForThings}>TEST </button>
//       </ul>
//     </nav>
//     );
// }
// else{
//   return (
//     <nav style={{ display: 'flex', flexDirection: 'row'}}>
//       <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', margin: 0, padding: 0 , border:'2px solid black' }}>
//         <li style={{ margin: '0 10px' }}><Link to="/submit-reimbursement">Submit a Reimbursement</Link></li>
//         <li style={{ margin: '0 10px' }}><Link to="/view-reimbursements">View Reimbursements</Link></li>
//         <li style={{ margin: '0 10px' }}><Link to="/update-reimbursement">Update or Delete a Reimbursement</Link></li>
//         <button onClick={testForThings}>TEST </button>
//       </ul>
//     </nav>
//   );
// }
