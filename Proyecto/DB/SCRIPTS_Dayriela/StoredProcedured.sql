USE ecommerce;

DELIMITER //

CREATE PROCEDURE extraer( IN firstName VARCHAR(30), OUT Email_Param VARCHAR(30) )
	BEGIN
		SELECT
			Email INTO Email_Param
		FROM
			User
		WHERE
			Firts_Name = firstName;
	END//
    
DELIMITER ;

USE ecommerce;
 CALL extraer( "Katerin", @email );
 SELECT @email;
 

Use Ecommerce;
//EXTRAE LOS DATOS POR MEDIO DEL NOMBRE DEL USUARIO

DELIMITER //
   CREATE PROCEDURE ExtraerUser (IN name VARCHAR(30), OUT Id_Param INT)
      BEGIN
         SELECT Firts_Name, Last_Name , Email , Address , Token
    FROM USER INNER JOIN TOKEN ON USER.Id = TOKEN.Id 
      WHERE
   Firts_Name = name ;
	END//
DELIMITER ;

USE Ecommerce;
CALL ExtraerUser("Katerin", @Id);

DELIMITER //
     
    



 

 //Extrae datos especificos de la tabla usuario 
 
 use ecommerce;
  DELIMITER // 
     CREATE PROCEDURE extractInformation(IN userId INT)
  BEGIN
	 SELECT USER.Firts_Name, USER.Last_Name, USER.Email, USER.Address,
     TOKEN.Code_Token FROM USER INNER JOIN TOKEN ON USER.TOKEN = TOKEN.Id 
     WHERE
     USER.Id = userId;
 END//
 
 DELIMITER ;
 Call extractInformation(5);


//EXTRAE DATOS ESPECIFICOS ID_USER, ID_TOKEN, CODE_TOKEN
DELIMITER //
CREATE PROCEDURE DataCollection(IN done BOOLEAN)
  BEGIN
    SELECT USER.Id, TOKEN.Id, TOKEN.Code_Token FROM USER INNER JOIN TOKEN ON USER.Id= TOKEN.Id ;
  END//
    DELIMITER ;

CALL DataCollection(true);

 SHOW PROCEDURE STATUS;