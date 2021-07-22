import express, { Router } from 'express';
import { TokenController } from '../controllers/tokenController.mjs';
const tokenController = new TokenController();
const Router2 = express.Router()

class DepartamentoRouter{
    
    constructor(database,key){
        this.database = database

        Router2.get('/FranciscoMorazan',this.getFranciscoMorazan)
        Router2.get('/comayagua',this.getComayagua)
        Router2.get('/islas-de-la-bahia',this.getIslasBahia)
        Router2.get('/santa-barbara',this.getSantaBarbara)
        Router2.get('/colon',this.getColon)
        Router2.get('/olancho',this.getOlancho)
        Router2.get('/yoro',this.getYoro)
        Router2.get('/gracias-a-dios',this.getGraciasDios)
        Router2.get('/cortes',this.getCortes)
        Router2.get('/el-paraiso',this.getParaiso)
        Router2.get('/copan',this.getCopan)
        Router2.get('/ocotepeque',this.getOcotepeque)
        Router2.get('/lempira',this.getLempira)
        Router2.get('/intibuca',this.getIntibuca)
        Router2.get('/la-paz',this.getLaPaz)
        Router2.get('/valle',this.getValle)
        Router2.get('/atlantida',this.getAtlantida)
        Router2.get('/choluteca',this.getCholuteca)
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

    getParaiso = (req,res)=>{
        this.database.getDepartamentoProducts(10)
        .then(results=>{
            res.send(results)
        })
    }

    getCopan = (req,res) =>{
        this.database.getDepartamentoProducts(11)
        .then(results=>{
            res.send(results)
        })
    }

    getOcotepeque = (req,res)=>{
        this.database.getDepartamentoProducts(12)
        .then(results=>{
            res.send(results)
        })
    }

    getLempira = (req,res)=>{
        this.database.getDepartamentoProducts(13)
        .then(results=>{
            res.send(results)
        })
    }

    getIntibuca = (req,res)=>{
        this.database.getDepartamentoProducts(14)
        .then(results=>{
            res.send(results)
        })
    }

    getLaPaz = (req,res)=>{
        this.database.getDepartamentoProducts(15)
        .then(results=>{
            res.send(results)
        })
    }

    getValle = (req,res)=>{
        this.database.getDepartamentoProducts(16)
        .then(results=>{
            res.send(results)
        })
    }

    getAtlantida = (req,res)=>{
        this.database.getDepartamentoProducts(17)
        .then(results=>{
            res.send(results)
        })
    }

    getCholuteca = (req,res)=>{
        this.database.getDepartamentoProducts(18)
        .then(results=>{
            res.send(results)
        })
    }
}

export {Router2}
export {DepartamentoRouter}