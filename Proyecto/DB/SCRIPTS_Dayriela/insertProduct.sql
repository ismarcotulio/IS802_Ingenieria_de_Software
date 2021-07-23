USE Ecommerce;
DROP PROCEDURE IF EXISTS insertProduct ;

DELIMITER //

CREATE PROCEDURE insertProduct( 
	IN id_parameter INT,
    IN Name_parameter VARCHAR(30),
    IN Brand_parameter VARCHAR(30),
    IN Costparameter INT,
    IN Description_parameter VARCHAR(150),
    IN Id_Category_parameter INT,
    IN Id_Users_parameter INT(30),
    IN Image_parameter VARCHAR(30),
    IN Date_Product_parameter DATE,
    IN State_parameter INT
)
BEGIN
	INSERT INTO PRODUCT( Id, Name, Brand, Cost, Description, Id_Category, Id_Users, Image, Date_Product,State) VALUES 
		( id_parameter, Name_parameter, Brand_parameter, Costparameter, Description_parameter, Id_Category_parameter, Id_Users_parameter , Image_parameter ,Date_Product_parameter,State_parameter)
	;
END//

DELIMITER ;

USE Ecommerce;
CALL insertProduct(3, "Cepillo Dental", "Colgate", 78 , "Cuidado superior para toda la boca", 5 , 2 ,"IMAGE110", "2021-05-04", 1 );
CALL insertProduct(1, "Cepillo Secador", "Revlon", 2300 , "Suavisa el cabello y controla el frizz", 5 , 1 ,"IMAGE110", "2021-05-07", 1 );
CALL insertProduct(2, "Televisor", "Samsung", 5800 , "LCD, Pantalla plana y delgada", 1 , 6 ,"IMAGE01", "2021-07-05", 3 );
CALL insertProduct(4, "Estereo", "Sony", 11800 , "Mejor calidad de Audio", 1 , 4 ,"IMAGE013", "2021-04-05", 1 );

SELECT PRODUCT.Name, PRODUCT.Brand, PRODUCT.Cost , PRODUCT.Description FROM PRODUCT WHERE Id_Category=1;
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


