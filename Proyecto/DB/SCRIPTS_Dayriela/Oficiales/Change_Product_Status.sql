USE Ecommerce;
DROP PROCEDURE IF EXISTS Change_Product_Status;
DELIMITER //

CREATE PROCEDURE Change_Product_Status(IN IdProduct_parameter INT, IN statusNum INT)
BEGIN
    	UPDATE PRODUCT SET Id_State = statusNum 
	WHERE 
		Id = IdProduct_parameter ;
END //


DELIMITER ;

