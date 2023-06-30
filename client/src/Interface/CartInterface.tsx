import { select } from "@material-tailwind/react";
import { ClothingProductInterF } from "./Product";

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
export interface OrderProductsInterF {
  product: ClothingProductInterF;
  price: number;
  quantity: number;
}

export interface OrdersDataInterF {
  _id: string;
  orderNumber: string;
  customer: string;
  products: OrderProductsInterF[];
  totalAmount: number;
  status: string;
  orderDate: string;
}
