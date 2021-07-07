var mysql = require('mysql2');

conexion = mysql.createConnection({ 
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'ecommerce'
});


module.exports = conexion;
