use ecommerce;

DROP PROCEDURE IF EXISTS `getMultipleFilters`;

DELIMITER //
CREATE PROCEDURE `getMultipleFilters`(IN categoriaId INT, IN departamentoId INT)
BEGIN
	SELECT
 		product.Id, 
		product.Name, 
		product.Description,
  		product.Cost, 
		product.Date_Product, 
		product.Image, 
		state.Name as Estado,
		user.Id as Id_Usuario,
  		user.Firts_Name, 
		user.Last_Name, 
		user.Email, 
		CATEGORY.Status 
	FROM 
		PRODUCT 
	INNER JOIN 
  		user ON  product.Id_User_FK = user.Id 
	INNER JOIN 
		state ON product.Id_State_FK = state.Id 
	INNER JOIN 
		CATEGORY ON PRODUCT.ID_Category_FK=CATEGORY.Id
  	WHERE 
		product.Id_Department_FK = departamentoId AND
		product.Id_Category_FK = categoriaId AND
		user.Id_State = 1 AND 
		PRODUCT.Id_State = 1 AND
        TIMESTAMPDIFF(DAY, PRODUCT.Date_Product, date_format(NOW(),'%Y-%m-%d')) < (SELECT timePost FROM TimePost LIMIT 1);
END //

DELIMITER ;
