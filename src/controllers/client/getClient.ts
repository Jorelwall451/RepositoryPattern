import { FastifyRequest, FastifyReply } from "fastify";
import { ClientRepositoryModel } from "models/Client";
import { GetClientService } from "services/client/GetClient";

const clientRepositoryModel: ClientRepositoryModel = new ClientRepositoryModel();
const getClientService: GetClientService = new GetClientService(clientRepositoryModel);

export class GetClientController { 

    async get(request: FastifyRequest, response: FastifyReply){
    
        try { 
            const client = await getClientService.execute();
    
            response.status(200);
            return client;
        }catch(error){
            response.status(500);
            return response.send({
                "message": "unexpected Error",
                "error": error.message
            });
        }
    }
}