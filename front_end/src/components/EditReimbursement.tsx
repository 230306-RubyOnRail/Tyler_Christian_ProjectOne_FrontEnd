import React from 'react'
import {useState} from 'react'



export function EditReimbursement() {
    const [r2Edit, setr2Edit] = useState('');
    const [rDesc, setDesc] = useState('');
    const [rAmount, setAmount] = useState('');
    const [rStatus, setStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    //r2Edit:number,rDesc:string,rAmount:number,rStatus:string
    const handleReimbursementChanger =() =>{
        console.log("handleReimbursements!!!");
        fetch('http://localhost:3000/reimbursements/'+r2Edit,
        {
            method:'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                status: rStatus,
                amount: rAmount,
                date_approved: Date.now()
            })
        }).then(response=>{
            if(!response.ok){setErrorMessage("PROBLEM");}
            else{setErrorMessage("NO PROBLEM");}
        })
    };
    const handleChange_r2Edit = (event:any) => {
        setr2Edit(event.target.value);
    }
    const handleChange_rDesc=(event:any)=>{
        setDesc(event.target.value);
    }
    const handleChange_Amount=(event:any)=>{
        setAmount(event.target.value);
    }
    const handleChange_Status=(event:any)=>{
        setStatus(event.target.value);
    }



    return(
    <div>
        <h1>EditReimbursement</h1>
        <div>
            <label>Reimbursement To Edit: </label>
            <input type = "number" name= "ReimbursementToEdit" required value = {r2Edit} onChange={handleChange_r2Edit}/>
            <br />
            <label>Description</label>
            <input type="text" name="reimbDesc" onChange={handleChange_rDesc}/>
            <br />
            <label>Amount</label>
            <input type = "number" min="0.01" step="0.01" name = "ReimbAmount"onChange={handleChange_Amount}/>
            <br />
            <label>Status</label>
            <input type="text" name="reimbStatus" onChange={handleChange_Status}/>
            <button onClick={handleReimbursementChanger}>CHANGE</button>
        </div>
        <div>
            {errorMessage}
        </div>
    </div>

    );
}

// {
//   "user_id":"1",
//    "descr":"SUPER TEST VALUE",
// 	"amount":"40.0",
// 	"date_submitted":"2023-04-12 00:10:00",
//  	"status":"UNSEEN"
//  }