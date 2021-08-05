USE Ecommerce;
DROP PROCEDURE IF EXISTS VerifySuscription ;
DELIMITER //
CREATE PROCEDURE VerifySuscription( IN IdCategory_parameter INT )
BEGIN
SELECT SUSCRIPTION.Id_User_FK , SUSCRIPTION.Id_Category_FK ,
USER.Firts_Name AS Name_User , CATEGORY.Name  AS Name_Category
FROM SUSCRIPTION INNER JOIN USER ON USER.Id = SUSCRIPTION.Id_User_FK INNER JOIN
CATEGORY ON  CATEGORY.Id = SUSCRIPTION.Id_Category_FK
WHERE SUSCRIPTION.Id_Category_FK = IdCategory_parameter;
 
 END //
 DELIMITER ;



DROP PROCEDURE IF EXISTS  VerifySuscription_User_Category;
DELIMITER //
CREATE PROCEDURE VerifySuscription_User_Category( IN IdUser_parameter INT , IN IdCategory_parameter INT , OUT Verify BOOLEAN)
BEGIN
SELECT IF (Id_Suscription IS NOT NULL, TRUE , FALSE) INTO Verify
FROM SUSCRIPTION WHERE SUSCRIPTION.Id_User_FK= IdUser_parameter
AND SUSCRIPTION.Id_Category_FK= IdCategory_parameter ;
END //
 
 DELIMITER ;

