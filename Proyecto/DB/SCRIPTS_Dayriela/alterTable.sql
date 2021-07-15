use ecommerce;
ALTER TABLE `ecommerce`.`user` 
ADD COLUMN `Password` VARCHAR(30) NOT NULL AFTER `Token`;