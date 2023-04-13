import React from 'react'
import {useState} from 'react'
export function CreateEmployee() {
    const [eUsrName, set_eUsrName] = useState('');
    const [eUsrPassword, set_eUsrPassword] = useState('');
    const [eUsrType, set_eUserType] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleAccountMaker = () =>{
        console.log("handleReimbursements!!!");
        fetch('http://localhost:3000/users_create/',
        {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                user_name: eUsrName,
                user_type: eUsrPassword,
                user_password: eUsrType
            })
        }).then(response=>{
            if(!response.ok){setErrorMessage("PROBLEM");}
            else{setErrorMessage("NO PROBLEM");}
        })
    };

    const handleChange_eUsrName = (event:any) => {
        set_eUsrName(event.target.value);
    }
    const handleChange_eUsrPassword=(event:any)=>{
        set_eUsrPassword(event.target.value);
    }
    const handleChange_eUserType=(event:any)=>{
        set_eUserType(event.target.value);
    }
   



    return(<div>
        <h1>CREATE EMPLOYEE</h1>
        <div>
            <label>User_Name: </label>
            <input type = "text" name= "User_Name" required value = {eUsrName} onChange={handleChange_eUsrName}/>
            <br />
            <label>User_Password</label>
            <input type="text" name="User_Password" onChange={handleChange_eUsrPassword}/>
            <br />
            <label>User_Type</label>
            <input type = "text" min="0.01" step="0.01" name = "User_Type"onChange={handleChange_eUserType}/>
            <br />
            <button onClick={handleAccountMaker}>CHANGE</button>
        </div>
        <div>
            {errorMessage}
        </div>
    </div>);
}