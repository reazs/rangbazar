import ProductSizeBtn from "./ProductSizeBtn";
import { Product } from "../../../models/Products";
const ProductSizesContainer = ({
  product,
  handleSelect,
  selectedSize,
}: {
  product: Product | undefined;
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
