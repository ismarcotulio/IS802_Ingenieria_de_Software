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
 CALL extraer( "Dayriela", @email );
 SELECT @email;


 

 //Extrae datos de la tabla usuario junto con los campos del token
  DELIMITER // 
     CREATE PROCEDURE extractInformation(IN done BOOLEAN)
  BEGIN
	 SELECT *FROM USER INNER JOIN TOKEN ON USER.Id = TOKEN.Id ;
 END//
    
DELIMITER ;

CALL extractInformation(true);

//EXTRAE DATOS ESPECIFICOS ID_USER, ID_TOKEN, CODE_TOKEN
DELIMITER //
CREATE PROCEDURE DataCollection(IN done BOOLEAN)
  BEGIN
    SELECT USER.Id, TOKEN.Id, TOKEN.Code_Token FROM USER INNER JOIN TOKEN ON USER.Id= TOKEN.Id ;
  END//
    DELIMITER ;

CALL DataCollection(true);

 SHOW PROCEDURE STATUS;