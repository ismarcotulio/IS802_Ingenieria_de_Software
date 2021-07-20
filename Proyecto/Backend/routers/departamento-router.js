import express from 'express';
import { TokenController } from '../controllers/tokenController.mjs';
const tokenController = new TokenController();
const Router2 = express.Router()

class DepartamentoRouter{
    
    constructor(database,key){
        this.database = database

        Router2.use(tokenController.middleVerifyToken,function(req,res,next){
            if(tokenController.verifyToken(req, res, key)){
                next()
            }else{
                res.json({mensaje: 'Token invalido'})
            }
        })

        Router2.post('/FranciscoMorazan',this.getFranciscoMorazan)
        Router2.post('/Comayagua',this.getComayagua)
    }

    getFranciscoMorazan = (req,res)=>{
        this.database.getDepartamentoProducts(1)
        .then(results=>{
            res.send(results)
        })
    }

    getComayagua = (req,res)=>{
        this.database.getDepartamentoProducts(2)
        .then(results=>{
            res.send(results)
        })
    }

    getIslasBahia = (req,res)=>{
        this.database.getDepartamentoProducts(3)
        .then(results=>{
            res.send(results)
        })
    }

    getSantaBarbara = (req,res)=>{
        this.database.getDepartamentoProducts(4)
        .then(results=>{
            res.send(results)
        })
    }

    getColon = (req,res)=>{
        this.database.getDepartamentoProducts(5)
        .then(results=>{
            res.send(results)
        })
    }

    getOlancho = (req,res)=>{
        this.database.getDepartamentoProducts(6)
        .then(results=>{
            res.send(results)
        })
    }

    getYoro = (req,res)=>{
        this.database.getDepartamentoProducts(7)
        .then(results=>{
            res.send(results)
        })
    }

    getGraciasDios = (req,res)=>{
        this.database.getDepartamentoProducts(8)
        .then(results=>{
            res.send(results)
        })
    }

    getCortes = (req,res)=>{
        this.database.getDepartamentoProducts(9)
        .then(results=>{
            res.send(results)
        })
    }

    getParaiso = (req,res)=>{}
}

export {Router2}
export {DepartamentoRouter}