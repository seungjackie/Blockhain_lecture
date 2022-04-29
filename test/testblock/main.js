import { initHttpServer } from "./httpserver.js";
import { initP2PServer } from "./p2pserver.js";

const httpPort = parseInt(process.env.HTTP_PORT) || 3001;
const p2pPort = parseInt(process.env.P2P_PORT) || 6001;

initHttpServer(httpPort);
initP2PServer(p2pPort);