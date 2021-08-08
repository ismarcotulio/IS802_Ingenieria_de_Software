use ecommerce;
DROP PROCEDURE IF EXISTS deleteWish;
DELIMITER //
CREATE PROCEDURE deleteWish(IN productId INT, IN userId INT)
BEGIN
	DELETE FROM wish_list_user WHERE Id_Product_FK=productId AND Id_User_FK=userId;
END//
DELIMITER ;
