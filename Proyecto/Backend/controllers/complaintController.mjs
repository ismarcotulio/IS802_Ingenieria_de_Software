
class ComplaintController{

    constructor(database){
        this.database = database
    }

    removeComplaint(req,res){
        (async()=>{
            this.database.removeComplaint(req.body.Id_Complaint)
            .then(results=>{
                if(results==true){
                    return res.send(true)
                }else{
                    return res.send(false)
                }
            })
        })();
    }

    acceptComplaint(req,res){
        (async()=>{
            this.database.acceptComplaint(req.body.Id_Denounced)
            .then(results=>{
                if(results==true){
                    return res.send(true)
                }else{
                    return res.send(false)
                }
            })
        })();
    }

    getComplaints(req,res){
        (async()=>{
            this.database.getComplaints()
            .then(results=>{
                if(results!=false){
                    return res.send(results)
                }else{
                    return res.send(false)
                }
            })
        })();
    }
  
    insertComplaints(req, res, key){
        //Envoltura asincrona IIR
        (async () => {
          
            var Id_Usuario = 1
            var token = req.headers.authorization.split(" ")[1]

            jwt.verify(token, key, function(err, decoded) {
                Id_Usuario = decoded.Id_usuario 
                
              });  

             await this.database.insertComplaints(
                
                Id_Usuario, 
                req.body.Id_Denounced,
                req.body.Id_ComplaintType,
                req.body.Optional_Comment
            )
            
           
            return res.json({status:true})

        })(); 
    }
}


export {ComplaintController}

