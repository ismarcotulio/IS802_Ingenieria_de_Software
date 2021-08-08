USE Ecommerce;
DROP PROCEDURE IF EXISTS removeComplaint;
DELIMITER //

CREATE PROCEDURE removeComplaint(IN IdComplaint_Parameter INT)
BEGIN
 DELETE FROM COMPLAINTS WHERE COMPLAINTS.Id_Complaints = IdComplaint_Parameter;
END //

DELIMITER ;

