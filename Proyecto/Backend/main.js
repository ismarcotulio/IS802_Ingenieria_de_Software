import express from 'express';
import mysql from "mysql2";
import bodyParser from 'body-parser';
import cors from 'cors';


import { Database } from './database.mjs';
import { ProductController } from './controllers/productController.mjs'
import { AuthController } from './controllers/authController.mjs';
import { TokenController } from './controllers/tokenController.mjs';

import {Router,CategoriaRouter} from './routers/categoria-router.js';
import {Router2,DepartamentoRouter} from './routers/departamento-router.js'

//Configuracion express
const config = {
	llave : "EcommerceSecretPassword2021*"
};

//Instancia de express y llave maestra
var app = express()
app.set('llave', config.llave);

//Instancia de base de datos
const database = new Database(mysql)
database.getStatus()


//Instancias de controladores
const productController = new ProductController(database);
const authController = new AuthController(database);
const tokenController = new TokenController();

//Instancia de routers
const categoriaRouter = new CategoriaRouter(database, app.get('llave'))
const departamentoRouter = new DepartamentoRouter(database,app.get('llave'))


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());
app.use('/categoria', Router)
app.use('/departamento',Router2)


//Rutas
app.post('/login', async (req,res) =>{
    authController.login(req,res,app.get("llave"))
})
app.post('/signUp', async (req, res) => {
    authController.signUp(req, res, app.get("llave"))
})

app.post('/verify',tokenController.middleVerifyToken, function(req,res){
    tokenController.verifyToken(req,res,app.get('llave'))
})

app.listen(3000,()=>{
    console.log('Servidor iniciado en el puerto 3000') 
})
