USE ecommerce;

DROP PROCEDURE IF EXISTS countProductPerCategory;

DELIMITER $$

CREATE PROCEDURE countProductPerCategory()
	BEGIN
		SELECT
			COUNT(PRODUCT.Id) AS total, CATEGORY.Name
		FROM
			PRODUCT
		JOIN
			CATEGORY ON PRODUCT.Id_Category_FK = CATEGORY.Id
		JOIN
			USER ON PRODUCT.Id_User_FK  = USER.Id
		WHERE
			PRODUCT.Id_State = 1 AND
			CATEGORY.Status = 1 AND
			USER.Id_State = 1 AND
			TIMESTAMPDIFF(
				DAY,
 				PRODUCT.Date_Product,
				date_format(NOW(),'%Y-%m-%d')
			) < (SELECT timePost FROM TimePost LIMIT 1) 
		GROUP BY
			CATEGORY.Name
		;	
	END $$

DELIMITER ;
