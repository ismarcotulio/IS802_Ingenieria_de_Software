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
                Id: 1,
                Firts_Name: "",
                Last_Name: "",
                Email: "",
                Address: "",
                Password: ""
            }

            var date = new Date()    
    
            newUser.Firts_Name = req.body.firts_Name
            newUser.Last_Name = req.body.last_Name
            newUser.Email = req.body.email
            newUser.Address = req.body.address
            newUser.Password = req.body.password

            await this.database.getLastUserIdQuery().then(function(results){
                newUser.Id = results 
            })



            let payload = {
                Id_usuario: newUser.Id,
                iat: date.getTime()/1000
            }

            var token = jwt.sign(payload, key)
    
            await this.database.insertUser(newUser.Id, newUser.Firts_Name, newUser.Last_Name, newUser.Email, newUser.Address,newUser.Password)
            return res.json({id: newUser.Id, token:token})
        })();
        
    }

    login(req,res,key){
        (async () => {

            var statusAccount = "Correo o pass invalidos"

            await this.database.getStatusAccount(req.body.email).then(function(result, error){
                if(result == "cuenta no existe"){
                    statusAccount = "cuenta no existe"
                }else{
                    if(result == 0){
                        statusAccount = "Cuenta no verificada"
                    }
                }
            })   

            if(statusAccount == "cuenta no existe"){
                return res.json({status: false, message: statusAccount})
            }else{
                if(statusAccount == "Cuenta no verificada"){
                    return res.json({status: false, message: statusAccount})
                }else{
                    await this.database.authUser(req.body.email,req.body.password).then(function(results){
                        let payload = {
                            Id_usuario: results.Id,
                            iat: new Date().getTime()/1000
                        }
                        let token = jwt.sign(payload,key)
                        return res.json({Id_usuario: results.Id,token: token, status: true, role: results.Name, message: "Correcto inicio de sesion"})
                    })
                    .catch((error)=>{
                        return res.json({mensaje: statusAccount})
                    })
                }
            } 
            
        })();
    }
    
}

export { AuthController }