import { Client } from "entities/client";
import { FastifyRequest, FastifyReply } from "fastify";
import { ClientRepositoryModel } from "models/Client";
import { CreateClientService } from "services/client/CreateClient";
import { z } from "zod";

const clientRepositoryModel: ClientRepositoryModel = new ClientRepositoryModel();
const createClientService: CreateClientService = new CreateClientService(clientRepositoryModel);

export class CreateClientController { 

    async create(request: FastifyRequest, response: FastifyReply){
        const clientObject = z.object({
            name: z.string(),
            email: z.string(),
            phone: z.string()
        });
    
        const { name, email, phone } = clientObject.parse(request.body);

    
        try { 
            const client: Client = new Client({
                name,
                email,
                phone
            });
    
            const storageClient = await createClientService.execute(client);
    
            response.status(201);
            return storageClient;
        }catch(error){
            response.status(500);
            return response.send({
                "message": "unexpected Error",
                "error": error.message
            });
        }
    }
}