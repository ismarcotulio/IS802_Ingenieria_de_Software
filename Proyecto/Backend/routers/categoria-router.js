import express from 'express';
import { TokenController } from '../controllers/tokenController.mjs';
const tokenController = new TokenController();
const Router = express.Router()

class CategoriaRouter{
    
    constructor(database,key){
        this.database = database

        Router.use(tokenController.middleVerifyToken,function(req,res,next){
            if(tokenController.verifyToken(req, res, key)){
                next()
            }else{
                res.json({mensaje: 'Token invalido'})
            }
        })

        Router.get('/all',this.getAll)
        Router.get('/tecnologia',this.getTecnologia)
        Router.get('/arte-artesania',this.getArteArtesania)
        Router.get('/hogar',this.getHogar)
        Router.get('/industrial',this.getIndustrial)
        Router.get('/automotriz',this.getAutomotriz)
        Router.get('/salud-belleza',this.getSaludBelleza)
        Router.get('/viajes-equipaje',this.getViajesEquipaje)
        Router.get('/alimentos',this.getAlimentos)
        Router.get('/jugueteria',this.getJugueteria)
        Router.get('/mascotas',this.getMascotas)
        Router.get('/deportes',this.getDeporte)

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
    
    getIndustrial = (req,res)=>{
        this.database.getCategoriaProducts(4)
        .then(results=>{
            res.send(results)
        })
    }

    getAutomotriz = (req,res)=>{
        this.database.getCategoriaProducts(5)
        .then(results=>{
            res.send(results)
        })
    }
    
    getSaludBelleza = (req,res)=>{
        this.database.getCategoriaProducts(6)
        .then(results=>{
            res.send(results)
        })
    }

    getViajesEquipaje = (req,res)=>{
        this.database.getCategoriaProducts(7)
        .then(results=>{
            res.send(results)
        })
    }
    
    getAlimentos = (req,res) =>{
        this.database.getCategoriaProducts(8)
        .then(results=>{
            res.send(results)
        })
    }
    
    getJugueteria = (req,res)=>{
        this.database.getCategoriaProducts(9)
        .then(results=>{
            res.send(results)
        })
    }
    
    getMascotas = (req,res)=>{
        this.database.getCategoriaProducts(10)
        .then(results=>{
            res.send(results)
        })
    }
    
    getDeporte = (req,res) =>{
        this.database.getCategoriaProducts(11)
        .then(results=>{
            res.send(results)
        })
    }
    
}

export {Router}
export {CategoriaRouter}

