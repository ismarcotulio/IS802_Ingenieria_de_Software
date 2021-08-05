USE Ecommerce;
DROP PROCEDURE IF EXISTS insertProduct ;

DELIMITER //

CREATE PROCEDURE insertProduct( 
	IN id_parameter INT,
    IN Name_parameter VARCHAR(30),
    IN Brand_parameter VARCHAR(30),
    IN Cost_parameter INT,
    IN Description_parameter VARCHAR(150),
    IN Id_Category_FK_parameter INT,
    IN Id_User_FK_parameter INT(30),
    IN Image_parameter VARCHAR(100),
    IN Date_Product_parameter DATE,
    IN Id_State_FK_parameter INT,
    IN Id_Department_FK_parameter INT
)
BEGIN
	INSERT INTO PRODUCT( Id, Name, Brand, Cost, Description, Id_Category_FK, Id_User_FK, Image, Date_Product,Id_State_FK,Id_Department_FK 
) VALUES 
		( id_parameter, Name_parameter, Brand_parameter, Cost_parameter, Description_parameter, Id_Category_FK_parameter, Id_User_FK_parameter , Image_parameter ,Date_Product_parameter,Id_State_FK_parameter, Id_Department_FK_parameter)
	;
END//

DELIMITER ;




