import express from "express"
import { Express } from "express"
import auth from "./middleware/auth"
import { networkInterfaces } from "os"
import router from "./routes/execRoute"
import router2 from "./routes/connection-test"
import cors from "cors"
const app: Express = express()
const config: { ip?: string, port?: number } = {}

app.use(express.json())
app.use(cors())

app.use(auth)
app.use("/", router2)
app.use("/", router)

const ethernetInfo: any = networkInterfaces().enp37s0
config.ip = ethernetInfo[0].address as string
config.port = 1234

app.listen(config.port, config.ip)



