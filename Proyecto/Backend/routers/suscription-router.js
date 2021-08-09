import {SuscriptionController} from '../controllers/suscriptionController.mjs'
import express, { Router } from 'express'
import base64url from 'base64url'
const Router6 = express.Router()
import jwt from 'jsonwebtoken'

class SuscriptionRouter{

    constructor(database){
        this.suscriptionController = new SuscriptionController(database)

        Router6.post('/removeSuscription',this.removeSuscription)
        Router6.post('/verifySuscription',this.verifySuscription)
      
    }

    removeSuscription = (req,res)=>{
        var bearerHeader =  req.headers['authorization'];
        if(typeof bearerHeader !== 'undefined'){
            var bearerToken = bearerHeader.split(" ")[1];
            var payload = bearerToken.split(".")[1];
            var userId = JSON.parse(base64url.decode(payload)).Id_usuario
            this.suscriptionController.removeSuscription(req,res,userId)
        }else{
            res.send('Token invalido')
        }
    }

    verifySuscription = (req,res)=>{

        var Id_Usuario = 1
        var token = req.headers.authorization.split(" ")[1]
       
        jwt.verify(token, "EcommerceSecretPassword2021*", function(err, decoded) {
            Id_Usuario = decoded.Id_usuario 
        }); 
        console.log(Id_Usuario);
        this.suscriptionController.verifySuscription(req,res,Id_Usuario)
    }

}

export {Router6}
export {SuscriptionRouter}