import express from "express"
import cors from "cors"
import router from "./api/router.js"

// create express app
const app = express()

// set up middleware
app.use(cors())
app.use(express.json())

// set up intiial routes
app.use("/api/v1/watertracker", router)
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app
