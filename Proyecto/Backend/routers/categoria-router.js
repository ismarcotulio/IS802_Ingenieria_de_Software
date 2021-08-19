import express from 'express';
import { TokenController } from '../controllers/tokenController.mjs';
const tokenController = new TokenController();
const Router = express.Router()

class CategoriaRouter{
    
    constructor(database,key){
        this.database = database

        Router.get('/all',this.getAll)
        Router.get('/allCategories',this.getAllCategories)
        Router.post('/addCategoria',this.addCategoria)
        Router.post('/changeStatus',this.changeStatus)
        Router.get('/only/:name',this.getOnly)
    }
    
    getAll = (req,res) =>{
        this.database.getAllProducts()
        .then(results=>{
            res.send(results)
        })
    }

    getAllCategories = (req,res)=>{
        this.database.getAllCategories()
        .then(results=>{
            res.send(results)
        })
    }

    getOnly = (req,res)=>{
        this.database.getCategoriaProducts(req.params.name)
        .then(results=>{
            if(results==false){
                res.send("Categoria no disponible")
            }else{
               res.send(results) 
            }
            
        })
    }

    changeStatus = (req,res)=>{
        this.database.changeCategoryStatus(req.body.category,req.body.status)
        .then(results=>{
            res.send(results)
        })
    }

    addCategoria = (req,res)=>{
        this.database.addCategoria(req.body.nombreCategoria,req.body.descripcion,req.body.url)
        .then(results=>{
            res.send(results)
        })
    }
    
}

export {Router}
export {CategoriaRouter}

