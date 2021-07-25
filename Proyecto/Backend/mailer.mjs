class Mailer{

    constructor(mailer){
         this.mailer = mailer
         this.transporter
        
         this.startTransporter()
    }    
    
    startTransporter(){
        this.transporter = this.mailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "criptomarkethn@gmail.com",
              pass: "Abcd123@"
            },
          });
    }

    async sendEmail(from, to, subject, html){
        return new Promise((resolve, reject)=>{
                this.transporter.sendMail({
                    from: `${from}`,
                    to: `${to}`,
                    subject: `${subject}`,
                    html: `${html}`
                }, (error, result) => {
                    if(error){
                        resolve(false)
                        console.log(error)
                    }
                    resolve(true)
                    console.log(result)
                  });
        })
        
    }

    
}

export { Mailer }


