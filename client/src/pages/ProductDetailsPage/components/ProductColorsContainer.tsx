import { ClothingProductInterF } from "../../../Interface/Product";
import { Product } from "../../../models/Products";
import ProductColorBtn from "./ProductColorBtn";
const ProductColorsContainer = ({
  product,
  handleColorSelect,
  activeColor,
}: {
  product: ClothingProductInterF | undefined;
  handleColorSelect: (color: string) => void;
  activeColor: string;
}) => {
  return (
    <>
      <div className="flex flex-row">
        {product?.colors.map((color, index) => {
          return (
            <>
              <ProductColorBtn
                key={index}
                onSelect={handleColorSelect}
                color={color.color}
                isActive={color.color === activeColor}
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default ProductColorsContainer;
