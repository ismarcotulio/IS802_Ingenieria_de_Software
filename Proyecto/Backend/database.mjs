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

      authUser(email,password){
        return new Promise((resolve, reject)=>{
          this.conexion.query(`CALL authUser(?,?)`,[email,password], (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              if(results[0]!=undefined){
                resolve(results[0])
              }else{
                resolve("False")
              }
            }
          })
        })
      }

    getAllCategories(){
      return new Promise((resolve, reject)=>{
        this.conexion.query(`CALL someprocedure()`, (error,results, fields)=>{
          if(error){
            reject(error)
          }else{
            if(results[0]!=undefined){
              resolve(results[0])
            }else{
              resolve("False")
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
              if(results[0].length==0){
                resolve("No hay productos")
              }else{
                resolve(results[0])
              }
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
              if(results[0].length==0){
                resolve("No hay productos")
              }else if(results[0][0].Status==0){
                resolve(false)
              }else{
                resolve(results[0])
              }
              
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
              if(results[0].length==0){
                resolve("No hay productos")
              }else if(results[0][0].Status==0){
                resolve(false)
              }else{
                resolve(results[0])
              }
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
            USER.Id AS Id_User, USER.Firts_Name AS Firts_Name, USER.Last_Name AS Last_Name,
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

      getProductComment(productId){
        return new Promise((resolve, reject)=>{
          this.conexion.query(
            `CALL Get_Product_Comments(?)`,
            [productId], (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              resolve(results[0])
            }
          })
        })
      }
  
       getVendedorComment(sellerId){
      return new Promise((resolve, reject)=>{
        this.conexion.query(
          `CALL Get_Seller_Comments(?)`,
          [sellerId], (error,results, fields)=>{
          if(error){
            reject(error)
          }else{
            resolve(results[0])
          }
        })
      })
    }

    putComment(typeComment,reqbody,date,userId){
      return new Promise((resolve, reject)=>{
        if(typeComment==0){
          this.conexion.query(
            `CALL InsertComment_Product(?,?,?,?)`,
            [reqbody.productId,reqbody.comment,date,userId], (error,results, fields)=>{
            if(error){
              reject(false)
            }else{
              resolve(true)
            }
          })
        }else{
          this.conexion.query(
            `CALL InsertComment_Seller(?,?,?,?,?)`,
            [userId,reqbody.sellerId,reqbody.comment,date,reqbody.calificacion], (error,results, fields)=>{
            if(error){
              reject(false)
            }else{
              resolve(true)
            }
          })
        }
      })
    }

    getWishList(userId){
      return new Promise((resolve, reject)=>{
        this.conexion.query(
          `CALL getWishList(?)`,
          [userId], (error,results, fields)=>{
          if(error){
            reject(error)
          }else{
            if(results[0]!=undefined){
              resolve(results[0])
            }else{
              resolve(false)
            }
          }
        })
      })
    }

    removeWishList(productId,userId){
      return new Promise((resolve, reject)=>{
        this.conexion.query(
          `CALL deleteWish(?,?)`,
          [productId,userId], (error,results, fields)=>{
          if(error){
            reject(error)
          }else{
            resolve(true)
          }
        })
      })
    }

    addWish(productId,userId){
      return new Promise((resolve, reject)=>{
        this.conexion.query(
          `CALL addWish(?,?)`,
          [productId,userId], (error,results, fields)=>{
          if(error){
            reject(error)
          }else{
            resolve(true)
          }
        })
      })
    }

    searchWish(productId,userId){
      return new Promise((resolve, reject)=>{
        this.conexion.query(
          `CALL verifyWish(?,?)`,
          [productId,userId], (error,results, fields)=>{
          if(error){
            reject(error)
          }else{
            if(results[0][0]!=undefined){
              resolve(true)
            }else{
              resolve(false)
            }
          }
        })
      })
    }

    countWish(userId){
      return new Promise((resolve, reject)=>{
        this.conexion.query(
          `CALL countWish(?)`,
          [userId], (error,results, fields)=>{
          if(error){
            reject(error)
          }else{
            resolve(results[0][0])
          }
        })
      })
    }

    changeCategoryStatus(categoryId,statusNum){
      return new Promise((resolve, reject)=>{
        this.conexion.query(
          `CALL Change_Category_Status(?,?)`,
          [categoryId,statusNum], (error,results, fields)=>{
          if(error){
            reject(error)
          }else{
            resolve(true)
          }
        })
      })
    }

    getUserRole(userId){
      return new Promise((resolve, reject)=>{
        this.conexion.query(
          `
          SELECT Id_User_Type_FK
          FROM
            USER_USER_TYPE
          WHERE
            Id_User_FK = ?
          `,
          [userId], (error,results, fields)=>{
          if(error){
            reject(error)
          }else{
            resolve(results[0])
          }
        })
      })
    }

    getComplaints(){
      return new Promise((resolve, reject)=>{
        this.conexion.query(
          `CALL GetComplaints()`, [], (error,results, fields)=>{
          if(error){
            reject(error)
          }else{
            resolve(results[0])
          }
        })
      })
    }

    removeComplaint(complaint_Id){
      return new Promise((resolve, reject)=>{
        this.conexion.query(
          `CALL removeComplaint(?)`,
          [complaint_Id], (error,results, fields)=>{
          if(error){
            reject(error)
          }else{
            resolve(true)
          }
        })
      })
    }

    acceptComplaint(Id_Denounced){
      return new Promise((resolve, reject)=>{
        this.conexion.query(
          `CALL Change_User_Status(?)`,
          [Id_Denounced], (error,results, fields)=>{
          if(error){
            reject(error)
          }else{
            resolve(true)
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
  
      removeSuscription(IdCategory_parameter,IdUser_parameter){
        return new Promise((resolve, reject)=>{
          this.conexion.query(
            `CALL DeleteSuscription(?,?)`,
            [IdUser_parameter,IdCategory_parameter], (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              resolve(true)
            }
          })
        })
      }

      searchSuscription(categoryId, userId){
        return new Promise((resolve, reject)=>{
          this.conexion.query(
            `SELECT IF((SUSCRIPTION.Id_User_FK= ? AND SUSCRIPTION.Id_Category_FK= ?), TRUE , FALSE) as Verify FROM SUSCRIPTION`,
            [userId,categoryId], (error,results, fields)=>{
              
            if(error){
              reject(error)
            }else{
              resolve(results)
            }
          })
        })
      }

      categoriesFromSuscription(){
        return new Promise((resolve, reject)=>{
          this.conexion.query(
            `SELECT DISTINCT Id_Category_FK FROM SUSCRIPTION`,
            [], (error,results, fields)=>{
              
            if(error){
              reject(error)
            }else{
              resolve(results)
            }
          })
        })
      }

      LastProductsOfCategory(Id_Category){
        return new Promise((resolve, reject)=>{
          this.conexion.query(
            `SELECT * FROM PRODUCT WHERE Id_Category_FK = ? ORDER BY Id DESC LIMIT 3`,
            [Id_Category], (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              resolve(results)
            }
          })
        })
      }

      getSuscriptions(){
        return new Promise((resolve, reject)=>{
          this.conexion.query(
            `SELECT
                CATEGORY.Id AS Category_Id,
                CATEGORY.Name AS Category_Name,
                CATEGORY.Status AS Category_Status,
                USER.Id AS User_Id,
                USER.Firts_Name AS User_FirstName,
                USER.last_Name AS User_LastName,
                USER.Email AS User_Email,
                USER.Id_StateU AS User_State
            FROM
                SUSCRIPTION
            JOIN
                USER ON SUSCRIPTION.Id_User_FK = USER.Id
            JOIN
                CATEGORY ON SUSCRIPTION.Id_Category_FK = CATEGORY.Id 
            `,
            [], (error,results, fields)=>{
            if(error){
              reject(error)
            }else{
              resolve(results)
            }
          })
        })
      }

      updateTimePost(time){
        return new Promise((resolve,reject)=>{
          this.conexion.query(`SET @timePost = ${time}`,(error,results,fields)=>{
            if(error){
              reject(error);
            }else{
              resolve(results)
            }
          })

        })
      }
        
}

export { Database }