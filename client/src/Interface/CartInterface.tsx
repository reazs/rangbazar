export interface cartProductInterF {
  productID: string;
  quantity: number;
  price: number;
}
export interface CartInterF {
  userID: string;
  products: cartProductInterF[];
  createdAt: Date;
  updated: Date;
}
