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
              if(results[0]!=undefined){
                resolve(results[0].Id+1)
              }else{
                resolve(0)
              }
              
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

      insertUser(Id, Firts_Name, Last_Name, Email, Address,password){
        return new Promise((resolve, reject)=>{
          this.conexion.query(`CALL insertUser(?,?,?,?,?,?)`,[Id, Firts_Name, Last_Name, Email, Address, password], (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              resolve(results)
            }
          })
        })
      }

      insertProduct( Id, Name, Brand, Cost, Description, Id_Category, Id_User, Image, Date_Product, State, Department){
        return new Promise((resolve, reject)=>{      
          this.conexion.query(`CALL insertProduct(?,?,?,?,?,?,?,?,?,?,?)`,[ Id, Name, Brand, Cost, Description, Id_Category, Id_User, Image, Date_Product, State, Department], (error,results, fields)=>{
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
          }
        )})
      }

      getLastProductIdQuery(callback){
        return new Promise((resolve, reject)=>{
          this.conexion.query('SELECT * FROM PRODUCT ORDER BY Id DESC LIMIT 1;', (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              resolve(results[0].Id+1)
            }
          })
        })
      }

      getCategoriaProducts(categoria){
        return new Promise((resolve, reject)=>{
          this.conexion.query(`CALL filterCategory(?)`,[categoria], (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              resolve(results[0])
            }
          })
        })
      }

      getDepartamentoProducts(departamento){
        return new Promise((resolve, reject)=>{
          this.conexion.query(`CALL filterDepartment(?)`,[departamento], (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              resolve(results[0])
            }
          })
        })
      }

      getMultipleFilters(categoria,departamento){
        return new Promise((resolve, reject)=>{
          this.conexion.query(`CALL getMultipleFilters(?,?)`,[categoria,departamento], (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              resolve(results[0])
            }
          })
        })
      }

      filterByKeyword(keyword){
        return new Promise((resolve, reject)=>{
          this.conexion.query(`CALL ProductByKeyword(?)`,[keyword], (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              resolve(results[0])
            }
          })
        })
      }
}

export { Database }


