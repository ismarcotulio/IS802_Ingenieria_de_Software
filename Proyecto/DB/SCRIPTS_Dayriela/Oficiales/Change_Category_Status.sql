use ecommerce;
DROP PROCEDURE IF EXISTS Change_Category_Status;

DELIMITER //
CREATE PROCEDURE Change_Category_Status(IN categoryId INT, IN statusNum INT)
BEGIN
	UPDATE ecommerce.category SET Status = statusNum WHERE (`Id` = categoryId);
END//

DELIMITER ;


