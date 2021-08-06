use ecommerce;
DROP PROCEDURE IF EXISTS getWishList;
DELIMITER //

CREATE PROCEDURE getWishList(IN userId INT)
BEGIN
	SELECT PRODUCT.Id , PRODUCT.Name , PRODUCT.Description , PRODUCT.Cost , PRODUCT.Image , PRODUCT.Date_Product  FROM PRODUCT 
    INNER JOIN wish_list_user ON wish_list_user.Id_Product_FK = product.Id WHERE
    wish_list_user.Id_User_FK = userId;
END //

DELIMITER ;



