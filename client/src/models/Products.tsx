export interface Product {
  title: string;
  price: string | number;
  imgURL: string;
  rating: string;
  description?: string;
  id: number;
  sizes: string[];
  colors: string[];
  images: string[];
}
type Products = Product[];
const products: Products = [
  {
    id: 1,
    title: "Everytime swissmatic",
    price: "66.98",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0902/3202/products/300601-_535-38-DSC_4795_1024x.jpg?v=1646595918",
    rating: "⭐⭐⭐⭐⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    sizes: ["s", "m", "l", "xl"],
    colors: ["#116D6E", "#DB005B", "#526D82"],
    images: [
      "https://cdn.shopify.com/s/files/1/0902/3202/products/300601-_535-38-DSC_4795_1024x.jpg?v=1646595918",
      "https://images.cbazaar.com/images/Attractive-German-Blue-Velvet-Zari-Embroidery-N-Hand-Work-Umbrella-Lehenga-Choli-With-Net-Dupatta-GHCBF5757-pl.jpg",
      "https://img0.junaroad.com/uiproducts/17762524/zoom_0-1622467507.jpg",
    ],
  },
  {
    id: 2,
    title: "PR 100 FETE LUTTE SUISSE",
    price: "52.99",
    imgURL:
      "https://images.cbazaar.com/images/Attractive-German-Blue-Velvet-Zari-Embroidery-N-Hand-Work-Umbrella-Lehenga-Choli-With-Net-Dupatta-GHCBF5757-pl.jpg",
    rating: "⭐⭐⭐⭐⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    sizes: ["s", "m", "l"],
    colors: ["red", "gray", "teal"],
    images: [
      "https://images.cbazaar.com/images/Attractive-German-Blue-Velvet-Zari-Embroidery-N-Hand-Work-Umbrella-Lehenga-Choli-With-Net-Dupatta-GHCBF5757-pl.jpg",
      "https://cdn.shopify.com/s/files/1/0902/3202/products/300601-_535-38-DSC_4795_1024x.jpg?v=1646595918",
      "https://cdn.shopify.com/s/files/1/1550/9297/products/GJ3324-LIGHT_BLUE-2_800x.jpg?v=1684861145",
    ],
  },
  {
    id: 3,
    title: "swissmatic of Everytime swissmatic",
    price: "128.30",
    imgURL:
      "https://cdn.shopify.com/s/files/1/1550/9297/products/GJ3324-LIGHT_BLUE-2_800x.jpg?v=1684861145",
    rating: "⭐⭐⭐⭐⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    sizes: ["s", "m", "l"],
    colors: ["red", "gray", "teal"],
    images: [
      "https://cdn.shopify.com/s/files/1/1550/9297/products/GJ3324-LIGHT_BLUE-2_800x.jpg?v=1684861145",
      "https://images.cbazaar.com/images/Attractive-German-Blue-Velvet-Zari-Embroidery-N-Hand-Work-Umbrella-Lehenga-Choli-With-Net-Dupatta-GHCBF5757-pl.jpg",
      "https://cdn.shopify.com/s/files/1/1550/9297/products/GJ3324-LIGHT_BLUE-2_800x.jpg?v=1684861145",
    ],
  },
  {
    id: 4,
    title: "Back to School Outfits",
    price: "49.99",
    imgURL:
      "https://i.pinimg.com/564x/e3/57/0e/e3570e03a4744b1b48deeddbe3657b37.jpg",
    rating: "⭐⭐⭐⭐⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    sizes: ["s", "m", "l"],
    colors: ["red", "gray", "teal"],
    images: [
      "https://i.pinimg.com/564x/e3/57/0e/e3570e03a4744b1b48deeddbe3657b37.jpg",
      "https://cdn.shopify.com/s/files/1/1550/9297/products/GJ3324-LIGHT_BLUE-2_800x.jpg?v=1684861145",
      "https://www.toptrendsguide.com/wp-content/uploads/2021/03/Button-Down-Shirt-Outfits-For-Guys.jpg",
    ],
  },
  {
    id: 5,
    title: "swissmatic of Everytime swissmatic",
    price: "79.99",
    imgURL:
      "https://www.toptrendsguide.com/wp-content/uploads/2021/03/Button-Down-Shirt-Outfits-For-Guys.jpg",
    rating: "⭐⭐⭐⭐⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    sizes: ["s", "m", "l"],
    colors: ["red", "gray", "teal"],
    images: [
      "https://www.toptrendsguide.com/wp-content/uploads/2021/03/Button-Down-Shirt-Outfits-For-Guys.jpg",
      "https://cdn.shopify.com/s/files/1/1550/9297/products/GJ3324-LIGHT_BLUE-2_800x.jpg?v=1684861145",
      "https://assets2.andaazfashion.com/media/catalog/product/cache/14/image/500x750/9df78eab33525d08d6e5fb8d27136e95/i/m/image_2022_06_07t12_57_59_333z.jpg",
    ],
  },
  {
    id: 6,
    title: "PRS 516 POWERMATIC 80",
    price: "129.99",
    imgURL:
      "https://assets2.andaazfashion.com/media/catalog/product/cache/14/image/500x750/9df78eab33525d08d6e5fb8d27136e95/i/m/image_2022_06_07t12_57_59_333z.jpg",
    rating: "⭐⭐⭐⭐⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    sizes: ["s", "m", "l"],
    colors: ["red", "gray", "teal"],
    images: [
      "https://assets2.andaazfashion.com/media/catalog/product/cache/14/image/500x750/9df78eab33525d08d6e5fb8d27136e95/i/m/image_2022_06_07t12_57_59_333z.jpg",
      "https://cdn.shopify.com/s/files/1/1550/9297/products/GJ3324-LIGHT_BLUE-2_800x.jpg?v=1684861145",
      "https://cdn.shopify.com/s/files/1/0654/1285/8100/articles/AJP03687_EDIT.jpg?v=1665498533&width=800",
    ],
  },
  {
    id: 7,
    title: "V8 QUARTZ CHRONOGRAPHJ",
    price: "89.99",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0654/1285/8100/articles/AJP03687_EDIT.jpg?v=1665498533&width=800",
    rating: "⭐⭐⭐⭐⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    sizes: ["s", "m", "l"],
    colors: ["red", "gray", "teal"],
    images: [
      "https://cdn.shopify.com/s/files/1/0654/1285/8100/articles/AJP03687_EDIT.jpg?v=1665498533&width=800",
      "https://assets2.andaazfashion.com/media/catalog/product/cache/14/image/500x750/9df78eab33525d08d6e5fb8d27136e95/i/m/image_2022_06_07t12_57_59_333z.jpg",
      "https://i.etsystatic.com/28629089/r/il/d1abd4/3228721085/il_fullxfull.3228721085_k0p6.jpg",
    ],
  },
  {
    id: 8,
    title: "desi ethnic dresses",
    price: "159.99",
    imgURL:
      "https://i.etsystatic.com/28629089/r/il/d1abd4/3228721085/il_fullxfull.3228721085_k0p6.jpg",
    rating: "⭐⭐⭐⭐⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    sizes: ["s", "m", "l"],
    colors: ["red", "gray", "teal"],
    images: [
      "https://i.etsystatic.com/28629089/r/il/d1abd4/3228721085/il_fullxfull.3228721085_k0p6.jpg",
      "https://cdn.shopify.com/s/files/1/0654/1285/8100/articles/AJP03687_EDIT.jpg?v=1665498533&width=800",
      "https://cdn.shopify.com/s/files/1/2374/0869/products/Anarkali-C852A_1_large.jpg?v=1675774303",
    ],
  },
  {
    id: 9,
    title: "Trendy Net Indian Clothes",
    price: "59.99",
    imgURL:
      "https://cdn.shopify.com/s/files/1/2374/0869/products/Anarkali-C852A_1_large.jpg?v=1675774303",
    rating: "⭐⭐⭐⭐⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    sizes: ["s", "m", "l"],
    colors: ["red", "gray", "teal"],
    images: [
      "https://cdn.shopify.com/s/files/1/2374/0869/products/Anarkali-C852A_1_large.jpg?v=1675774303",
      "https://i.etsystatic.com/28629089/r/il/d1abd4/3228721085/il_fullxfull.3228721085_k0p6.jpg",
      "https://assets0.mirraw.com/images/4273091/image_large_m.jpeg?1538045849",
    ],
  },

  {
    id: 10,
    title: "Traditional Ethinc Dress",
    price: "89.99",
    imgURL:
      "https://assets0.mirraw.com/images/4273091/image_large_m.jpeg?1538045849",
    rating: "⭐⭐⭐⭐⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    sizes: ["s", "m", "l"],
    colors: ["red", "gray", "teal"],
    images: [
      "https://assets0.mirraw.com/images/4273091/image_large_m.jpeg?1538045849",
      "https://cdn.shopify.com/s/files/1/2374/0869/products/Anarkali-C852A_1_large.jpg?v=1675774303",
      "https://www.hecmo.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/P/D/PDS2afI_3.jpg",
    ],
  },
  {
    id: 11,
    title: "White Georgette Partywear Salwar",
    price: "66.99",
    imgURL:
      "https://www.hecmo.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/P/D/PDS2afI_3.jpg",
    rating: "⭐⭐⭐⭐⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    sizes: ["s", "m", "l"],
    colors: ["red", "gray", "teal"],
    images: [
      "https://www.hecmo.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/P/D/PDS2afI_3.jpg",
      "https://assets0.mirraw.com/images/4273091/image_large_m.jpeg?1538045849",
      "https://www.scandicdesi.com/pub/media/wysiwyg/sarees-trends-optimized/heritage-saree.png",
    ],
  },
  {
    id: 12,
    title: "Pink Desi Shari",
    price: "99.99",
    imgURL:
      "https://www.scandicdesi.com/pub/media/wysiwyg/sarees-trends-optimized/heritage-saree.png",
    rating: "⭐⭐⭐⭐⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    sizes: ["s", "m", "l"],
    colors: ["red", "gray", "teal"],
    images: [
      "https://www.scandicdesi.com/pub/media/wysiwyg/sarees-trends-optimized/heritage-saree.png",
      "https://www.hecmo.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/P/D/PDS2afI_3.jpg",
      "https://sc01.alicdn.com/kf/U64dba5fb03d14b698e65e25538a546e0B.jpg",
    ],
  },
  {
    id: 13,
    title: "Gold and Peach Salwar",
    price: "79.99",
    imgURL: "https://sc01.alicdn.com/kf/U64dba5fb03d14b698e65e25538a546e0B.jpg",
    rating: "⭐⭐⭐⭐⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    sizes: ["s", "m", "l"],
    colors: ["red", "gray", "teal"],
    images: [
      "https://sc01.alicdn.com/kf/U64dba5fb03d14b698e65e25538a546e0B.jpg",
      "https://www.scandicdesi.com/pub/media/wysiwyg/sarees-trends-optimized/heritage-saree.png",
      "https://imagescdn.planetfashion.in/img/app/product/4/457122-3135604-large.jpg",
    ],
  },
  {
    id: 14,
    title: "Black Kurta",
    price: "49.99",
    imgURL:
      "https://imagescdn.planetfashion.in/img/app/product/4/457122-3135604-large.jpg",
    rating: "⭐⭐⭐⭐⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    sizes: ["s", "m", "l"],
    colors: ["red", "gray", "teal"],
    images: [
      "https://imagescdn.planetfashion.in/img/app/product/4/457122-3135604-large.jpg",
      "https://sc01.alicdn.com/kf/U64dba5fb03d14b698e65e25538a546e0B.jpg",
      "https://assets0.mirraw.com/images/9866771/KI-824-GN_5_large_m.jpg?1642488340",
    ],
  },
  {
    id: 15,
    title: "PR 100 FETE LUTTE SUISSE",
    price: "89.99",
    imgURL:
      "https://assets0.mirraw.com/images/9866771/KI-824-GN_5_large_m.jpg?1642488340",
    rating: "⭐⭐⭐⭐⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    sizes: ["s", "m", "l"],
    colors: ["red", "gray", "teal"],
    images: [
      "https://assets0.mirraw.com/images/9866771/KI-824-GN_5_large_m.jpg?1642488340",
      "https://imagescdn.planetfashion.in/img/app/product/4/457122-3135604-large.jpg",
      "https://img0.junaroad.com/uiproducts/17762524/zoom_0-1622467507.jpg",
    ],
  },
  {
    id: 16,
    title: "embroidered velvet with jacket",
    price: "110.99",
    imgURL:
      "https://img0.junaroad.com/uiproducts/17762524/zoom_0-1622467507.jpg",
    rating: "⭐⭐⭐⭐⭐",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    sizes: ["s", "m", "l"],
    colors: ["red", "gray", "teal"],
    images: [
      "https://img0.junaroad.com/uiproducts/17762524/zoom_0-1622467507.jpg",
      "https://assets0.mirraw.com/images/9866771/KI-824-GN_5_large_m.jpg?1642488340",
      "https://cdn.shopify.com/s/files/1/0902/3202/products/300601-_535-38-DSC_4795_1024x.jpg?v=1646595918",
    ],
  },
];
export const colors = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Gray", value: "#808080" },
  { name: "Navy", value: "#000080" },
  { name: "Blue", value: "#0000FF" },
  { name: "Light Blue", value: "#ADD8E6" },
  { name: "Turquoise", value: "#40E0D0" },
  { name: "Teal", value: "#008080" },
  { name: "Green", value: "#008000" },
  { name: "Olive", value: "#808000" },
  { name: "Yellow", value: "#FFFF00" },
  { name: "Gold", value: "#FFD700" },
  { name: "Orange", value: "#FFA500" },
  { name: "Red", value: "#FF0000" },
  { name: "Maroon", value: "#800000" },
  { name: "Pink", value: "#FFC0CB" },
  { name: "Purple", value: "#800080" },
  { name: "Lavender", value: "#E6E6FA" },
  { name: "Brown", value: "#A52A2A" },
  { name: "Beige", value: "#F5F5DC" },
];
export const ageCategories: string[] = ["Man", "Woman", "Boy", "Girl"];
export const productCategories = [
  "Tops",
  "Dresses",
  "Bottoms",
  "Outerwear",
  "Activewear",
  "Swimwear",
  "Intimates",
  "Sleepwear",
  "Loungewear",
  "Jumpsuits",
  "Suits",
  "Ethnic Wear",
  "Maternity",
  "Plus Size",
  "Accessories",
  "Shoes",
];
export default products;
