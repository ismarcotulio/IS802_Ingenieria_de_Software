USE Ecommerce;
DELIMITER //

CREATE PROCEDURE DeleteSuscription(IN IdUser_parameter INT)
BEGIN
 DELETE FROM SUSCRIPTION WHERE SUSCRIPTION.Id_User_FK = IdUser_parameter;

END //

DELIMITER ;

call DeleteSuscription(1);