import fastify from "fastify"
import cors from "@fastify/cors"

// setup fastify server
const server = fastify({ logger: true })

// ---------------------------------------------------------------------------
// registered fastify dependencies
// ---------------------------------------------------------------------------

server.register(cors, {
  origin: ["http://localhost:3010"],
  methods: ["GET", "PUT", "POST", "PATCH", "DELETE", "OPTIONS"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, //Credentials are authorization header
  allowedHeaders: [
    "token",
    "Origin",
    "Accept",
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "device-remember-token",
    "Access-Control-Allow-Origin",
  ],
})

// ---------------------------------------------------------------------------
// fastify routes
// ---------------------------------------------------------------------------

export default server
