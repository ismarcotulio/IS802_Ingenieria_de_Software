USE Ecommerce;
DROP PROCEDURE IF EXISTS InsertComment_Product;

DELIMITER //

CREATE PROCEDURE InsertComment_Product(
IN Id_Product_FK_parameter INT,
IN Comment_parameter text,
IN Date_Comment_parameter date,
IN Id_User_parameter INT
)
BEGIN
	DECLARE nextId INT DEFAULT 0;
	INSERT INTO COMMENT(Comment, Date_Comment, Id_User_FK) VALUES
    (Comment_parameter,Date_Comment_parameter,Id_User_parameter);
     SELECT last_insert_id() INTO nextId;
    INSERT INTO PRODUCT_COMMENT(Id_Comment_FK, Id_Product_FK ) VALUES
    (nextId , Id_Product_FK_parameter );
    
    END //

DELIMITER ;

    
   