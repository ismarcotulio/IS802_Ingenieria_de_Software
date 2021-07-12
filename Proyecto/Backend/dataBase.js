var mysql = require('mysql2');

conexion = mysql.createConnection({ 
    host: 'localhost',
    user: 'root',
    password: 'jafethfer10',
    database: 'ecommerce'
});


module.exports = conexion;
