USE Ecommerce;

DELIMITER //
CREATE PROCEDURE Change_Category_Status ( IN categoryId INT , IN statusNum INT )
BEGIN
	UPDATE  "Ecommerce " . ` Category `  SET  ` Estate ` = statusNum DONDE ( ` Id `  = categoryId);
END //

DELIMITER ;