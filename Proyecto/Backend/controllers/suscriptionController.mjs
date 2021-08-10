import jwt from 'jsonwebtoken'

class SuscriptionController{
    
    constructor (database){
        this.database = database
    }
    
    insertSuscription(req, res, key){
        //Envoltura asincrona IIR
        (async () => {
          
            var newSuscription = {

                Id_User_FK: 0,
                Id_Category_FK: 0
                
            }
            var token = req.headers.authorization.split(" ")[1]

            jwt.verify(token, 'EcommerceSecretPassword2021*', function(err, decoded) {
                newSuscription.Id_User=decoded.Id_usuario;
                // console.log(decoded)
              });
                       
            newSuscription.Id_User_FK = newSuscription.Id_User
            newSuscription.Id_Category_FK = req.body.Id_Category_FK
            
            // await this.database.getLastSuscriptionIdQuery().then(function(results){
            //   newSuscription.Id_Suscription=results
        
            // })
            
            await this.database.insertSuscription(
                 
                newSuscription.Id_User_FK,
                newSuscription.Id_Category_FK

            )
            
            return res.json({status:true})
            
            
            
        })();
        
    }
    
    removeSuscription(req,res,userId){
        (async()=>{
            this.database.removeSuscription(req.body.Id_Category_FK,userId)
            .then(results=>{
                if(results==true){
                    return res.send({result:true})
                }else{
                    return res.send({result:false})
                }
            }).catch(e =>{
                return res.send({result:false})
            })
        })();
    }

    verifySuscription(req,res,userId){

        this.database.searchSuscription(req.body.Id_Category_FK,userId).then(results=>{
            // console.log(results);
            let state=true;
            for(let i=0;i<results.length;i++){
                if(results[i].Verify == 1){
                    state=false;
                    res.send(true)
                    // res.end();
                }
            }
            if(state){
                res.send(false)
            }
            // res.end();
        })
    }

}

export { SuscriptionController }