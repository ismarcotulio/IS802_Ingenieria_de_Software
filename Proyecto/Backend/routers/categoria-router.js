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

        Router.get('/tecnologia',this.getTecnologia)
        Router.get('/arte-artesania',this.getArteArtesania)
        Router.get('/hogar',this.getHogar)
        Router.get('/industrail',this.getIndustrial)
        Router.get('/automotriz',this.getAutomotriz)
        Router.get('/salud-belleza',this.getSaludBelleza)
        Router.get('/viajes-equipaje',this.getViajesEquipaje)
        Router.get('/alimentos',this.getAlimentos)
        Router.get('/jugueteria',this.getJugueteria)
        Router.get('/mascotas',this.getMascotas)
        Router.get('/deportes',this.getDeporte)

    }

    getTecnologia = (req,res)=>{
        res.json({mensaje: 'Tecnologia works!'})
    }
    
    getArteArtesania = (req,res)=>{
        res.json({mensaje: "Artes y Artesania works!"})
    }
    
    getHogar = (req,res) =>{
        res.json({mensaje:"Hogar Works!"})
    }
    
    getIndustrial = (req,res)=>{
        res.json({mensaje: 'Industrial works!'})
    }

    getAutomotriz = (req,res)=>{
        res.json({mensaje: 'Automotriz works!'})
    }
    
    getSaludBelleza = (req,res)=>{
        res.json({mensaje: 'Salud y Belleza works!'})
    }

    getViajesEquipaje = (req,res)=>{
        res.json({mensaje: 'Viajes y equipaje works!'})
    }
    
    getAlimentos = (req,res) =>{
        res.json({mensaje: 'Alimentos works!'})
    }
    
    getJugueteria = (req,res)=>{
        res.json({mensaje: 'Jugueteria works!'})
    }
    
    getMascotas = (req,res)=>{
        res.json({mensaje: 'Mascotas works!'})
    }
    
    getDeporte = (req,res) =>{
        res.json({mensaje: 'Deportes works!'})
    }
    
}

export {Router}
export {CategoriaRouter}

