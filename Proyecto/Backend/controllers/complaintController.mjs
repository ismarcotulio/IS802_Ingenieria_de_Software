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

}

export {ComplaintController}