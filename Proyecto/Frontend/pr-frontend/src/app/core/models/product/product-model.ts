export interface Product{
  Id: number;
  Name: string;
  Type: string;
  Cost: number;
  Description: string;
  Id_Category_FK: number;
  Id_User_FK: number;
  ID_Department_FK: number;
  Image: string;
}
