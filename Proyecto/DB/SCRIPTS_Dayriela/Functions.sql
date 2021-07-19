USE ECOMMERCE;
DELIMITER //
 CREATE FUNCTION ExtractInformation (Nombre INT) RETURNS INT
 BEGIN 
   DECLARE FUNCION INT;
	  SELECT count(*) INTO FUNCION FROM USER INNER JOIN TOKEN ON USER.Id = TOKEN.Id ;
   RETURN FUNCION;
   
   END//
   DELIMITER ;
   
   USE Ecommerce;
   DELIMITER //
   CREATE PROCEDURE InformationUser(IN Id INT, OUT IdParam )
   BEGIN
	 SELECT *FROM USER INNER JOIN TOKEN ON USER.Id = TOKEN.Id ;
 END//
    
DELIMITER ;
DROP PROCEDURE InformationUser;

CALL extractInformation(01);
SELECT @Id;
   
   

   
   
   
   
   
   
   
   
   USE ECOMMERCE;
DELIMITER //
 CREATE FUNCTION ExtractInformation (Nombre INT) RETURNS USER
 AS
   RETURN
	  SELECT *FROM USER INNER JOIN TOKEN ON USER.Id = TOKEN.Id ;
   END//
   DELIMITER ;
   
   
   
   SELECT ExtractInformation (5);
   