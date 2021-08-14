USE Ecommerce ;
DROP PROCEDURE IF EXISTS GetComplaints;
DELIMITER //

CREATE PROCEDURE GetComplaints( 
)
BEGIN
SELECT
       Id_Complaints ,
       Id_Whistleblower,
       Id_Denounced,
       Id_ComplaintType,
       Name_Complaint_Type,
       Optional_Comment,
       Whistleblower.Firts_Name AS "Whistleblower_Firts_Name",
       Denounced.Firts_Name AS "Denounced_Firts_Name",
	   Whistleblower.Last_Name AS "Whistleblower_Last_Name",
       Denounced.Last_Name AS "Denounced_Last_Name",
       Date_Complaints 
       
       FROM COMPLAINTS INNER JOIN COMPLAINT_TYPE ON COMPLAINT_TYPE.Id_Complaint_Type= COMPLAINTS.Id_ComplaintType 
       INNER JOIN USER AS Whistleblower ON COMPLAINTS.Id_Whistleblower=Whistleblower.Id 
       INNER JOIN USER AS Denounced ON COMPLAINTS.Id_Denounced = Denounced.Id;
END //

DELIMITER ;

