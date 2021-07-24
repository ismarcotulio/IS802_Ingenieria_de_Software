USE Ecommerce;

DROP PROCEDURE IF EXISTS filterCategory;

DELIMITER //

CREATE PROCEDURE filterCategory(IN categoryID INT)
	BEGIN
	SELECT * FROM product WHERE PRODUCT.Id_Category_FK = categoryID;
	END//

DELIMITER ;
CALL filterCategory(9);

