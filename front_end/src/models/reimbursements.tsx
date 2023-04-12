export class User {
    reimbursement_id: number;
    user_id: number;
    descr: string;
    amount: string;
    date_submitted: string;
    date_approved: string | null;
    status: string;
    
    constructor(reimbursement_id: number, user_id: number, descr: string, amount: string, date_submitted: string, date_approved: string | null, status: string){
        this.reimbursement_id = reimbursement_id;
        this.user_id = user_id;
        this.descr = descr;
        this.date_submitted = date_submitted;
        this.date_approved = date_approved;
        this.amount = amount;
        this.status = status;
    }
}