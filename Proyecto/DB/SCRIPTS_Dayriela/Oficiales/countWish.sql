use ecommerce;

Delimiter //
CREATE PROCEDURE countWish(IN userId INT)
Begin
    SELECT count(*) as numWish FROM PRODUCT 
    INNER JOIN wish_list_user ON wish_list_user.Id_Product_FK = product.Id WHERE
    wish_list_user.Id_User_FK = userId;
End//