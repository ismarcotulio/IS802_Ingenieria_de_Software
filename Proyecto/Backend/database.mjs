class Database{

    constructor(mysql){
         this.mysql = mysql
         this.conexion
        
         this.startConexion()
    }    
    
    startConexion(){
        this.conexion = this.mysql.createConnection({ 
            host: 'localhost',
            user: 'root',
            password: 'jafethfer10',
            database: 'ecommerce'
        })
        return this.conexion
    }

    getStatus(){
        this.conexion.connect((e)=>{
            if(e){
                // throw e;
                console.log('error');
            }else{
                console.log('Conexion con DB exitosa.')
            }
        })
    }

     getLastUserIdQuery(callback){
        return new Promise((resolve, reject)=>{
          this.conexion.query('SELECT * FROM user ORDER BY Id DESC LIMIT 1;', (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              resolve(results[0].Id+1)
            }
            
          })
        })
      }

      getLastTokenIdQuery(){
        return new Promise((resolve, reject)=>{
          this.conexion.query(`SELECT * FROM token ORDER BY Id DESC LIMIT 1;`, (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              resolve(results[0].Id+1)
            }
            
          })
        })
      }

      insertToken(lastToken,token,todayDate){
        return new Promise((resolve, reject)=>{
          console.log(`el ultimo token es: ${lastToken}  el token es: ${token}  la fecha es: ${todayDate}`)
          this.conexion.query("CALL insertToken(?,?,?)",[lastToken,token,todayDate], (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              resolve(results)
            }
          })
        })
      }

      insertUser(Id, Firts_Name, Last_Name, Email, Address,lastToken,password){
        return new Promise((resolve, reject)=>{
          this.conexion.query(`CALL insertUser(?,?,?,?,?,?,?)`,[Id, Firts_Name, Last_Name, Email, Address, lastToken,password], (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              resolve(results)
            }
          })
        })
      }

      authUser(email,password){
        return new Promise((resolve, reject)=>{
          this.conexion.query(`CALL authUser(?,?)`,[email,password], (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              if(results[0][0]!=undefined){
                resolve(results[0][0].Id)
              }else{
                reject("False")
              }
            }
          })
        })
      }

      getAllProducts(){
        return new Promise((resolve, reject)=>{
          this.conexion.query(`CALL DataCollectionProduct(?)`,[true], (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              resolve(results[0])
            }
          })
        })
      }

      getProducts(categoria){
        return new Promise((resolve, reject)=>{
          this.conexion.query(`CALL DataCollectionProdut(?)`,[true], (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              resolve(results)
            }
          })
        })
      }
}

export { Database }


