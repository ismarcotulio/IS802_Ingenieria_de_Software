USE ecommerce;

DROP PROCEDURE IF EXISTS countSuscriptionPerCategory;

DELIMITER $$

CREATE PROCEDURE countSuscriptionPerCategory()
	BEGIN
		SELECT
			COUNT(SUSCRIPTION.Id_Suscription ) AS total, CATEGORY.Name AS Name
		FROM
			SUSCRIPTION
		JOIN
			CATEGORY ON SUSCRIPTION.Id_Category_FK = CATEGORY.Id
		JOIN
			USER ON SUSCRIPTION.Id_User_FK  = USER.Id
		WHERE
			CATEGORY.Status = 1 AND
			USER.Id_State = 1 
		GROUP BY
			CATEGORY.Name
		;	
	END $$

DELIMITER ;
