USE Ecommerce;

DELIMITER //

CREATE PROCEDURE insertUser( 
	IN id_parameter INT,
    IN First_Name_parameter VARCHAR(30),
    IN Last_Name_parameter VARCHAR(30),
    IN Email_parameter VARCHAR(40),
    IN Address_parameter VARCHAR(150),
    IN Token_parameter INT
)
BEGIN
	INSERT INTO USER( Id, Firts_Name, Last_Name, Email, Address, Token ) VALUES 
		( id_parameter, First_Name_parameter, Last_Name_parameter, Email_parameter, Address_parameter, Token_parameter )
	;
END//

DELIMITER ;

USE Ecommerce;
CALL insertUser( 7, "Isabel", "Munguia", "IsabelM@email.com", "BD-09", 2 );
SELECT *FROM User;

DELIMITER //
CREATE PROCEDURE insertToken(
    IN Id_Parameter INT,
    IN Code_Token_Parameter VARCHAR(200),
    IN Creation_Date_Parameter DATETIME
)
BEGIN 

    INSERT INTO Token(Id, Code_Token, Creation_Date) VALUES
    (Id_Parameter,Code_Token_Parameter,Creation_Date_Parameter);
    
END //

DELIMITER ;

CALL insertToken(08,"BD-03","2021-05-04 08:55:05");
SELECT *FROM Token;

