import { prisma } from "database/prisma";
import { Client } from "entities/client"
import { IClientRepository } from "repository/ClientRepository"

export class ClientRepositoryModel implements IClientRepository { 
    public async get(): Promise<Client[]> {
        const clients: Client[] = await prisma.client.findMany();

        return clients;
    }

    public async create(props: Client): Promise<Client> {
        const { id, name, email, phone } = props;

        const nameAlreadyExists = await prisma.client.findFirst({
            where: { 
                name
            }
        });

        const emailAlreadyExists = await prisma.client.findFirst({
            where: { 
                email
            }
        });

        const phoneAlreadyExists = await prisma.client.findFirst({
            where: { 
                phone
            }
        });

        if(nameAlreadyExists){
            throw new Error("The name already exists");
        }

        if(emailAlreadyExists){
            throw new Error("The email already exists");
        }

        if(phoneAlreadyExists){
            throw new Error("The phone already exists");
        }

        const client: Client = await prisma.client.create({
            data: {
                id,
                name,
                email,
                phone,
            }
        });

        return client;
    }
}