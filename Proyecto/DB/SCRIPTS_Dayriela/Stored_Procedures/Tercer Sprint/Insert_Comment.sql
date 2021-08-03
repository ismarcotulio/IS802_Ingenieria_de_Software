USE Ecommerce ;
DELIMITER //

CREATE PROCEDURE InsertComment(
IN Comment_parameter TEXT,
IN Date_Comment_parameter DATE,
IN Id_User_FK_parameter INT 
)
BEGIN
    INSERT INTO COMMENT(Comment, Date_Comment , Id_User_FK ) VALUES
    (Comment_parameter, Date_Comment_parameter , Id_User_FK_parameter);
    
    END //
    
    DELIMITER ;
   
  

   
    
    
