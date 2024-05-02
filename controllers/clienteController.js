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
        mysql.query('select * from clientes where id = ?', req.params.id, (err, rows, fields) => {
            if(err)
            res.json(err)
            else
                res.json(rows)
        })
    },
    agregar:(req, res) => {
        let nombre = req.body.nombre
        let rfc = req.body.rfc
        let celular = req.body.celular
        let calle = req.body.celular
        let numero = req.body.numero
        let codigopostal = req.body.codigopostal

        mysql.query('insert into clientes (nombre, rfc, celular, calle, numero, codigopostal) values (?, ?, ?, ?, ?, ?)', [nombre, rfc, celular, calle, numero, codigopostal], (err, rows, fields) => {
            if(err)
                res.json(err)
            else
                res.json(rows)
        })
    },
    eliminar:(req, res) => {
        let id = req.params.id
        mysql.query('delete from clientes where id = ?', id, (err, rows, fields) => {
            if(err){
                console.log(err)
                res.json(err)
            }
            else
                res.json(rows)
        })
    }
}