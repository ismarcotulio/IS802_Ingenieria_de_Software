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
    IN Image_parameter VARCHAR(30),
    IN Date_Product_parameter DATE,
    IN State_parameter INT
)
BEGIN
	INSERT INTO PRODUCT( Id, Name, Type, Cost, Description, Id_Category, Id_Users, Image, Date_Product,State) VALUES 
		( id_parameter, Name_parameter, Type_parameter, Costparameter, Description_parameter, Id_Category_parameter, Id_Users_parameter , Image_parameter ,Date_Product_parameter,State_parameter)
	;
END//

DELIMITER ;

USE Ecommerce;
CALL insertProduct(1, "Televisor", "LCD", 5800 , "Pantalla plana y delgada", 1 , 2 ,"IMAGE10", "2021-02-01", 1 );

SELECT PRODUCT.Name, PRODUCT.Type, PRODUCT.Cost , PRODUCT.Description FROM PRODUCT WHERE Id_Category=5;
SELECT *FROM PRODUCT;



//Busca producto por palabra clave
DELIMITER //
CREATE PROCEDURE ProductByKeyword(IN Buscar VARCHAR(30))
BEGIN 
  SELECT PRODUCT.Id , PRODUCT.Name , PRODUCT.Description , PRODUCT.Cost FROM PRODUCT
    WHERE Name LIKE CONCAT('%', Buscar , '%'); 
END //

DELIMITER ;
CALL ProductByKeyword ("Ce");


