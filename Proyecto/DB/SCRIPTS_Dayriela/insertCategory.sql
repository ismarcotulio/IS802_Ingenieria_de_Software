USE Ecommerce;
DROP PROCEDURE IF EXISTS insertCategory ;

DELIMITER //

CREATE PROCEDURE insertCategory( 
	IN id_parameter INT,
    IN Name_parameter VARCHAR(30),
    IN Description_parameter VARCHAR(150),
    IN Department_parameter INT
)
BEGIN
	INSERT INTO CATEGORY( Id, Name, Description, Department) VALUES 
		( id_parameter, Name_parameter,  Description_parameter, Department_parameter )
	;
END//

USE Ecommerce;
CALL insertCategory(10, "Alimentos", "Desde comida Vegana hasta todo tipo de carnes", 12 );
DELIMITER ;
