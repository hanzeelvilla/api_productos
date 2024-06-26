//RECIBE PETICIONES Y LAS RESUELVE EL CONTROLADOR 
let clienteController = require("../controllers/clienteController")
let router = require("express").Router()

router.get("/", (req, res) => {
    clienteController.listar(req, res)
})
router.get("/:id", (req, res) => {
    clienteController.buscar(req, res)
})

router.post("/", (req, res) => {
    clienteController.agregar(req, res)
})

router.delete("/:id", (req, res) => {
    clienteController.eliminar(req, res)
})

module.exports = router