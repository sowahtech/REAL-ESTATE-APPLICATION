import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import http from 'http'
import { ConnectDB } from './config/db.js'


const app = express()
const PORT = 5000

// DB

ConnectDB()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes

app.get("/", (req, res) => {
    res.send('API WORKING')
})

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})

