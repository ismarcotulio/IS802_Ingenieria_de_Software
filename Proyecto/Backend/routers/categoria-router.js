import express from 'express';
import { TokenController } from '../controllers/tokenController.mjs';
const tokenController = new TokenController();
const Router = express.Router()

class CategoriaRouter{
    
    constructor(database,key){
        this.database = database

        Router.get('/all',this.getAll)
        Router.get('/tecnologia',this.getTecnologia)
        Router.get('/arte-artesania',this.getArteArtesania)
        Router.get('/hogar',this.getHogar)
        Router.get('/automotriz',this.getAutomotriz)
        Router.get('/salud-belleza',this.getSaludBelleza)
        Router.get('/deportes',this.getDeporte)
        Router.get('/jugueteria',this.getJugueteria)
        Router.get('/mascotas',this.getMascotas)
        Router.get('/ropa',this.getViajesEquipaje)
    }
    
    getAll = (req,res) =>{
        this.database.getAllProducts()
        .then(results=>{
            res.send(results)
        })
    }

    getTecnologia = (req,res)=>{
        this.database.getCategoriaProducts(1)
        .then(results=>{
            res.send(results)
        })
    }
    
    getArteArtesania = (req,res)=>{
        this.database.getCategoriaProducts(2)
        .then(results=>{
            res.send(results)
        })
    }
    
    getHogar = (req,res) =>{
        this.database.getCategoriaProducts(3)
        .then(results=>{
            res.send(results)
        })
    }
    

    getAutomotriz = (req,res)=>{
        this.database.getCategoriaProducts(4)
        .then(results=>{
            res.send(results)
        })
    }
    
    getSaludBelleza = (req,res)=>{
        this.database.getCategoriaProducts(5)
        .then(results=>{
            res.send(results)
        })
    }

    
    getDeporte = (req,res) =>{
        this.database.getCategoriaProducts(6)
        .then(results=>{
            res.send(results)
        })
    }
    
    getJugueteria = (req,res)=>{
        this.database.getCategoriaProducts(7)
        .then(results=>{
            res.send(results)
        })
    }
    
    getMascotas = (req,res)=>{
        this.database.getCategoriaProducts(8)
        .then(results=>{
            res.send(results)
        })
    }
    
    

    getViajesEquipaje = (req,res)=>{
        this.database.getCategoriaProducts(9)
        .then(results=>{
            res.send(results)
        })
    }
    
}

export {Router}
export {CategoriaRouter}

