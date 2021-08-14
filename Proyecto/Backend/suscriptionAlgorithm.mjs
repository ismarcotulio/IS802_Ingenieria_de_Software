import http from 'http'

class SuscriptionAlgorithm{

    constructor(database, mailer){
         this.database = database
         this.mailer = mailer
         
    }

    async start(){
        var categoriesData = []
        var count = 1

        await this.database.categoriesFromSuscription().then(function(categories){
            categories.forEach(category => {
                categoriesData.push([category.Id_Category_FK])
            });
        })

        categoriesData.forEach(async category => {
            var productsList = []
            
            await this.database.LastProductsOfCategory(category[0]).then(function(products){
                products.forEach(product => {
                    productsList.push([
                        product.Id,
                        product.Name,
                        product.Brand,
                        product.Cost,
                        product.Description,
                        product.Date_Product,
                        product.Image
                    ])
                });
                
            })
            category.push(productsList)
            if(count == categoriesData.length){
                this.innerStart(categoriesData)
            }
            count = count + 1
        });
    }

    async innerStart(categoriesData){
        var suscriptions = []
        await this.database.getSuscriptions().then(function(suscriptions){
            suscriptions.forEach(suscription => {
                if(suscription.User_State == 1 && suscription.Category_Status == 1){
                    categoriesData.forEach(element => {
                        if(element[0] == suscription.Category_Id && element[1] != []){
                            let html = `
                            <!doctype html>
                            <html lang="en">
                                <head>
                                    <meta charset="utf-8">
                                    <title>PrFrontend</title>
                                    <meta name="viewport" content="width=device-width, initial-scale=1">
                                </head>
                                <body>
                            `
                            element[1].forEach(product => {
                                html += `
                                        <div style="position:relative; width:50vw; height:50vh; margin-top:5Vh; background:black; color:white;">
                                            ${product[1]}
                                        </div>
                                        `
                            });

                            html += `</body></html>`
                            

                            const data = JSON.stringify({
                                from: 'criptomarket@gmail.com',
                                to: suscription.User_Email,
                                subject: suscription.Category_Name,
                                html: html
                            })

                            const options = {
                                hostname: '127.0.0.1',
                                port: 3000,
                                path: '/sendEmail',
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Content-Length': data.length
                                }
                            }

                            const req = http.request(options, res => {
                            console.log(`statusCode: ${res.statusCode}`)

                            res.on('data', d => {
                                process.stdout.write(d)
                            })
                            })

                            req.on('error', error => {
                            console.error(error)
                            })

                            req.write(data)
                            req.end()
                        }
                    });
                }
            });
        })
    }
    
    

    
}

export { SuscriptionAlgorithm }


