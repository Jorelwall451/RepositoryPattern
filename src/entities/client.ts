import { v4 as uuidv4 } from "uuid";

export class Client { 
    public id: string;
    public name: string;
    public email: string;
    public phone: string;

    constructor(props: Omit<Client, "id">, id: string = null){
        Object.assign(this, props);

        this.id = id;

        if(!id){
            this.id = uuidv4().toString();
        }
    }
}