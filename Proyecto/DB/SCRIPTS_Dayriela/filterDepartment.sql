USE Ecommerce;

DROP PROCEDURE IF EXISTS filterDepartment;


DELIMITER //

CREATE PROCEDURE filterDepartment(IN departamento_ID INT)
	BEGIN
	SELECT PRODUCT.Name, PRODUCT.Brand, PRODUCT.Cost, PRODUCT.Description, 
    	PRODUCT.Image, DEPARTMENT.Name AS Nombre_Departamento FROM PRODUCT 
    		INNER JOIN DEPARTMENT ON PRODUCT.Id_Department_FK = DEPARTMENT.Id WHERE PRODUCT.Id_Department_FK = departamento_ID;
	END//

DELIMITER ;
DROP PROCEDURE filterDepartment;

CALL filterDepartment(1);





