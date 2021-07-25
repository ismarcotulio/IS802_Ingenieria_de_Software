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
                Cost: "",
                Description: "",
                Id_Category: "",
                Id_Users: "",
                Image: "",
                Date_Product: "",
                State: "",
                Department: ""
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
            newProduct.Date_Product = req.body.Date_Product
            newProduct.State = req.body.State
            newProduct.Department = req.body.Department
           
            /*
            await this.database.getLastProductIdQuery().then(function(results){
              newProduct.Id=results  
            })
            
            await this.database.insertProduct(newProduct.Id, newProduct.Name, 
                newProduct.Type, newProduct.Cost, newProduct.Description , newProduct.Id_Category, 
                newProduct.Id_Users, newProduct.Image, newProduct.Date_Product, newProduct.State,
                newProduct.Department)
            */
           
            return res.json({status:true,dato:newProduct})
            
            
            
        })();
        
    }

}

export { ProductController }