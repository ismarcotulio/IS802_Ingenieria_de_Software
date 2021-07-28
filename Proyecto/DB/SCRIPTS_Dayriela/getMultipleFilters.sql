use ecommerce;
DELIMITER //
CREATE PROCEDURE `getMultipleFilters`(IN categoriaId INT, IN departamentoId INT)
BEGIN
	SELECT product.Id, product.Name, product.Description,
  product.Cost, product.Date_Product, product.Image, state.Name as Estado,user.Id as Id_Usuario,
  user.Firts_Name, user.Last_Name, user.Email FROM PRODUCT INNER JOIN 
  user ON  product.Id_User_FK = user.Id INNER JOIN state ON
  product.Id_State_FK = state.Id WHERE product.Id_Department_FK = departamentoId AND product.Id_Category_FK = categoriaId;
END//