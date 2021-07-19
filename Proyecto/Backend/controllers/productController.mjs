
class ProductController{

    constructor (database){
        this.database = database;
    }

    getProducts(req,res){
        return 'baleadas, queso y pizza';
    }

    getTecnologia(req,res){
        return 'Tecnologia works!'
    }

    getArteArtesania(req,res){
        return 'Artes y artesania works!'
    }

    getHogar(req,res){
        return 'Hogar works!'
    }

    getIndustrial(req,res){
        return 'Industrial works!'
    }
};

export { ProductController }