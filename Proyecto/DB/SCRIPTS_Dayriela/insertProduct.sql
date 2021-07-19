USE Ecommerce;
DROP PROCEDURE IF EXISTS insertProduct ;

DELIMITER //

CREATE PROCEDURE insertProduct( 
	IN id_parameter INT,
    IN Name_parameter VARCHAR(30),
    IN Type_parameter VARCHAR(30),
    IN Costparameter INT,
    IN Description_parameter VARCHAR(150),
    IN Id_Category_parameter INT,
    IN Id_Users_parameter INT(30),
    IN Image_parameter VARCHAR(30)
)
BEGIN
	INSERT INTO PRODUCT( Id, Name, Type, Cost, Description, Id_Category, Id_Users, Image) VALUES 
		( id_parameter, Name_parameter, Type_parameter, Costparameter, Description_parameter, Id_Category_parameter, Id_Users_parameter , Image_parameter )
	;
END//

USE Ecommerce;
CALL insertProduct(2, "Mesa de Noche", "Madera de laurel", 1.800 , "Muebles de Dormitorio", 3 , 4 ,"IMAGE112" );

SELECT *FROM PRODUCT;

DELIMITER ;


