import React from 'react'
import {useState} from 'react'
export function AddUser() {
    const [eUsrName, set_eUsrName] = useState('');
    const [eUsrPassword, set_eUsrPassword] = useState('');
    const [eUsrType, set_eUserType] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleAccountMaker = () =>{
        console.log("handleReimbursements!!!");
        fetch('http://ec2-3-132-179-108.us-east-2.compute.amazonaws.com:3000/users_create/',
        {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                user_name: eUsrName,
                user_type: eUsrType,
                user_password: eUsrPassword
            })
        }).then(response=>{
            if(!response.ok){setErrorMessage("Could not create user: Check that userid is unique and password length is 6 characters min");}
            else{setErrorMessage("User Successfully Created");}
        })
    };

    const handleChange_eUsrName = (event:any) => {
        set_eUsrName(event.target.value);
    }
    const handleChange_eUsrPassword=(event:any)=>{
        set_eUsrPassword(event.target.value);
    }
    const handleChange_eUserType=(event:any)=>{
        const eUsrType = event.target.value.toLowerCase();
        const usrType = eUsrType.charAt(0).toUpperCase() + eUsrType.slice(1);
        if (usrType === "Employee" || usrType === "Management") {
            set_eUserType(usrType);
            setErrorMessage("");
            } else {
            setErrorMessage("User type must be 'Employee' or 'Management'");
            }

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
            <button onClick={handleAccountMaker}>Add User</button>
        </div>
        <div>
            {errorMessage}
        </div>
    </div>);
}