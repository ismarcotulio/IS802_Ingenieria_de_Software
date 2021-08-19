USE ecommerce;

DROP PROCEDURE IF EXISTS countProductPerMonth;

DELIMITER $$

CREATE PROCEDURE countProductPerMonth()
	BEGIN
		SELECT
			COUNT(PRODUCT.Id) AS total, Month(PRODUCT.Date_Product) AS Name
		FROM
			PRODUCT
		JOIN
			DEPARTMENT ON Id_Department_FK = DEPARTMENT.Id
		JOIN
			USER ON PRODUCT.Id_User_FK  = USER.Id
		JOIN
			CATEGORY ON PRODUCT.Id_Category_FK = CATEGORY.Id
		WHERE
			PRODUCT.Id_State = 1 AND
			CATEGORY.Status = 1 AND
			USER.Id_State = 1 AND
			TIMESTAMPDIFF(
				DAY,
 				PRODUCT.Date_Product,
				date_format(NOW(),'%Y-%m-%d')
			) < 90	 
		GROUP BY
			Month(PRODUCT.Date_Product)
		;	
	END $$

DELIMITER ;
