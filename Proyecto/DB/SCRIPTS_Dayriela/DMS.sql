USE Ecommerce;

INSERT INTO TOKEN( Id, Code_Token, Creation_Date ) VALUES
	(1, "IS-01", "2021-02-01 13:30:00"),
    (2, "IS-02", "2021-03-05 08:00:00"),
    (3, "IS-03", "2021-04-07 10:12:00"),
    (4, "IS-04", "2021-04-03 22:00:00"),
    (5, "IS-05", "2021-04-02 00:35:00")
;

INSERT INTO USER( Id, Firts_Name, Last_Name, Email, Address, Token ) VALUES 
	(1, "Manuel", "Perez", "ManuelP@email.com", "Col.Kennedy", 1),
    (2, "Pedro", "Martinez", "PedroM@email.com", "Col. San Miguel", 2),
    (3, "Sara", "Izaguirre", "SaraI@email.com", "Barrio Guamilito", 3),
    (4, "Katerin", "Matute", "KaterinM@email.com", "Col. Cerro Grande", 4),
    (5, "Dayriela", "Montes", "Dayrielam@email.com", "Col.Carrizal", 5)
;

