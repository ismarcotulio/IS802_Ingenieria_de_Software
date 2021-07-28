
class EmailController{
    
    constructor (mailer, database){
        this.mailer = mailer
        this.database = database
    }

    sendEmail(req, res){
        
        (async () => {
            
            var result = false

            await this.mailer.sendEmail(
                req.body.from,
                req.body.to,
                req.body.subject,
                req.body.html
            ).then(function(response){
                result=response 
            })  

            return res.json({status: result})
      
        })();       
    }

    confirmEmail(req, res){
        (async () => {
            console.log(req.query.email)
            await this.database.confirmEmail(req.query.email).then(function(result){
                if(result == true){
                    res.writeHead(301,
                        {Location: 'http://localhost:4200/sesion'}
                      );
                      res.end();
                }
            })      
      
        })();
    }
    

}

export { EmailController }