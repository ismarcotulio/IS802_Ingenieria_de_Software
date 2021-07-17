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
                Id_Product: 0,
                Name: "",
                Description: "",
                Price: "",
                State: "",
                Department: "",
                Id_Seller: "",
                Token: 0,
                Id_Category: ""
            }
    
            var date = new Date()
    
            let payload = {
                Id_usuario: newProduct.Id,
                iat: date.getTime()/1000
            }
            var token = jwt.sign(payload, key)
            
            var lastToken
            var todayDate = moment().format('YYYY-MM-DD HH:mm:ss')      
    
            newProduct.Id_Product = req.body.Id_Product
            newProduct.Name = req.body.Name
            newProduct.Description = req.body.Description
            newProduct.Price = req.body.Price
            newProduct.State = req.body.State
            newProduct.Department = req.body.Department
            newProduct.Id_Seller = req.body.Id_Seller
            newProduct.Id_Category = req.body.Id_Category

            await this.database.getLastUserIdQuery().then(function(results){
                newUser.Id = results   
            })

            await this.database.getLastTokenIdQuery().then(function(results){
                lastToken = results   
            })

            await this.database.insertToken(lastToken, token, todayDate)
    
            await this.database.insertProduct(newProduct.Id, newProduct.Name, 
                newProduct.Description, newProduct.Price, 
                newProduct.State,newProduct.Department, newProduct.Id_Seller, 
                newProduct.Id_Category, lastToken,newUser.Password)
            return res.json({id: newUser.Id, token:token})
            
        })();
        
    }

}

export { ProductController }