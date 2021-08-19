export interface Product{
  Id: number;
  Name: string;
  Type: string;
  Cost: number;
  Description: string;
  Id_Category_FK: number;
  Date_Product:string;
  Id_User_FK: number;
  ID_Department_FK: number;
  Image: string;
}

export interface Categories{
  Id:number,
  Name:String,
  Status:Number
}