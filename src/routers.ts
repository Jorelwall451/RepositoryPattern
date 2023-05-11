import { CreateClientController } from "controllers/client/createClient";
import { GetClientController } from "controllers/client/getClient";
import { FastifyInstance } from "fastify";

const getClientController: GetClientController = new GetClientController();
const createClientController: CreateClientController = new CreateClientController();

export default async function useRoutes(server: FastifyInstance){
    server.get("/clients", getClientController.get);
    server.post("/clients", createClientController.create);
}