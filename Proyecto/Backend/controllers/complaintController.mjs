import jwt from 'jsonwebtoken'

class ComplaintController{
    
    constructor (database){
        this.database = database
    }

    insertComplaints(req, res, key){
        //Envoltura asincrona IIR
        (async () => {
          
            var newComplaint = {

                Id_Whistleblower: 0,
                Id_Denounced: 0,
                Id_ComplaintType: 0,
                Optional_Comment: ""
                
            }
            var token = req.headers.authorization.split(" ")[1]

            jwt.verify(token, 'EcommerceSecretPassword2021*', function(err, decoded) {
                newComplaint.Id_User=decoded.Id_usuario;
                console.log(decoded)
              });
            
            newComplaint.Id_Whistleblower = newComplaint.Id_User
            newComplaint.Id_Denounced = req.body.Id_Denounced
            newComplaint.Id_ComplaintType = req.body.Id_ComplaintType
            newComplaint.Optional_Comment = req.body.Optional_Comment
            
            await this.database.getLastComplaintIdQuery().then(function(results){
              newComplaint.Id_Complaints=results  
              newComplaint.Date_Complaints=results
            })
            
            await this.database.insertComplaints(
                
                newComplaint.Id_Whistleblower, 
                newComplaint.Id_Denounced,
                newComplaint.Id_ComplaintType,
                newComplaint.Optional_Comment
            )
           
            return res.json({status:true})

        })();
        
    }

}

export { ComplaintController }