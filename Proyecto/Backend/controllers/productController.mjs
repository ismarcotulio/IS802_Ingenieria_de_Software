import jwt from 'jsonwebtoken'

class ProductController{
    
    constructor (database){
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
                Id_Category: "",
                Id_Users: "",
                Image: ""
            }
            var token = req.headers.authorization.split(" ")[1]

            jwt.verify(token, 'EcommerceSecretPassword2021*', function(err, decoded) {
                newProduct.Id_Users=decoded.Id_usuario;
                console.log(decoded)
              });
                           
            newProduct.Name = req.body.Name
            newProduct.Type = req.body.Type
            newProduct.Cost = req.body.Cost
            newProduct.Description = req.body.Description
            newProduct.Id_Category = req.body.Id_Category
            newProduct.Image = req.body.Image
    
            await this.database.getLastProductIdQuery().then(function(results){
              newProduct.Id=results  
            })

            await this.database.insertProduct(newProduct.Id, newProduct.Name, 
                newProduct.Type, newProduct.Cost, newProduct.Description , newProduct.Id_Category, 
                newProduct.Id_Users, newProduct.Image)
                
            return res.json({status:true})
            

            
        })();
        
    }

}

export { ProductController }