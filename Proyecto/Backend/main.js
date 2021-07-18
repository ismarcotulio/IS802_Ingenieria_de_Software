import express from 'express';
import mysql from "mysql2";
import bodyParser from 'body-parser';
import cors from 'cors';


import { Database } from './database.mjs';
import { ProductController } from './controllers/productController.mjs'
import { AuthController } from './controllers/authController.mjs';
import { TokenController } from './controllers/tokenController.mjs';

//Instancia de base de datos
const database = new Database(mysql)
database.getStatus()


//Instancias de controladores
const productController = new ProductController(database);
const authController = new AuthController(database);
const tokenController = new TokenController();


//Configuracion express
const config = {
	llave : "EcommerceSecretPassword2021*"
};

var app = express()
app.set('llave', config.llave);
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());


//Rutas
app.post('/login', async (req,res) =>{
    authController.login(req,res,app.get("llave"))
})
app.post('/signUp', async (req, res) => {
    authController.signUp(req, res, app.get("llave"))
})

app.post("/verify", tokenController.middleVerifyToken, (req , res) => {
    tokenController.verifyToken( req, res, app.get("llave"))
    
});

app.get('/categoria/tecnologia', function (req, res){
    res.send(productController.getProducts())
})

app.get('/categoria/arte-artesania', function (req, res){
    res.json({'producto': "Computadora"})
})

app.get('/categoria/hogar', function (req, res){
    
})

app.get('/categoria/industrial', function (req, res){
    
})

app.get('/categoria/automotriz', function (req, res){
    
})

app.get('/categoria/salud-belleza', function (req, res){
    
})

app.get('/categoria/viajes-equipaje', function (req, res){
    
})

app.get('/categoria/alimentos', function (req, res){
    
})

app.get('/categoria/jugueteria', function (req, res){
    
})

app.get('/categoria/mascotas', function (req, res){
    
})

app.get('/categoria/deporte', function (req, res){
    
})

app.listen(3000,()=>{
    console.log('Servidor iniciado en el puerto 3000') 
})
