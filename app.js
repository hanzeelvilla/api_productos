const express = require('express')
const cors = require('cors')
const app = express()
let router = require("./routes")

app.use(cors())
app.use(express.json())
//app.use(express.urlencoded({ extended: true }))

app.use("/api", router)

app.listen(3000, () => console.log("Jalanding"))