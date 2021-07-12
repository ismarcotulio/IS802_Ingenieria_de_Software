import express from 'express'
import mysql from "mysql2"
import bodyParser from 'body-parser';
import cors from 'cors'


import { Database } from './dataBase.mjs';
import { ProductController } from './controllers/productController.mjs'
import { AuthController } from './controllers/authController.mjs';
import { TokenController } from './controllers/tokenController.mjs';

//Instancia de base de datos
const database = new Database(mysql)
database.getStatus()

//Instancias de controladores
const productController = new ProductController();
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

app.get('/test', function (req, res){
    res.send( productController.getProducts() )
})

app.listen(3000,()=>{
    console.log('Servidor iniciado en el puerto 3000') 
})