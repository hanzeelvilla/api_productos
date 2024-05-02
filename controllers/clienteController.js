//CONTROLLERS MANEJA LA BASE DE DATOS

let mysql = require("../bd/mysql")
module.exports = {
    listar:(req, res) => {
        mysql.query("select * from clientes", (err, rows, fields) => {
            if(err)
                res.json(err)
            else{
                //console.log(fields)
                res.json(rows)
            }   
        })
    },
    buscar:(req, res) => {
        mysql.query(`select * from clientes where id = ${req.params.id}`, (err, rows, fields) => {
            if(err)
            res.json(err)
            else{
                res.json(rows)
            }
        })
    },

    eliminar:(req, res) => {
        let id = req.params.id
        mysql.query(`delete from clientes where id = ${id}`, (err, rows, fields) => {
            if(err){
                console.log(err)
                res.json(err)
            }
            else{
                res.json(rows)
            }
        })
    }
}