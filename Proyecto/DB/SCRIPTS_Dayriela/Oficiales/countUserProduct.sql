USE ecommerce;

DROP PROCEDURE IF EXISTS countUserProduct;

DELIMITER $$

CREATE PROCEDURE countUserProduct()
	BEGIN
		SELECT
			COUNT(PRODUCT.Id) AS total,
			USER.Email AS Name
		FROM
			USER
		JOIN
			PRODUCT ON USER.Id = PRODUCT.Id_User_FK 
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
			USER.Id
		ORDER BY
			COUNT(PRODUCT.Id) DESC
		LIMIT 10
		;	
	END $$

DELIMITER ;
