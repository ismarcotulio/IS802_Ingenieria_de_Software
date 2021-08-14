USE Ecommerce;
DROP PROCEDURE IF EXISTS insertUser;
DELIMITER //

CREATE PROCEDURE insertUser( 
	IN id_parameter INT,
    IN First_Name_parameter VARCHAR(30),
    IN Last_Name_parameter VARCHAR(30),
    IN Email_parameter VARCHAR(40),
    IN Address_parameter VARCHAR(150),
    IN Password_parameter VARCHAR(30)
)
BEGIN
	DECLARE Id_User_User_Type INT;

	SELECT Id INTO Id_User_User_Type
	FROM
		USER_USER_TYPE
	ORDER BY Id DESC
	LIMIT 1; 

	INSERT INTO USER( Id, Firts_Name, Last_Name, Email, Address, Password) VALUES 
		( id_parameter, First_Name_parameter, Last_Name_parameter, Email_parameter, Address_parameter, Password_parameter )
	;

	INSERT INTO USER_USER_TYPE(Id, Id_User_FK, Id_User_Type_FK) VALUES
		(Id_User_User_Type+1 , id_parameter, 2)
	;
END//

DELIMITER ;



