use ecommerce;
DELIMITER //
CREATE PROCEDURE verifyWish(IN productId INT, IN userId INT)
BEGIN
	SELECT * FROM wish_list_user WHERE Id_Product_FK=productId AND Id_User_FK=userId;
END//

DELIMITER ;

