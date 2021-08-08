import jwt from 'jsonwebtoken'

class TokenController{

  constructor(database){
    this.database = database
  }

  verifyToken(req, res, key){
    
    var Id_Role = 0

    return jwt.verify(req.token, key, (error, authData) => {
      (async () => {
      if(error){
        return res.json({
          result:false
        });
      }else{
        Id_Role = await this.database.getUserRole(authData.Id_usuario)
        return res.json({
          result:true,
          Role: Id_Role.Id_User_Type_FK
        });
      }
    })();
    });
  
  }

    middleVerifyToken(req, res, next){
      const bearerHeader =  req.headers['authorization'];
   
      if(typeof bearerHeader !== 'undefined'){
           const bearerToken = bearerHeader.split(" ")[1];
           req.token  = bearerToken;
           next();
   
      }else{
         res.send({
           result:false
         });
   
      }
   }

     
}

export{ TokenController }