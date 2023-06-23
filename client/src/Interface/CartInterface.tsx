import { select } from "@material-tailwind/react";

export interface cartProductInterF {
  productID: string;
  quantity: number;
  price: number;
  color: string;
  size: string;
  name: string;
  image: string;
  stocks: string;
}
export interface CartInterF {
  userID: string;
  products: cartProductInterF[];
  createdAt: Date;
  updated: Date;
}

export interface selectedCartItemInterF {
  productID: string;
  price: number;
  quantity: number;
}
