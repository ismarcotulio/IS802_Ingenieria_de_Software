USE Ecommerce;
DROP PROCEDURE IF EXISTS ProductByKeyword;

DELIMITER //
CREATE PROCEDURE ProductByKeyword(IN Buscar VARCHAR(30))
BEGIN 
  SELECT * FROM PRODUCT
    WHERE Name LIKE CONCAT('%', Buscar , '%'); 
END //

DELIMITER ;



