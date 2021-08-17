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
                Brand: "",
                Cost: 0,
                Description: "",
                Id_Category: 0,
                Id_User: 0,
                Image: "",
                Date_Product: "",
                State: 0,
                Department: 0
            }
            var token = req.headers.authorization.split(" ")[1]

            jwt.verify(token, 'EcommerceSecretPassword2021*', function(err, decoded) {
                newProduct.Id_User=decoded.Id_usuario;
                console.log(decoded)
              });
                           
            newProduct.Name = req.body.Name
            newProduct.Brand = req.body.Brand
            newProduct.Cost = req.body.Cost
            newProduct.Description = req.body.Description
            newProduct.Id_Category = req.body.Id_Category
            newProduct.Image = req.body.Image
            newProduct.Date_Product = req.body.Date_Product
            newProduct.State = req.body.State
            newProduct.Department = req.body.Department
           
            
            await this.database.getLastProductIdQuery().then(function(results){
              newProduct.Id=results  
            })
            
            await this.database.insertProduct(
                newProduct.Id,
                newProduct.Name, 
                newProduct.Brand,
                newProduct.Cost,
                newProduct.Description,
                newProduct.Id_Category, 
                newProduct.Id_User,
                newProduct.Image,
                newProduct.Date_Product,
                newProduct.State,
                newProduct.Department
            )
            

            return res.json({status:true,product:newProduct})
            
            
            
        })();
        
    }

    downProduct(req, res){
        //Envoltura asincrona IIR
        (async () => {
            this.database.changeStatusProduct(req.body.productId,req.body.statusNum)
            .then(results=>{
                res.send(results)
            })
        })();
    }

}

export { ProductController }