USE Ecommerce;

DROP PROCEDURE IF EXISTS insertCategory ;

DELIMITER //

CREATE PROCEDURE insertCategory( 
	IN id_parameter INT,
    IN Name_parameter VARCHAR(30),
    IN Description_parameter VARCHAR(150)
)
BEGIN
	INSERT INTO CATEGORY( Id, Name, Description) VALUES 
		( id_parameter, Name_parameter,  Description_parameter)
	;
END//

DELIMITER ;

USE Ecommerce;
CALL insertCategory(10, "Alimentos", "Desde comida Vegana hasta todo tipo de carnes", 12 );
