import {StatisticsController} from '../controllers/statisticsController.mjs'
import express, { Router } from 'express'
import base64url from 'base64url'
const Router7 = express.Router()

class StatisticsRouter{

    constructor(database){
        this.statisticsController = new StatisticsController(database)

        Router7.get('/productCategory',this.countProductCategory)
        Router7.get('/productDepartment',this.countProductDepartment)
        Router7.get('/productMonth',this.countProductMonth)
        Router7.get('/suscriptionCategory',this.countSuscriptionCategory)
        Router7.get('/userProduct',this.countUserProduct)
        
    }

    countProductCategory = (req,res)=>{
        var bearerHeader =  req.headers['authorization'];
            if(typeof bearerHeader !== 'undefined'){
                this.statisticsController.countProductCategory(req,res)
            }
    }

    countProductDepartment = (req,res)=>{
        var bearerHeader =  req.headers['authorization'];
            if(typeof bearerHeader !== 'undefined'){
                this.statisticsController.countProductDepartment(req,res)
            }
    }

    countProductMonth = (req,res)=>{
        var bearerHeader =  req.headers['authorization'];
            if(typeof bearerHeader !== 'undefined'){
                this.statisticsController.countProductMonth(req,res)
            }
    }

    countSuscriptionCategory = (req,res)=>{
        var bearerHeader =  req.headers['authorization'];
            if(typeof bearerHeader !== 'undefined'){
                this.statisticsController.countSuscriptionCategory(req,res)
            }
    }

    countUserProduct = (req,res)=>{
        var bearerHeader =  req.headers['authorization'];
            if(typeof bearerHeader !== 'undefined'){
                this.statisticsController.countUserProduct(req,res)
            }
    }

}

export {Router7}
export {StatisticsRouter}