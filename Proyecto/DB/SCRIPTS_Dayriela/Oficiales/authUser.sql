use ecommerce;

Delimiter //
CREATE PROCEDURE `authUser`(IN email VARCHAR(40),IN password VARCHAR(30))
BEGIN
	SELECT USER.Id, USER_TYPE.Name FROM USER INNER JOIN 
    USER_USER_TYPE ON USER_USER_TYPE.Id_User_FK=USER.Id INNER JOIN 
    USER_TYPE ON USER_TYPE.Id_User_Type = USER_USER_TYPE.Id_User_Type_FK
    WHERE USER.Email = email AND USER.Password = password;
END//