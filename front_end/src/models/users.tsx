export class User {
    id: number;
    token: string;
    name: string;
    userType: string;
    
    constructor(id: number, token: string, name: string){
        this.id = id;
        this.token = token;
        this.name = name;
        this.userType = "user";
    }
}