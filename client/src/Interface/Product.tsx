export interface colorInterF {
  name: string;
  color: string;
}
export interface reviewInterF {
  title: string;
  description: string;
  rating: number;
  images: string[];
  createdAt: number;
}
export interface ClothingProductInterF {
  _id: string;
  name: string;
  colors: colorInterF[];
  price: number;
  productCategory: string[];
  genderCategory: string[];
  stocks: number;
  description: string;
  images: string[];
  sizes: string[];
  reviews: reviewInterF[];
}
