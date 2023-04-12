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
//update = https://github.com/230306-RubyOnRail/Tyler_Christian_ProjectOne_FrontEnd
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = '/' element={<HomeLanding/>}/>
        <Route path = '/Employee' element={<Employee/>}/>
        <Route path = '/Management' element={<Manager/>}/>
        <Route path = '/view-reimbursements' element = {<ViewReimbursements/>}/>
        <Route path = '/edit_Reimbursments' element={<EditReimbursement/>}/>
        <Route path = '/CreateEmployee' element={<CreateEmployee/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
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