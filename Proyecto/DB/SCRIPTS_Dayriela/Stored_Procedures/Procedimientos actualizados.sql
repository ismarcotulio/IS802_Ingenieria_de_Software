use ecommerce;

DELIMITER $$
CREATE PROCEDURE `ProductByKeyword`(IN Buscar VARCHAR(30))
BEGIN 
  SELECT product.Id, product.Name, product.Description,
  product.Cost, product.Date_Product, product.Image, state.Name as Estado,user.Id as Id_Usuario,
  user.Firts_Name, user.Last_Name, user.Email FROM PRODUCT INNER JOIN 
  user ON  product.Id_User_FK = user.Id INNER JOIN state ON
  product.Id_State_FK = state.Id
    WHERE product.Name LIKE CONCAT('%', Buscar , '%');
END$$

DELIMITER $$
CREATE PROCEDURE `filterDepartment`(IN departamento_ID INT)
BEGIN
	SELECT product.Id, product.Name, product.Description,
  product.Cost, product.Date_Product, product.Image, state.Name as Estado,user.Id as Id_Usuario,
  user.Firts_Name, user.Last_Name, user.Email FROM PRODUCT INNER JOIN 
  user ON  product.Id_User_FK = user.Id INNER JOIN state ON
  product.Id_State_FK = state.Id WHERE PRODUCT.Id_Department_FK = departamento_ID;
END$$

DELIMITER $$
CREATE PROCEDURE `filterCategory`(IN categoryID INT)
BEGIN
	SELECT product.Id, product.Name, product.Description,
  product.Cost, product.Date_Product, product.Image, state.Name as Estado,user.Id as Id_Usuario,
  user.Firts_Name, user.Last_Name, user.Email FROM PRODUCT INNER JOIN 
  user ON  product.Id_User_FK = user.Id INNER JOIN state ON
  product.Id_State_FK = state.Id WHERE PRODUCT.Id_Category_FK = categoryID;
END$$

DELIMITER $$
CREATE PROCEDURE `DataCollectionProduct`(IN done BOOLEAN)
BEGIN
  SELECT product.Id, product.Name, product.Description,
  product.Cost, product.Date_Product, product.Image, state.Name as Estado,user.Id as Id_Usuario,
  user.Firts_Name, user.Last_Name, user.Email FROM PRODUCT INNER JOIN 
  user ON  product.Id_User_FK = user.Id INNER JOIN state ON
  product.Id_State_FK = state.Id;
END$$













