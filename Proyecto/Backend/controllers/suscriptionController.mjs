import jwt from 'jsonwebtoken'

class SuscriptionController{
    
    constructor (database){
        this.database = database
    }
    
    insertSuscription(req, res, key){
        //Envoltura asincrona IIR
        (async () => {
          
            var Id_Usuario = 1
            var token = req.headers.authorization.split(" ")[1]

            jwt.verify(token, key, function(err, decoded) {
                Id_Usuario = decoded.Id_usuario 
                
              });  
                       
            await this.database.insertSuscription(
            
                Id_Usuario,
                req.body.Id_Category_FK

            )
            
            return res.json({status:true})
                     
        })();
        
    }
    
    removeSuscription(req,res,userId){
        (async()=>{
            this.database.removeSuscription(req.body.Id_Category_FK,userId)
            .then(results=>{
                if(results==true){
                    return res.send(true)
                }else{
                    return res.send(false)
                }
            })
        })();
    }

    verifySuscription(req,res,userId){
        (async()=>{
            this.database.searchSuscription(req.body.Id_Category_FK,userId)
            .then(results=>{
                if(results!=false){
                    return res.send({results:true})
                }else{
                    return res.send({results:false})
                }
            })
        })();
    }

}

export { SuscriptionController }
