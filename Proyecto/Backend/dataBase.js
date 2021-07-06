var mysql = require('mysql2');

conexion = mysql.createConnection({ 
    host: 'localhost',
    user: 'root',
    password: 'root1234',
    database: 'ecommerce'
});


module.exports = conexion;
