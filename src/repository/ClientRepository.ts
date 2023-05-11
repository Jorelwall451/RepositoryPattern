import { Client } from "entities/client";

export interface IClientRepository { 
    get(): Promise<Client[]>
    create(props: Client): Promise<Client>;
}