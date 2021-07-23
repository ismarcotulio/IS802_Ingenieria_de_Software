USE Ecommerce;

INSERT INTO TOKEN( Id, Code_Token, Creation_Date ) VALUES
	(1, "IS-01", "2021-02-01 13:30:00"),
    (2, "IS-02", "2021-03-05 08:00:00"),
    (3, "IS-03", "2021-04-07 10:12:00"),
    (4, "IS-04", "2021-04-03 22:00:00"),
    (5, "IS-05", "2021-04-02 00:35:00")
;
USE Ecommerce;
INSERT INTO USER( Id, Firts_Name, Last_Name, Email, Address, Token , Password, Check_email ) VALUES 
	(1, "Manuel", "Perez", "ManuelP@email.com", "Col.Kennedy", 1, "Mmp_567",false),
    (2, "Pedro", "Martinez", "PedroM@email.com", "Col. San Miguel", 2,  "Pmm_123",false),
    (3, "Sara", "Izaguirre", "SaraI@email.com", "Barrio Guamilito", 3, "Sim_234",false),
    (4, "Katerin", "Matute", "KaterinM@email.com", "Col. Cerro Grande", 4, "Kfm_569",false),
    (5, "Dayriela", "Montes", "Dayrielam@email.com", "Col.Carrizal", 5, "Dmm_357",false)
;
INSERT INTO USER_TYPE(Id_User_type,Name, Description)VALUES
(1,"Administrador","Administrador de la pagina"),
(2,"Vendedor","Distribuidor de productos"),
(3,"Comprador","Persona que adquiere productos")
;
INSERT INTO USER_USER_TYPE(Id , Id_User , Id_User_Type)VALUES
(1,2,2),
(2,1,1)
;

INSERT INTO DEPARTMENT(Id, Name)VALUES
(1,"Francisco Morazan"),
(2,"Comayagua"),
(3,"Islas de la Bahia"),
(4,"Santa Barbara"),
(5,"Colon"),
(6,"Olancho"),
(7,"Yoro"),
(8,"Gracias a Dios"),
(9,"Cortes"),
(10,"El Paraiso"),
(11,"Copan"),
(12,"Ocotepeque"),
(13,"Lempira"),
(14,"Intibuca"),
(15,"La Paz"),
(16,"Valle"),
(17,"Atlantida"),
(18,"Choluteca");

INSERT INTO CATEGORY(Id, Name , Description , Department) VALUES
(1,"Tecnologia","Articulos Tecnologicos", 1),
(2,"Arte y Artesania","Obras y trabajos realizados con las manos",2),
(3,"Hogar","Los mejores: adornos , decoracion utencilios etc",3),
(4,"Automotriz","Desde herramientas hasta atencion personalizada",11),
(5,"Salud y belleza","Piel reluciente, y una apariencia cuidada",5),
(6,"Deporte","Desde pelotas hasta equipo acuatico, de montaña etc ",6),
(7,"Juguetes","Peluches, Muñecas, Vehiculos y mucho mas",7),
(8,"Mascotas","Todo tipo de mascotas",8),
(9,"Ropa y Accesorios","Lo ultimo en moda y accesorios",7)
;


INSERT INTO STATE(Id, Name) VALUES
(1,"Nuevo"),
(2,"Usado"),
(3,"Usado como nuevo"),
(4,"Usado-Buen estado"),
(5,"Usado-Aceptable")
;



