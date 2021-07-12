var mysql = require('mysql2');

conexion = mysql.createConnection({ 
    host: 'localhost',
    user: 'root',
    password: ' ',
    database: 'ecommerce'
});


module.exports = conexion;
