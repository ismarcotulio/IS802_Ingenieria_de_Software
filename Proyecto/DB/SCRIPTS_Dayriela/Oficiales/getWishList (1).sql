use ecommerce;
DROP PROCEDURE IF EXISTS getWishList;
DELIMITER //

CREATE PROCEDURE getWishList(IN userId INT)
BEGIN
	SELECT 
		PRODUCT.Id , 
		PRODUCT.Name , 
		PRODUCT.Description , 
		PRODUCT.Cost , 
		PRODUCT.Image , 
		PRODUCT.Date_Product  
	FROM 
		PRODUCT 
    	INNER JOIN 
		wish_list_user ON wish_list_user.Id_Product_FK = product.Id
	INNER JOIN
		user ON  product.Id_User_FK = user.Id 
	WHERE
    		wish_list_user.Id_User_FK = userId AND
		user.Id_State = 1 AND 
        TIMESTAMPDIFF(DAY, PRODUCT.Date_Product, date_format(NOW(),'%Y-%m-%d'))<90;
END //

DELIMITER ;



