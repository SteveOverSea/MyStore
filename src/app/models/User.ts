export class User {
    id?: number;
    first_name: string;
    last_name: string;
    password: string;
    is_admin?: boolean;

    constructor() {
        this.first_name = "";
        this.last_name = "";
        this.password = "";
        this.is_admin = false;
    }
}