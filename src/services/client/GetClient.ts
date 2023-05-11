import { Client } from "entities/client";
import { IClientRepository } from "repository/ClientRepository";

export class GetClientService { 
    constructor(
        private clientRepository: IClientRepository
    ) {};

    public async execute(): Promise<Client[]> {
        const client: Client[] = await this.clientRepository.get();

        return client;
    }
}