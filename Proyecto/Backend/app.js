const express = require('express');
const bodyParser = require('body-parser');

const conexion = require('./database');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/server',(req,res)=>{
    res.send('Bienvenido..')
});


conexion.query('CALL extraer( "Dayriela", @email );', (error,results, fields)=>{
    if(error) throw error;

    conexion.query('SELECT @email; ', (error,results, fields)=>{
        if(error) throw error;
        console.log(results);

    });
});


app.get('/salir', (req,res)=>{
    conexion.end(); //=============
    res.send('Conexion con la BD, terminada.')
});


app.listen(3000, ()=>{
    console.log('servidor iniciado. ');

    
    conexion.connect((e)=>{
        if(e){
            // throw e;
            console.log('error');
        }else{
            console.log('Conexion con DB exitosa.')
        }
    });
})