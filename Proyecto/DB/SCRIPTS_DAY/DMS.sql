USE Ecommerce;

INSERT INTO TOKEN( Id, Code, Condition_Token, Creation_Date, Expiration_Date) VALUES
	(1, "fsdfs", "fsfs", "1000-01-01 00:00:00", "1000-01-01 00:00:00"),
    (2, "fsdfs", "fsfs", "1000-01-01 00:00:00", "1000-01-01 00:00:00"),
    (3, "fsdfs", "fsfs", "1000-01-01 00:00:00", "1000-01-01 00:00:00"),
    (4, "fsdfs", "fsfs", "1000-01-01 00:00:00", "1000-01-01 00:00:00")
;

INSERT INTO USER( Id, Firts_Name, Last_Name, Email, Address, Token ) VALUES 
	(1, "Juanito", "Perez", "JP@email.com", "", 1),
    (2, "Pedro", "Perez", "JP@email.com", "", 2),
    (3, "Sara", "Perez", "JP@email.com", "", 3),
    (4, "Rosa", "Perez", "JP@email.com", "", 4),
    (5, "Dayriela", "Perez", "JP@email.com", "", 1)
;