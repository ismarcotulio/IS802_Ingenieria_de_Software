import jwt from 'jsonwebtoken'
import moment from 'moment'

class AuthController{

    constructor(database){
        this.database = database
    }

    signUp(req, res, key){
        //Envoltura asincrona IIR
        (async () => {

            var newUser = {
                Id: 0,
                Firts_Name: "",
                Last_Name: "",
                Email: "",
                Address: "",
                Token: 0,
            }
    
            var date = new Date()
    
            let payload = {
                Id_usuario: newUser.Id,
                iat: date.getTime()/1000
            }
            var token = jwt.sign(payload, key)
            
            var lastToken
            var todayDate = moment().format('YYYY-MM-DD HH:mm:ss')      
    
            newUser.Firts_Name = req.body.first_Name
            newUser.Last_Name = req.body.last_Name
            newUser.Email = req.body.email
            newUser.Address = req.body.address

            await this.database.getLastUserIdQuery().then(function(results){
                newUser.Id = results   
            })

            await this.database.getLastTokenIdQuery().then(function(results){
                lastToken = results   
            })

            await this.database.insertToken(lastToken, token, todayDate)
    
            await this.database.insertUser(newUser.Id, newUser.Firts_Name, newUser.Last_Name, newUser.Email, newUser.Address,lastToken)
            return res.json({id: newUser.Id, token:token})
            
        })();
        
    }

    login(req,res,key){
        (async () => {
            await this.database.authUser(req.body.email,req.body.password).then(function(results){
                let payload = {
                    Id_usuario: results,
                    iat: new Date().getTime()/1000
                  }
                let token = jwt.sign(payload,key)
                return res.json({Id_usuario: results,token: token})
            })
            .catch((error)=>{
                res.json({mensaje: error})
            })
        })();
    }
    


    

}

export { AuthController }