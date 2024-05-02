let router = require("express").Router()

clientes = require("./clientes.js")

router.use("/clientes", clientes)

module.exports = router