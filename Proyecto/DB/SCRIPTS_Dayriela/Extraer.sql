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