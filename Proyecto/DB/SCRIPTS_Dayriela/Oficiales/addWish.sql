use ecommerce;

DELIMITER //
CREATE PROCEDURE addWish(IN productId INT,IN userId INT)
Begin
	INSERT INTO wish_list_user (Id_Product_FK,Id_User_FK) VALUES
    (productId,userId);
END//

DELIMITER ;
