import jwt from 'jsonwebtoken'
import moment from 'moment'

class ProductController{
    
    constructor (){
        this.database = database
    }

    insertProduct(req, res, key){
        //Envoltura asincrona IIR
        (async () => {

            var newProduct = {
                Id: 0,
                Name: "",
                Type: "",
                Price: "",
                Cost: "",
                Description: "",
                Id_Seller: "",
                Id_Category: "",
                Token: 0,
                Id_User: "",
                Image: ""
            }
    
            var date = new Date()
    
            let payload = {
                Id_usuario: newProduct.Id,
                iat: date.getTime()/1000
            }
            var token = jwt.sign(payload, key)
            
            var lastToken
            var todayDate = moment().format('YYYY-MM-DD HH:mm:ss')      
    
            newProduct.Id = req.body.Id
            newProduct.Name = req.body.Name
            newProduct.Type = req.body.Type
            newProduct.Cost = req.body.Cost
            newProduct.Description = req.body.Description
            newProduct.Id_Category = req.body.Id_Category
            newProduct.Id_User = req.body.Id_User
            newProduct.Image = req.body.Image
            
            await this.database.getLastUserIdQuery().then(function(results){
                newUser.Id = results   
            })

            await this.database.getLastTokenIdQuery().then(function(results){
                lastToken = results   
            })

            await this.database.insertToken(lastToken, token, todayDate)
    
            await this.database.insertProduct(newProduct.Id, newProduct.Name, 
                newProduct.Type, newProduct.Cost, newProduct.Description , newProduct.Id_Category, 
                newProduct.Id_User, newProduct.Image)
            return res.json({id: newUser.Id, token:token})
            
        })();
        
    }

}

export { ProductController }