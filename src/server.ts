import fastify from "fastify";
import * as dotenv from "dotenv";
import useRoutes from "routers";

dotenv.config();

export const server = fastify();
const port: number = process.env.PORT;

async function main(): Promise<void> {

    server.register(useRoutes);

    try { 
        await server.listen({
            port,
            host: "localhost"
        });

        console.log(`The server is running on port ${port}.
        link: \u001b[34mhttp://localhost:${port}\u001b[0m`);
    }catch(error) {
        console.error(error);
        process.exit(1);
    }
}

main();