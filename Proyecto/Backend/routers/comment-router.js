import e from 'express';
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
            //do this
        }else if(req.body.typeComment=='seller'){
            //do this instead
        }else{
            return res.send('Tipo de comentario invalido')
        }

    }


}

export {Router3}
export {CommentRouter}