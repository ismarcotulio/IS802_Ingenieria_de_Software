const express = require('express'),
      bodyParser = require('body-parser'),
      jwt = require('jsonwebtoken'),
      app = express(),
      cors = require('cors'),
      conexion = require('./dataBase.js'),
      moment = require('moment'),
      date = new Date()
	  
const config = {
	llave : "EcommerceSecretPassword2021*"
};

// Setea llave maestra para firma de tokens
app.set('llave', config.llave);

// Obtiene direccion de envio de datos
app.use(bodyParser.urlencoded({ extended: true }));

// Convierte los datos a JSON
app.use(bodyParser.json());
app.use(cors());

app.listen(3000,()=>{
    console.log('Servidor iniciado en el puerto 3000') 
});

// post de registro
app.post('/signUp', async (req, res) => {
  
  let newUser = {
    Id: 0,
    Firts_Name: "",
    Last_Name: "",
    Email: "",
    Address: "",
    Token: 0,
  }

  let getLastUserIdQuery = function(){
    return new Promise((resolve, reject)=>{
      conexion.query('SELECT * FROM user ORDER BY Id DESC LIMIT 1;', (error,results, fields)=>{
        if(error){
          reject(error)
        }else{
          resolve(results)
        }
        if(results[0].Id){
          newUser.Id = results[0].Id + 1
        }else{
          newUser.Id = 1
        }
      })
    })
  }

  let getLastTokenIdQuery = function(){
    return new Promise((resolve, reject)=>{
      conexion.query(`SELECT * FROM token ORDER BY Id DESC LIMIT 1;`, (error,results, fields)=>{
        if(error){
          reject(error)
        }else{
          resolve(results)
        }
        if(results[0].Id){
          lastToken = results[0].Id + 1
        }else{
          lastToken = 1
        }
      })
    })
  }

  let insertToken = function(){
    return new Promise((resolve, reject)=>{
      conexion.query("CALL insertToken(?,?,?)",[lastToken,token,todayDate], (error,results, fields)=>{
        if(error){
          reject(error)
        }else{
          resolve(results)
        }
      })
    })
  }

  let insertUser = function(){
    return new Promise((resolve, reject)=>{
      conexion.query(`CALL insertUser(?,?,?,?,?,?)`,[newUser.Id,newUser.Firts_Name,newUser.Last_Name,newUser.Email,newUser.Address,lastToken], (error,results, fields)=>{
        if(error){
          reject(error)
        }else{
          resolve(results)
        }
      })
    })
  }
  
  const firstquery = await getLastUserIdQuery()

  newUser.Firts_Name = req.body.first_Name
  newUser.Last_Name = req.body.last_Name
  newUser.Email = req.body.email
  newUser.Address = req.body.address
  let payload = {
    Id_usuario: newUser.Id,
    iat: date.getTime()/1000
  }
  let token = jwt.sign(payload,app.get('llave'))
  let lastToken = 0
  let todayDate = moment().format('YYYY-MM-DD HH:mm:ss')
 
  const secondQuery = await getLastTokenIdQuery()
  
  const thirdQuery = await insertToken()

  const fourthQuery = await insertUser()

  res.json({id: newUser.Id, token:token})
  
})

// Middleware para verificacion de tokens
const rutasProtegidas = express.Router(); 
rutasProtegidas.use((req, res, next) => {
    const token = req.headers['authorization'];
    if (token) {
        const tokenArray = token.split(" ")
      jwt.verify(tokenArray[1], app.get('llave'), (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          conexion.query(`SELECT FROM token WHERE ;`, (error,results, fields)=>{
            
          })
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveida' 
      });
    }
 });


 // login de usuario
app.get('/login', rutasProtegidas, (req, res) => {
	const datos = [
		{ id: 1, nombre: "Asfo" },
		{ id: 2, nombre: "Denisse" },
		{ id: 3, nombre: "Carlos" }
	];
	
	res.json(datos);
});