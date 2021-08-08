use ecommerce;

DROP PROCEDURE IF EXISTS `ProductByKeyword`;

DELIMITER //
CREATE PROCEDURE `ProductByKeyword`(IN Buscar VARCHAR(30))
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
		user.Email 
	FROM 
		PRODUCT
 	INNER JOIN 
  		user ON  product.Id_User_FK = user.Id 
	INNER JOIN 
		state ON product.Id_State_FK = state.Id
    	WHERE 
		product.Name LIKE CONCAT('%', Buscar , '%') AND
		user.Id_StateU = 1;
END //

DELIMITER ;

DROP PROCEDURE IF EXISTS `filterDepartment`;

DELIMITER //

CREATE PROCEDURE `filterDepartment`(IN departamento_ID INT)
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
		user.Email 
	FROM
		PRODUCT
	INNER JOIN 
  		user ON  product.Id_User_FK = user.Id 
	INNER JOIN 
		state ON product.Id_State_FK = state.Id 
	WHERE 
		PRODUCT.Id_Department_FK = departamento_ID AND
		user.Id_StateU = 1;
END //

DELIMITER ;

DROP PROCEDURE IF EXISTS `filterCategory`;

DELIMITER //
CREATE PROCEDURE `filterCategory`(IN categoryID INT)
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
		PRODUCT.Id_Category_FK = categoryID AND
		user.Id_StateU = 1;
END //

DELIMITER ;

DROP PROCEDURE IF EXISTS `DataCollectionProduct`;

DELIMITER //
CREATE PROCEDURE `DataCollectionProduct`(IN done BOOLEAN)
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
		user.Email 
	FROM 
		PRODUCT 
	INNER JOIN 
  		user ON  product.Id_User_FK = user.Id 
	INNER JOIN 
		state ON product.Id_State_FK = state.Id 
	INNER JOIN 
		CATEGORY ON PRODUCT.ID_Category_FK=CATEGORY.Id
  	WHERE 
		CATEGORY.Status=1 AND
		user.Id_StateU = 1;
END //

DELIMITER ;













