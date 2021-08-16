import express from 'express';
import { TokenController } from '../controllers/tokenController.mjs';
const tokenController = new TokenController();
const Router = express.Router()

class CategoriaRouter{
    
    constructor(database,key){
        this.database = database

        Router.get('/all',this.getAll)
        Router.get('/allCategories',this.getAllCategories)
        Router.get('/addCategoria',this.addCategoria)
        Router.get('/tecnologia',this.getTecnologia)
        Router.get('/arte-artesania',this.getArteArtesania)
        Router.get('/hogar',this.getHogar)
        Router.get('/automotriz',this.getAutomotriz)
        Router.get('/salud-belleza',this.getSaludBelleza)
        Router.get('/deportes',this.getDeporte)
        Router.get('/jugueteria',this.getJugueteria)
        Router.get('/mascotas',this.getMascotas)
        Router.get('/ropa',this.getViajesEquipaje)
        Router.post('/changeStatus',this.changeStatus)
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

    getTecnologia = (req,res)=>{
        this.database.getCategoriaProducts(1)
        .then(results=>{
            if(results==false){
                res.send("Categoria no disponible")
            }else{
               res.send(results) 
            }
            
        })
    }
    
    getArteArtesania = (req,res)=>{
        this.database.getCategoriaProducts(2)
        .then(results=>{
            if(results==false){
                res.send("Categoria no disponible")
            }else{
               res.send(results) 
            }
        })
    }
    
    getHogar = (req,res) =>{
        this.database.getCategoriaProducts(3)
        .then(results=>{
            if(results==false){
                res.send("Categoria no disponible")
            }else{
               res.send(results) 
            }
        })
    }
    

    getAutomotriz = (req,res)=>{
        this.database.getCategoriaProducts(4)
        .then(results=>{
            if(results==false){
                res.send("Categoria no disponible")
            }else{
               res.send(results) 
            }
        })
    }
    
    getSaludBelleza = (req,res)=>{
        this.database.getCategoriaProducts(5)
        .then(results=>{
            if(results==false){
                res.send("Categoria no disponible")
            }else{
               res.send(results) 
            }
        })
    }

    
    getDeporte = (req,res) =>{
        this.database.getCategoriaProducts(6)
        .then(results=>{
            if(results==false){
                res.send("Categoria no disponible")
            }else{
               res.send(results) 
            }
        })
    }
    
    getJugueteria = (req,res)=>{
        this.database.getCategoriaProducts(7)
        .then(results=>{
            if(results==false){
                res.send("Categoria no disponible")
            }else{
               res.send(results) 
            }
        })
    }
    
    getMascotas = (req,res)=>{
        this.database.getCategoriaProducts(8)
        .then(results=>{
            if(results==false){
                res.send("Categoria no disponible")
            }else{
               res.send(results) 
            }
        })
    }
    
    

    getViajesEquipaje = (req,res)=>{
        this.database.getCategoriaProducts(9)
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
        this.database.addCategoria(req.body.nombreCategoria,req.body.descripcion)
        .then(results=>{
            res.send(results)
        })
    }
    
}

export {Router}
export {CategoriaRouter}

