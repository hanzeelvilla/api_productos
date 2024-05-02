//CONEXION A LA BASE DE DATOS
const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'hanzeelSQL1234',
  database : 'pfv'
});
 
connection.connect((err) => {
    if(err)
        console.log(err)
    else
    console.log("Conectado a la BD")
});

 /*
connection.query('SELECT * FROM clientes', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
*/

module.exports = connection 
//connection.end();