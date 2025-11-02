import server from "./app.js"
import { PORT } from "./config.js"

server.listen({ host: "0.0.0.0", port: Number(9090) })
console.log("====================================")
console.log(`Running new server on http://localhost:${PORT}`)

console.log("====================================")
