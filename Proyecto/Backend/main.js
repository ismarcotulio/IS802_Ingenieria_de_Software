import express from 'express';
import mysql from "mysql2";
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from "nodemailer";

import { Database } from './database.mjs';
import { Mailer } from './mailer.mjs';

import { ProductController } from './controllers/productController.mjs'
import { AuthController } from './controllers/authController.mjs';
import { TokenController } from './controllers/tokenController.mjs';

import {Router,CategoriaRouter} from './routers/categoria-router.js';
import {Router2,DepartamentoRouter} from './routers/departamento-router.js'
import { EmailController } from './controllers/emailController.mjs';


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

//Instancia de servidor para el envio de correos
const mailer = new Mailer(nodemailer)

//Instancias de controladores
const productController = new ProductController(database);
const authController = new AuthController(database);
const tokenController = new TokenController();
const emailController = new EmailController(mailer, database);

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

app.get('/categoria-departamento', (req,res)=>{
    let categoria = 0
    let departamento = 0
    switch (req.departamento){
        case 'FranciscoMorazan':    
            departamento = 1
            break;
        case 'comayagua':           
            departamento = 2
            break;
        case 'islas-de-la-bahia':
            departamento = 3
            break;
        case 'santa-barbara':
            departamento = 4
            break;
        case 'colon':
            departamento = 5
            break;
        case 'olancho':
            departamento = 6
            break;
        case 'yoro':
            departamento = 7
            break;
        case 'gracias-a-dios':
            departamento = 8
            break;
        case 'cortes':
            departamento = 9
            break;
        case 'el-paraiso':
            departamento = 10
            break;
        case 'copan':
            departamento = 11
            break;
        case 'ocotepeque':
            departamento = 12
            break;
        case 'lempira':
            departamento = 13
            break;
        case 'intibuca':
            departamento = 14
            break;
        case 'la-paz':
            departamento = 15
            break;
        case 'valle':
            departamento = 16
            break;
        case 'atlantida':
            departamento = 17
            break;
        case 'choluteca':
            departamento = 18
            break;
        default:
            res.send('Categoria invalida')
    }
    switch(req.categoria){
        case 'tecnologia':
            categoria = 1
            break;
        case 'arte-artesania':
            categoria = 2
            break;
        case 'hogar':
            categoria = 3
            break;
        case 'industrial':
            categoria = 4
            break;
        case 'automotriz':
            categoria = 5
            break;
        case 'salud-belleza':
            categoria = 6
            break;
        case 'viajes-equipaje':
            categoria = 7
            break;
        case 'alimentos':
            categoria = 8
            break;
        case 'jugueteria':
            categoria = 9
            break;
        case 'mascotas':
            categoria = 10
            break;
        case 'deportes':
            categoria = 11
            break;
        default:
            res.send('Categoria invalida')
    }
    database.getMultipleFilters(categoria,departamento)
    .then(results=>{
        res.send(results)
    })
})

app.post('/verify',tokenController.middleVerifyToken, function(req,res){
    tokenController.verifyToken(req,res,app.get('llave'))
});

app.post("/insertProduct", async (req , res) => {
    productController.insertProduct( req, res, app.get("llave"))
});

app.post('/productKeyword', async (req,res)=>{
    database.filterByKeyword(req.body.keyword)
    .then(results=>{
        res.send(results)
    })
})

app.post("/sendEmail", async (req , res) => {
    emailController.sendEmail( req, res)
});

app.get('/confirmEmail', (req,res)=>{
    emailController.confirmEmail( req, res)
})

app.get("/getProduct/:id", async (req , res) => {
    database.getProduct(req.params.id)
    .then(results =>{
        res.send(results)
    })
});

app.listen(3000,()=>{
    console.log('Servidor iniciado en el puerto 3000') 
})
