USE ecommerce; 

DROP PROCEDURE IF EXISTS getUserProduct;

DELIMITER //

CREATE PROCEDURE  getUserProduct(IN userId INT)
Begin
	SELECT 
		PRODUCT.Id AS productId, PRODUCT.Name AS productName, PRODUCT.Brand AS productBrand,
		PRODUCT.Cost AS productCost, PRODUCT.Description AS productDescription,
		PRODUCT.Image AS productImage, PRODUCT.Date_Product AS productDate,
		CATEGORY.Id AS categoryId, CATEGORY.Name AS categoryName, CATEGORY.Description AS categoryDescription,
		DEPARTMENT.Name AS departmentName, STATE.Name AS stateName, ACTIVITY_STATE.Name AS activityStateName	
	FROM 
		PRODUCT
	JOIN
		CATEGORY ON PRODUCT.Id_Category_FK = CATEGORY.Id
	JOIN
		DEPARTMENT ON PRODUCT.Id_Department_FK = DEPARTMENT.Id
	JOIN
		STATE ON PRODUCT.Id_State_FK = STATE.Id
	JOIN
		ACTIVITY_STATE ON PRODUCT.Id_State = ACTIVITY_STATE.Id_State
	WHERE 
		Id_User_FK=userId AND
		CATEGORY.Status = 1 AND
        TIMESTAMPDIFF(DAY, PRODUCT.Date_Product, date_format(NOW(),'%Y-%m-%d')) < (SELECT timePost FROM TimePost LIMIT 1)
	ORDER BY
		PRODUCT.Date_Product DESC
		
	;
END //

DELIMITER ;