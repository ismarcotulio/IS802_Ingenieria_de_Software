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
    }

    addWish = (req,res)=>{
        var bearerHeader =  req.headers['authorization'];
            if(typeof bearerHeader !== 'undefined'){
                var bearerToken = bearerHeader.split(" ")[1];
                var payload = bearerToken.split(".")[1];
                var userId = JSON.parse(base64url.decode(payload)).Id_usuario
                this.wishListController.addWish(req,res,userId)
            }
    }

    removeWish = (req,res)=>{
        var bearerHeader =  req.headers['authorization'];
            if(typeof bearerHeader !== 'undefined'){
                var bearerToken = bearerHeader.split(" ")[1];
                var payload = bearerToken.split(".")[1];
                var userId = JSON.parse(base64url.decode(payload)).Id_usuario
                this.wishListController.removeWish(req,res,userId)
            }
    }

    getWishes = (req,res)=>{
        var bearerHeader =  req.headers['authorization'];
            if(typeof bearerHeader !== 'undefined'){
                var bearerToken = bearerHeader.split(" ")[1];
                var payload = bearerToken.split(".")[1];
                var userId = JSON.parse(base64url.decode(payload)).Id_usuario
                this.wishListController.getWishes(req,res,userId)
            }
    }

    verifyWish = (req,res)=>{
        var bearerHeader =  req.headers['authorization'];
            if(typeof bearerHeader !== 'undefined'){
                var bearerToken = bearerHeader.split(" ")[1];
                var payload = bearerToken.split(".")[1];
                var userId = JSON.parse(base64url.decode(payload)).Id_usuario
                this.wishListController.verifyWish(req,res,userId)
            }
    }
}

export {Router4}
export {WishListRouter}