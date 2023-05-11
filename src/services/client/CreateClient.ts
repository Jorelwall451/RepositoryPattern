import { Client } from "entities/client";
import { IClientRepository } from "repository/ClientRepository";

export class CreateClientService { 
    constructor(
        private clientRepository: IClientRepository
    ) {};

    public async execute(props: Client): Promise<Client> {
        const client: Client = await this.clientRepository.create
        (props);

        return client;
    }
}