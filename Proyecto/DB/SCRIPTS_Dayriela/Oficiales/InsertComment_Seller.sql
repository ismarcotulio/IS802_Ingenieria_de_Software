USE Ecommerce ;
DROP PROCEDURE IF EXISTS InsertComment_Seller;
DELIMITER //

CREATE PROCEDURE InsertComment_Seller(
IN Id_User_parameter INT,
IN Id_Seller_FK_parameter INT,
IN Comment_parameter text,
IN Date_Comment_parameter date,
IN Qualification_parameter INT
)
BEGIN
	DECLARE nextId INT DEFAULT 0;
	INSERT INTO COMMENT(Comment, Date_Comment, Id_User_FK) VALUES
    (Comment_parameter,Date_Comment_parameter,Id_User_parameter);
	SELECT last_insert_id() INTO nextId;
    INSERT INTO SELLER_COMMENT(Id_Comment_FK, Id_Seller_FK , Qualification ) VALUES
    (nextId , Id_Seller_FK_parameter , Qualification_parameter);
    
    END //
    
    DELIMITER ;
    
    

   
    
    
