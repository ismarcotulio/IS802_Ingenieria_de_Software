class wishListController{

    constructor(database){
        this.database = database
    }

    addWish(req,res,userId){
        (async()=>{
            this.database.addWish(req.body.Id_Producto,userId)
            .then(results=>{
                if(results==true){
                    return res.send(true)
                }else{
                    return res.send(false)
                }
            })
        })();
    }

    removeWish(req,res,userId){
        (async()=>{
            this.database.removeWishList(req.body.Id_Producto,userId)
            .then(results=>{
                if(results==true){
                    return res.send(true)
                }else{
                    return res.send(false)
                }
            })
        })();
    }

    getWishes(req,res,userId){
        (async()=>{
            this.database.getWishList(userId)
            .then(results=>{
                if(results!=false){
                    return res.send(results)
                }else{
                    return res.send(false)
                }
            })
        })();
    }

    verifyWish(req,res,userId){
        (async()=>{
            this.database.searchWish(req.body.Id_Producto,userId)
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

export {wishListController}