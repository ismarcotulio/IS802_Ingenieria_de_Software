import jwt from 'jsonwebtoken'

class ComplaintController{
    
    constructor (database){
        this.database = database
    }

    insertComplaint(req, res, key){
        //Envoltura asincrona IIR
        (async () => {
          
            var newComplaint = {

                Id_Denuncia: 0,
                Id_Denunciante: 0,
                Id_Denunciado: 0,
                Id_TipoDenuncia: 0,
                Comentario_Opcional: ""
                
            }
            var token = req.headers.authorization.split(" ")[1]

            jwt.verify(token, 'EcommerceSecretPassword2021*', function(err, decoded) {
                newComplaint.Id_User=decoded.Id_usuario;
                console.log(decoded)
              });
            
            newComplaint.Id_Denunciado = req.body.Id_Denunciado
            newComplaint.Id_TipoDenuncia = req.body.Id_TipoDenuncia
            newComplaint.Comentario_Opcional = req.body.Comentario_Opcional
             
            /*
            await this.database.getLastComplaintIdQuery().then(function(results){
              newComplaint.Id_Denuncia=results  
            })
            
            await this.database.insertComplaint(
                newComplaint.Id_Denuncia,
                newComplaint.Id_Denunciante, 
                newComplaint.Id_Denunciado,
                newComplaint.Id_TipoDenuncia,
                newComplaint.Comentario_Opcional
            )
           */
            return res.json({status:true,complaint:newComplaint})

        })();
        
    }


}

export { ComplaintController }