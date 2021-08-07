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
            password: 'password',
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

      insertComplaints( Id_Whistleblower, Id_Denounced, Id_ComplaintType, Optional_Comment){
        return new Promise((resolve, reject)=>{      
          this.conexion.query(`CALL insertComplaints(?,?,?,?)`,[ Id_Whistleblower, Id_Denounced, Id_ComplaintType, Optional_Comment], (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              resolve(results)
            }
          })
        })
      }

      insertSuscription( Id_User_FK, Id_Category_FK){
        return new Promise((resolve, reject)=>{      
          this.conexion.query(`CALL insertSuscription(?,?)`,[ Id_User_FK, Id_Category_FK], (error,results, fields)=>{
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

      getLastComplaintIdQuery(callback){
        return new Promise((resolve, reject)=>{
          this.conexion.query('SELECT * FROM COMPLAINTS ORDER BY Id_Complaints DESC LIMIT 1;', (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              resolve(results[0].Id_Complaints+1)
            }
          })
        })
      }

      getLastSuscriptionIdQuery(callback){
        return new Promise((resolve, reject)=>{
          this.conexion.query('SELECT * FROM SUSCRIPTION ORDER BY Id_Suscription DESC LIMIT 1;', (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              resolve(results[0].Id_Suscription+1)
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

      getStatusAccount(email){
        return new Promise((resolve, reject)=>{
          this.conexion.query(
            `SELECT Check_Email FROM USER WHERE Email = ?`,
            [email], (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
                if(results[0] != undefined){
                  console.log(results[0]["Check_Email"])    
                  resolve(results[0].Check_Email)
                }else{
                  resolve("cuenta no existe")
                }  
            }
          })
        })
      }

      confirmEmail(email){
        return new Promise((resolve, reject)=>{
          this.conexion.query(
            ` UPDATE USER SET Check_Email=true WHERE Email = ?`,
            [email], (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
                resolve(true)
            }
          })
        })
      }



      getProduct(id){
        return new Promise((resolve, reject)=>{
          this.conexion.query(
            ` SELECT PRODUCT.Id AS Id, PRODUCT.Name AS Name, PRODUCT.Brand AS Brand,
            PRODUCT.Cost AS Cost, PRODUCT.Description AS Description, PRODUCT.Id_Category_FK AS Id_Category,
            PRODUCT.Image AS Image, PRODUCT.Date_Product AS Date_Product,
            PRODUCT.Id_State_FK AS Id_State, PRODUCT.Id_Department_FK AS Id_Department,
            USER.Id_User AS Id_User, USER.Firts_Name AS Firts_Name, USER.Last_Name AS Last_Name,
            USER.Email AS Email, USER.Address AS Address
  
              FROM PRODUCT
              JOIN USER ON PRODUCT.Id_User_FK = USER.Id  
              WHERE PRODUCT.Id = ?`,
            [id], (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
                resolve(results[0])
            }
          })
        })
      }

      getComplaint(Id_Complaints){
        return new Promise((resolve, reject)=>{
          this.conexion.query(
            ` SELECT COMPLAINTS.Id_Complaints AS Id_Complaints, COMPLAINTS.Id_Whistleblower AS Id_Whistleblower, 
            COMPLAINTS.Id_Denounced AS Id_Denounced, COMPLAINTS.Id_ComplaintType AS Id_ComplaintType, 
            COMPLAINTS.Optional_Comment AS Optional_Comment, COMPLAINTS.Date_Complaints AS Date_Complaints
            USER.Id AS Id_User, USER.Firts_Name AS Firts_Name, USER.Last_Name AS Last_Name, 
            USER.Email AS Email, USER.Address AS Address
  
              FROM COMPLAINTS
              JOIN USER ON COMPLAINTS.Id_User_FK = USER.Id 
              WHERE COMPLAINTS.Id_Complaints = ?`,
            [Id_Complaints], (error,results, fields)=>{
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


