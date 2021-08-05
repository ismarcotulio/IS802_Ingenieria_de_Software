USE Ecommerce;

DROP PROCEDURE IF EXISTS Get_Product_Comments;

DELIMITER //

CREATE PROCEDURE Get_Product_Comments(IN productId INT)
  BEGIN
 
  SELECT USER.Firts_Name, USER.Last_Name,COMMENT.Date_Comment, COMMENT.Comment FROM COMMENT 
  INNER JOIN USER ON USER.Id = COMMENT.Id_User_FK INNER JOIN PRODUCT_COMMENT ON PRODUCT_COMMENT.Id_Comment_FK= COMMENT.Id_Comment
  WHERE product_comment.Id_Product_FK=productId;
  END//



DELIMITER ;

