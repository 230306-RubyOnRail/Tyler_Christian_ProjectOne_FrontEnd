import React from 'react'
import {useState} from 'react'
export function CreateEmployee() {
    const [eUsrName, set_eUsrName] = useState('');
    const [eUsrPassword, set_eUsrPassword] = useState('');
    const [eUsrType, set_eUserType] = useState('');

    const handleAccountMaker = () =>{
        console.log("CREATE ACCOUNT!!!1");
        //fetch()
    }
    return(<div>
        <h1>CREATE EMPLOYEE</h1>
        <></>
    </div>);
}