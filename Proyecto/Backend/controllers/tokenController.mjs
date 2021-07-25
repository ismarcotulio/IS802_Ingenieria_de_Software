import jwt from 'jsonwebtoken'

class TokenController{

    contructor(){}

    verifyToken(req, res, key){
      return jwt.verify(req.token, key, (error, authData) => {
        if(error){
          return res.json({
            result:false
          });
        }else{
          return res.json({
            result:true
          });
        }
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