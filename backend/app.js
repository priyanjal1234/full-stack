const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors({
    credentials: true
}))

app.get("/",function(req,res) {
    res.send("Hello React from backend")
})

const PORT = process.env.PORT || 4000
app.listen(PORT)
