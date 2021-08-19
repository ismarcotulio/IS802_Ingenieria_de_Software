import {wishListController} from '../controllers/wishListController.mjs'
import express, { Router } from 'express'
import base64url from 'base64url'
const Router4 = express.Router()

class WishListRouter{

    constructor(database){
        this.wishListController = new wishListController(database)

        Router4.post('/add',this.addWish)
        Router4.post('/remove',this.removeWish)
        Router4.get('/getWishes',this.getWishes)
        Router4.post('/verifyWish',this.verifyWish)
        Router4.get('/countWish',this.countWish)
    }

    addWish = (req,res)=>{
        var bearerHeader =  req.headers['authorization'];
        if(bearerHeader != 'Bearer null'){
            var bearerToken = bearerHeader.split(" ")[1];
            var payload = bearerToken.split(".")[1];
            var userId = JSON.parse(base64url.decode(payload)).Id_usuario
            this.wishListController.addWish(req,res,userId)
        }else{
            res.send('Token invalido')
        }
    }

    removeWish = (req,res)=>{
        var bearerHeader =  req.headers['authorization'];
        if(bearerHeader != 'Bearer null'){
            var bearerToken = bearerHeader.split(" ")[1];
            var payload = bearerToken.split(".")[1];
            var userId = JSON.parse(base64url.decode(payload)).Id_usuario
            this.wishListController.removeWish(req,res,userId)
        }else{
            res.send('Token invalido')
        }
    }

    getWishes = (req,res)=>{
        var bearerHeader =  req.headers['authorization'];
        if(typeof bearerHeader !== 'undefined'){
            var bearerToken = bearerHeader.split(" ")[1];
            var payload = bearerToken.split(".")[1];
            var userId = JSON.parse(base64url.decode(payload)).Id_usuario
            this.wishListController.getWishes(req,res,userId)
        }else{
            res.send('Token invalido')
        }
    }

    verifyWish = (req,res)=>{
        var bearerHeader =  req.headers['authorization'];
        if(typeof bearerHeader !== 'undefined'){
            var bearerToken = bearerHeader.split(" ")[1];
            var payload = bearerToken.split(".")[1];
            var userId = JSON.parse(base64url.decode(payload)).Id_usuario
            this.wishListController.verifyWish(req,res,userId)
        }else{
            res.send('Token invalido')
        }
    }

    countWish = (req,res)=>{
        var bearerHeader =  req.headers['authorization'];
        if(typeof bearerHeader !== 'undefined'){
            var bearerToken = bearerHeader.split(" ")[1];
            var payload = bearerToken.split(".")[1];
            var userId = JSON.parse(base64url.decode(payload)).Id_usuario
            this.wishListController.countWish(req,res,userId)
        }else{
            res.send('Token invalido')
        }
    }
}

export {Router4}
export {WishListRouter}