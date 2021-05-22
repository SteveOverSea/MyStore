export class OrderDb {
    id: number;
    user_id: number;
    status: boolean;

    constructor() {
        this.id = 0;
        this.user_id = 0;
        this.status = false;
    }
}