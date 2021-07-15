USE `ecommerce`;
DROP procedure IF EXISTS `authUser`;

DELIMITER $$
USE `ecommerce`$$
CREATE PROCEDURE `authUser` (IN email VARCHAR(40),IN password VARCHAR(30))
BEGIN
	SELECT USER.Id FROM USER WHERE USER.Email = email AND USER.Password = password;
END$$

DELIMITER ;