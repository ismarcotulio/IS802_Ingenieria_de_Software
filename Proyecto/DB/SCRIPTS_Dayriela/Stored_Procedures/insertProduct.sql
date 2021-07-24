USE Ecommerce;
DROP PROCEDURE IF EXISTS insertProduct ;

DELIMITER //

CREATE PROCEDURE insertProduct( 
	IN id_parameter INT,
    IN Name_parameter VARCHAR(30),
    IN Brand_parameter VARCHAR(30),
    IN Cost_parameter INT,
    IN Description_parameter VARCHAR(150),
    IN Id_Category_parameter INT,
    IN Id_User_FK_parameter INT(30),
    IN Image_parameter VARCHAR(30),
    IN Date_Product_parameter DATE,
    IN State_parameter INT,
    IN Id_Department_FK_parameter INT
)
BEGIN
	INSERT INTO PRODUCT( Id, Name, Brand, Cost, Description, Id_Category_FK, Id_User_FK, Image, Date_Product,State,Id_Department_FK 
) VALUES 
		( id_parameter, Name_parameter, Brand_parameter, Cost_parameter, Description_parameter, Id_Category_parameter, Id_User_FK_parameter , Image_parameter ,Date_Product_parameter,State_parameter, Id_Department_FK_parameter)
	;
END//

DELIMITER ;


USE Ecommerce;
CALL insertProduct(19, "Cepillo Dental", "Colgate", 78 , "Cuidado superior para toda la boca", 5 , 2 ,"", "2021-05-04", 1, 15 );


//Busca producto por palabra clave
DELIMITER //
CREATE PROCEDURE ProductByKeyword(IN Buscar VARCHAR(30))
BEGIN 
  SELECT PRODUCT.Id , PRODUCT.Name , PRODUCT.Description , PRODUCT.Cost FROM PRODUCT
    WHERE Name LIKE CONCAT('%', Buscar , '%'); 
END //

DELIMITER ;
CALL ProductByKeyword ("te");


