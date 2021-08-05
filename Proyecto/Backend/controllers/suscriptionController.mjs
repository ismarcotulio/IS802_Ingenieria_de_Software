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
                Id_Category_FK: 0,
                
            }
            var token = req.headers.authorization.split(" ")[1]

            jwt.verify(token, 'EcommerceSecretPassword2021*', function(err, decoded) {
                newSuscription.Id_User=decoded.Id_usuario;
                console.log(decoded)
              });
                       
            newSuscription.Id_User_FK = newSuscription.Id_User
            newSuscription.Id_Category_FK = req.body.Id_Category_FK
            
            await this.database.getLastSuscriptionIdQuery().then(function(results){
              newSuscription.Id_Suscription=results
                
            })
            
            await this.database.insertSuscription(
                 
                newSuscription.Id_User_FK,
                newSuscription.Id_Category_FK

            )
            
            return res.json({status:true})
            
            
            
        })();
        
    }

}

export { SuscriptionController }