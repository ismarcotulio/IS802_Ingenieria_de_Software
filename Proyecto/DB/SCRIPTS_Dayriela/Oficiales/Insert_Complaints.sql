USE Ecommerce ;
DROP PROCEDURE IF EXISTS InsertComplaints;
DELIMITER //

CREATE PROCEDURE InsertComplaints(
IN Id_Whistleblower_parameter INT,
IN Id_Denounced_parameter INT,
IN Id_ComplaintType_parameter INT,
IN Optional_Comment_parameter VARCHAR(45)
)
BEGIN
	INSERT INTO COMPLAINTS ( Id_Whistleblower, Id_Denounced, Id_ComplaintType, Optional_Comment) VALUES
    ( Id_Whistleblower_parameter, Id_Denounced_parameter, Id_ComplaintType_parameter, Optional_Comment_parameter);
    
    END //
    
    DELIMITER ;
 