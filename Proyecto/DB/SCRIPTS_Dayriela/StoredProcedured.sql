USE ecommerce; 
 DELIMITER //
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

 SHOW PROCEDURE STATUS;