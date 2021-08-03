USE Ecommerce;

DROP PROCEDURE IF EXISTS Get_Product_Comments;

DELIMITER //

CREATE PROCEDURE Get_Product_Comments(IN productId INT)
  BEGIN
 
  SELECT USER.Firts_Name, USER.Last_Name,COMMENT.Date_Comment, COMMENT.Comment FROM COMMENT 
  INNER JOIN USER ON USER.Id = COMMENT.Id_User_FK INNER JOIN PRODUCT_COMMENT ON PRODUCT_COMMENT.Id_Comment_FK= COMMENT.Id_Comment
  WHERE product_comment.Id_Product_FK=productId;
  END//

DROP PROCEDURE IF EXISTS Get_Seller_Comments;

DELIMITER //

CREATE PROCEDURE Get_Seller_Comments(IN sellerId INT)
  BEGIN
 
  SELECT USER.Firts_Name,USER.Last_Name, COMMENT.Date_Comment, COMMENT.Comment , SELLER_COMMENT.Qualification FROM COMMENT 
  INNER JOIN USER ON USER.Id = COMMENT.Id_User_FK INNER JOIN SELLER_COMMENT ON USER.Id = SELLER_COMMENT.Id_Comment_FK
  WHERE seller_comment.Id_Seller_FK=sellerId;
  END//
