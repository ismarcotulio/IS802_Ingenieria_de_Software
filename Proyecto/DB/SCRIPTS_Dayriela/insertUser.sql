USE Ecommerce;
DROP PROCEDURE IF EXISTS insertUser ;

DELIMITER //

CREATE PROCEDURE insertUser( 
	IN id_parameter INT,
    IN First_Name_parameter VARCHAR(30),
    IN Last_Name_parameter VARCHAR(30),
    IN Email_parameter VARCHAR(40),
    IN Address_parameter VARCHAR(150),
    IN Token_parameter INT,
    IN Password_parameter VARCHAR(30)
)
BEGIN
	INSERT INTO USER( Id, Firts_Name, Last_Name, Email, Address, Token, Password ) VALUES 
		( id_parameter, First_Name_parameter, Last_Name_parameter, Email_parameter, Address_parameter, Token_parameter, Password_parameter )
	;
END//

DELIMITER ;