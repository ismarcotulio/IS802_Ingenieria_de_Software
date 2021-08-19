class StatisticsController{

    constructor(database){
        this.database = database
    }

    countProductCategory(req,res){
        (async()=>{
            this.database.countProductCategory()
            .then(results=>{
                if(results!=false){
                    return res.send(results)
                }else{
                    return res.send(false)
                }
            })
        })();
    }

    countProductDepartment(req,res){
        (async()=>{
            this.database.countProductDepartment()
            .then(results=>{
                if(results!=false){
                    return res.send(results)
                }else{
                    return res.send(false)
                }
            })
        })();
    }

    countProductMonth(req,res){
        (async()=>{
            this.database.countProductMonth()
            .then(results=>{
                if(results!=false){
                    return res.send(results)
                }else{
                    return res.send(false)
                }
            })
        })();
    }

    countSuscriptionCategory(req,res){
        (async()=>{
            this.database.countSuscriptionCategory()
            .then(results=>{
                if(results!=false){
                    return res.send(results)
                }else{
                    return res.send(false)
                }
            })
        })();
    }

    countUserProduct(req,res){
        (async()=>{
            this.database.countUserProduct()
            .then(results=>{
                if(results!=false){
                    return res.send(results)
                }else{
                    return res.send(false)
                }
            })
        })();
    }
}

export {StatisticsController}