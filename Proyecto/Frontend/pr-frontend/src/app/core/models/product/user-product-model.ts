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

export interface AllProduct{
  activityStateName: string;
  categoryDescription: string;
  categoryId: number;
  categoryName: string;
  departmentName: string;
  productBrand:string;
  productCost: string;
  productDate: string;
  productDescription: string;
  productId: number;
  productImage: string;
  productName: string;
  stateName: string;
}
