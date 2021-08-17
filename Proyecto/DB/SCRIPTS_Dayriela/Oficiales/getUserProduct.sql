use ecommerce; 

Delimiter //

CREATE PROCEDURE  getUserProduct(IN userId INT)
Begin
	SELECT * from PRODUCT WHERE Id_User_FK=userId;
End//