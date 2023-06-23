import ProductSizeBtn from "./ProductSizeBtn";
import { Product } from "../../../models/Products";
import { ClothingProductInterF } from "../../../Interface/Product";
import { cartProductInterF } from "../../../Interface/CartInterface";
const ProductSizesContainer = ({
  product,
  handleSelect,
  selectedSize,
}: {
  product: ClothingProductInterF | undefined;
  handleSelect: (size: string) => void;
  selectedSize: string;
}) => {
  return (
    <>
      <div className="flex flex-row mb-4 font-['Josefin Sans'] font-medium">
        {product?.sizes.map((s: string, index: number) => {
          return (
            <>
              <ProductSizeBtn
                key={index}
                size={s}
                onSelect={handleSelect}
                isActive={selectedSize === s ? true : false}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductSizesContainer;
