USE Ecommerce;
DROP PROCEDURE IF EXISTS Change_Product_Status;
DELIMITER //

CREATE PROCEDURE Change_Product_Status(IN IdProduct_parameter INT, IN statusNum INT)
BEGIN
    UPDATE ecommerce.PRODUCT SET Status = statusNum WHERE (`Id` = IdProduct_parameter );
END //


DELIMITER ;

