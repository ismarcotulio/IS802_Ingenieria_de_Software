export interface UserProduct{
  Id: number;
  Name: string;
  Brand: string;
  Cost: number;
  Description: string;
  Id_Category: number;
  Image: string;
  Date_Product: string;
  Id_State: number;
  Id_Department: number;
  Id_User: number;
  Firts_Name: string;
  Last_Name: string;
  Email: string;
  Address: string;
}

export interface commentProduct{
  Comment: string,
  Date_Comment: string,
  Firts_Name: string,
  Last_Name: string

}

export interface WishProduct{
  Id: number;
  Description: string;
  Cost: number;
  Image: string;
  Date_Product: string;
}
