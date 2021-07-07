const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const conexion = require('./database');
const cors = require('cors');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.get('/server',(req,res)=>{
    res.send('Bienvenido..')
});


//api retorna token, al ingresar.
app.post("/login", (req , res) => {
    const user = {
        email: req.body.email,
        password : req.body.password
}


//jwt.sign({user}, 'secretkey', {expiresIn: '40s'}, (err, token) => {
    jwt.sign({user}, 'secretkey', (err, token) => {
        res.json({
            token
        });
    });
});



//Pruebas Querys.

/* conexion.query('CALL extraer( "Dayriela", @email );', (error,results, fields)=>{
    if(error) throw error;

    conexion.query('SELECT @email; ', (error,results, fields)=>{
        if(error) throw error;
        console.log(results);

    });
}); */

conexion.query('select * from user;', (error,results, fields)=>{
    if(error) throw error;

    console.log(results);
    
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