const express = require('express'),
      bodyParser = require('body-parser'),
      jwt = require('jsonwebtoken'),
      app = express(); 
	  
const config = {
	llave : "miclaveultrasecreta123*"
};

// 1
app.set('llave', config.llave);

// 2
app.use(bodyParser.urlencoded({ extended: true }));

// 3
app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log('Servidor iniciado en el puerto 3000') 
});

// 4
app.get('/', function(req, res) {
    res.json({ message: 'recurso de entrada' });
});

// 5
app.post('/autenticar', (req, res) => {
    if(req.body.usuario === "asfo" && req.body.contrasena === "123") {
		const payload = {
			check:  true
		};
		const token = jwt.sign(payload, app.get('llave'), {
			expiresIn: 1440
		});
		res.json({
			mensaje: 'Autenticación correcta',
			token: token
		});
    } else {
        res.json({ mensaje: "Usuario o contrasena incorrectos"})
    }
})

// 6
const rutasProtegidas = express.Router(); 
rutasProtegidas.use((req, res, next) => {
    const token = req.headers['authorization'];
    if (token) {
        const tokenArray = token.split(" ")
      jwt.verify(tokenArray[1], app.get('llave'), (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
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

app.get('/datos', rutasProtegidas, (req, res) => {
	const datos = [
		{ id: 1, nombre: "Asfo" },
		{ id: 2, nombre: "Denisse" },
		{ id: 3, nombre: "Carlos" }
	];
	
	res.json(datos);
});