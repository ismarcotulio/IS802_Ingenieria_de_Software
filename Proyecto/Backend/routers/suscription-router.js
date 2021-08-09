import {SuscriptionController} from '../controllers/suscriptionController.mjs'
import express, { Router } from 'express'
import base64url from 'base64url'
const Router6 = express.Router()

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
        var bearerHeader =  req.headers['authorization'];
        if(typeof bearerHeader !== 'undefined'){
            var bearerToken = bearerHeader.split(" ")[1];
            var payload = bearerToken.split(".")[1];
            var userId = JSON.parse(base64url.decode(payload)).Id_usuario
            this.suscriptionController.verifySuscription(req,res,userId)
        }else{
            res.send('Token invalido')
        }
    }

}

export {Router6}
export {SuscriptionRouter}