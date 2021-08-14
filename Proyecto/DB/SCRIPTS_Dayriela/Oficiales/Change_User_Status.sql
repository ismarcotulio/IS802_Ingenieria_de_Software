use ecommerce;
DROP PROCEDURE IF EXISTS Change_Category_Status;

DELIMITER //
CREATE PROCEDURE Change_User_Status(IN Id_User_Param INT)
BEGIN
	UPDATE Ecommerce.USER SET Id_StateU = 2 WHERE Id = Id_User_Param;
END//

DELIMITER ;