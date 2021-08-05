USE Ecommerce;

DROP PROCEDURE IF EXISTS  Get_Seller_Comments;

DELIMITER //
CREATE PROCEDURE Get_Seller_Comments(IN Seller_ID INT)
BEGIN
	SELECT 
		USER.Firts_Name AS First_Name,
		USER.Last_Name AS Last_Name, 
		COMMENT.Date_Comment AS Date,
		COMMENT.Comment AS Comment, 
		SELLER_COMMENT.Qualification AS Qualification 
	FROM SELLER_COMMENT 
    	INNER JOIN COMMENT ON SELLER_COMMENT.Id_Comment_FK = COMMENT.Id_Comment
	INNER JOIN USER ON COMMENT.Id_User_FK = USER.Id
    	WHERE SELLER_COMMENT.Id_Seller_FK = Seller_ID;
END //

DELIMITER ;


