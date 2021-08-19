USE Ecommerce;
DROP PROCEDURE IF EXISTS insertCategory ;

DELIMITER //

CREATE PROCEDURE insertCategory( 
    IN Name_parameter VARCHAR(30),
    IN Description_parameter VARCHAR(150),
	IN imageUrl VARCHAR(200)
)
BEGIN
	INSERT INTO CATEGORY(Name, Description, Image) VALUES 
		(Name_parameter,  Description_parameter, imageUrl)
	;
END //

DELIMITER ;




