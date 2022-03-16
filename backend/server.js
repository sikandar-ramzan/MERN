const express = require("express")
const dotenv = require("dotenv").config()
const colors = require("colors")
const connectDB = require("../backend/config/db")
const PORT = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(PORT, () => console.log(`Server is listening on Port: ${PORT}`))

