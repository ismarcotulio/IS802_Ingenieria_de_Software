import base64url from 'base64url';
import express, { Router } from 'express';
import { TokenController } from '../controllers/tokenController.mjs';
const tokenController = new TokenController();
const Router3 = express.Router()

class CommentRouter{
    
    constructor(database,key){
        this.database = database

        Router3.get('/product',this.getProductComment)
        Router3.get('/vendedor',this.getVendedorComment)
        Router3.post('/newComment',this.putComment)
    }
    
    getProductComment = (req,res)=>{
        this.database.getProductComment(req.body.productId)
        .then(results=>{
            res.send(results)
        })
    }

    getVendedorComment = (req,res)=>{
        this.database.getSellerComment(req.body.productId)
        .then(results=>{
            res.send(results)
        })
    }

    putComment = (req,res)=>{
        if(req.body.typeComment=='product'){
            var bearerHeader =  req.headers['authorization'];
            if(typeof bearerHeader !== 'undefined'){
                var bearerToken = bearerHeader.split(" ")[1];
                var payload = bearerToken.split(".")[1];
                var userId = JSON.parse(base64url.decode(payload)).Id_usuario
                var date = new Date().toISOString().slice(0,10)
                this.database.putComment(0,req.body,date,userId)
                .then(results=>{
                    res.json({mensaje: results})
                })
            }else{
                res.send({
                    result:false
                });
            }
        }else if(req.body.typeComment=='seller'){
            var bearerHeader =  req.headers['authorization'];
            if(typeof bearerHeader !== 'undefined'){
                var bearerToken = bearerHeader.split(" ")[1];
                var payload = bearerToken.split(".")[1];
                var userId = JSON.parse(base64url.decode(payload)).Id_usuario
                var date = new Date().toISOString().slice(0,10)
                this.database.putComment(1,req.body,date,userId)
                .then(results=>{
                    res.json({mensaje: results})
                })
            }else{
                res.send({
                    result:false
                });
            }
        }else{
            return res.send('Tipo de comentario invalido')
        }

    }


}

export {Router3}
export {CommentRouter}