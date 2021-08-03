USE Ecommerce ;
DROP PROCEDURE IF EXISTS GetComplaints;
DELIMITER //

CREATE PROCEDURE GetComplaints(
OUT Id_Complaints_parameter INT,
OUT Id_Whistleblower_parameter INT ,
OUT Id_Denounced_parameter INT,
OUT Id_ComplaintType_parameter INT,
OUT Name_Complaint_Type_parameter VARCHAR(45),
OUT Optional_Comment_parameter VARCHAR(45)
)
BEGIN
SELECT
       Id_Complaints ,Id_Whistleblower,Id_Denounced,Id_ComplaintType,Name_Complaint_Type, Optional_Comment 
       INTO Id_Complaints_parameter , Id_Whistleblower_parameter, Id_Denounced_parameter,
       Id_ComplaintType_parameter ,Name_Complaint_Type_parameter ,Optional_Comment_parameter
       FROM COMPLAINTS INNER JOIN COMPLAINT_TYPE ON COMPLAINT_TYPE.Id_Complaint_Type= COMPLAINTS.Id_ComplaintType;
END //

DELIMITER ;
CALL GetComplaints(@Id_Complaints, @Id_Whistleblower, @Id_Denounced, @Id_ComplaintType,@Name_Complaint_Type, @Optional_Comment);
SELECT @Id_Complaints, @Id_Whistleblower, @Id_Denounced, @Id_ComplaintType,@Name_Complaint_Type, @Optional_Comment;