import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomeLanding } from './components/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Employee } from './components/Employee';
import { Manager } from './components/Manager';
import { ViewReimbursements } from './components/ViewReimbursements';
import { CreateEmployee } from './components/CreateEmployee';
import { EditReimbursement } from './components/EditReimbursement';
import { Navbar } from './components/Navbar';
import {User} from './models/users'

//update = https://github.com/230306-RubyOnRail/Tyler_Christian_ProjectOne_FrontEnd
function App() {
  //localStorage.setItem('token', "NULL");
  //localStorage.setItem('tokentype', "NULL");
  //localStorage.setItem('user_id', "0");
  //localStorage.setItem('UsrLogin',0);
  return(
    <div className="App">
      
      <BrowserRouter>
      {/* {localStorage.getItem('token') != "NULL" ? (
        <> 
          <Navbar />
         </>
      ) : (
        
        <> 
        </>
      )} */}
      <Navbar />
      <Routes>
      
        <Route path = '/' element={<HomeLanding/>}/>
        <Route path = '/Employee' element={<Employee/>}/>
        <Route path = '/Management' element={<Manager/>}/>
        <Route path = '/view-reimbursements' element = {<ViewReimbursements/>}/>
        <Route path = '/update-reimbursement' element={<EditReimbursement/>}/>
        <Route path = '/add-user' element={<CreateEmployee/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
  // if()
  // {

  // };
}


export default App;


// function App() {
//   const [role, setRole] = useState<string>("")
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<SigninPage setRole={setRole}/>}/>
//       <Route path='/home' element={<HomePage role={role}/>}/>
//       <Route path='/register/employee' element={<RegisterEmployee/>}/>
//       <Route path='/register/admin' element={<RegisterAdmin/>}/>
//       <Route path='/newreimbursement' element={<NewReimbursement/>}/>
//       <Route path='/manage/reimbursements' element={<ManageReimbursementPage role={role}/>}/>
//       <Route path='/updatereimbursement/:id' element={<UpdateReimbursement/>}/>
//     </Routes>
//     </BrowserRouter>
//   );
// }

// return(
//   <div className="App">
    
//     <BrowserRouter>
//     <Routes>
//     {localStorage.getItem('token') != "NULL" ? (
//       <> 
//         <Navbar />
//        </>
//     ) 
    
//     : (
      
//       <> 
      
//       </>
//     )}
//       <Route path = '/' element={<HomeLanding/>}/>
//       <Route path = '/Employee' element={<Employee/>}/>
//       <Route path = '/Management' element={<Manager/>}/>
//       <Route path = '/view-reimbursements' element = {<ViewReimbursements/>}/>
//       <Route path = '/edit_Reimbursments' element={<EditReimbursement/>}/>
//       <Route path = '/CreateEmployee' element={<CreateEmployee/>}/>
//     </Routes>
//     </BrowserRouter>
//   </div>
// );