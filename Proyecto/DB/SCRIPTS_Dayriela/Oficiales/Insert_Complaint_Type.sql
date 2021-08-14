USE Ecommerce ;
DROP PROCEDURE IF EXISTS InsertComplaint_Type;
DELIMITER //

CREATE PROCEDURE InsertComplaint_Type(
IN Id_Complaint_Type_parameter INT,
IN Name_Complaint_Type_parameter VARCHAR(45)
)
BEGIN
	INSERT INTO COMPLAINT_TYPE (Id_Complaint_Type ,Name_Complaint_Type) VALUES
    (Id_Complaint_Type_parameter,Name_Complaint_Type_parameter);
    
    END //
    
    DELIMITER ;
    