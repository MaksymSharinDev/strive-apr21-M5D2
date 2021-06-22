import express from "express"
import listEndpoints from "express-list-endpoints"
import cors from "cors"

import usersRouter from "./services/author/index.js"

const server = express()

const port = 3001

server.use(cors())
server.use(express.json()) // If I don't specify this line BEFORE all the endpoints, all the request bodies are going to be undefined

// ********** ENDPOINTS ***************

server.use("/author", usersRouter)
server.use("/books", booksRouter)

console.table(listEndpoints(server))

server.listen(port, () => {
  console.log("Server is running on port " + port)
})
