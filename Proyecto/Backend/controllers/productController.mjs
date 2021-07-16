
class ProductController{

    constructor (database){
        this.database = database;
    }

    getProducts(req,res,key){
        return 'baleadas, queso y pizza';
    }
};

export { ProductController }