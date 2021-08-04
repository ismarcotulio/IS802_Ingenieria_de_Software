USE Ecommerce;
DELIMITER //

DROP PROCEDURE IF EXISTS InsertSuscription;
CREATE PROCEDURE InsertSuscription(
IN Id_User_FK_parameter INT,
IN Id_Category_FK_parameter INT 
)
BEGIN
  
	INSERT INTO SUSCRIPTION ( Id_User_FK , Id_Category_FK) VALUES
    ( Id_User_FK_parameter ,Id_Category_FK_parameter) 
   ;
   END //
   
   DELIMITER ;
select *from SUSCRIPTION;
call InsertSuscription(2,8);