USE Ecommerce ; 

DROP PROCEDURE IF EXISTS Return_Category; 

DELIMITER //
CREATE PROCEDURE Return_Category(IN Num INT)
BEGIN 
 IF (Num = 0 ) THEN
 SELECT *FROM CATEGORY;
 
 ELSE 
  SELECT CATEGORY.Id , CATEGORY.Name , CATEGORY.Description FROM CATEGORY Limit 0, Num 
  ;
  END IF ;
END //

DELIMITER ;
call Return_Category(1);