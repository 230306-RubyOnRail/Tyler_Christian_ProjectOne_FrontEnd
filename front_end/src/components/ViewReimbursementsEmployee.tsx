import React, { useState, useEffect } from "react";
import {Navbar} from './Navbar';
type Reimbursement = {
  reimbursement_id: number;
  user_id: number;
  descr: string;
  amount: string;
  date_submitted: string;
  date_approved: string | null;
  status: string;
};

type Props = {
  reimbursements: Reimbursement[];
};

function ReimbursementTable(props: Props) {
  const { reimbursements } = props;

  if (!Array.isArray(reimbursements)) {
    return <p>Loading...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Amount</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {reimbursements.map((reimbursement) => (
          <tr key={reimbursement.reimbursement_id}>
            <td>{reimbursement.reimbursement_id}</td>
            <td>{reimbursement.amount}</td>
            <td>{reimbursement.descr}</td>
            <td>{reimbursement.status}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function ViewReimbursementsEmployee() {
  const [reimbursements, setReimbursements] = useState<Reimbursement[]>([]);
  const user_id = localStorage.getItem('user_id');
  console.log(user_id)
  useEffect(() => {
    fetch("http://ec2-3-132-179-108.us-east-2.compute.amazonaws.com:3000/reimbursement/" + user_id)
      .then((response) => response.json())
      .then((data) => {
        console.log("VIEW REIMBURSEMENTS:", JSON.stringify(data));
        setReimbursements(data.reimbursements); // <-- update state here
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);
  console.log();
  return (
    <div>
      <h1>View Reimbursements</h1>
      {reimbursements.length > 0 ? (
        <ReimbursementTable reimbursements={reimbursements} />
      ) : (
        <p>There are no current reimbursements!</p>
      )}
    </div>
  );
}