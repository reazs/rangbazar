interface Props {
  onSelect: (color: string) => void;
  color: string;
  isActive: boolean;
}

const ProductColorBtn = ({ onSelect, color, isActive }: Props) => {
  const activeColor =
    "rounded-full border-primary-color border mr-1  hover:cursor-pointer";
  return (
    <>
      <div
        onClick={() => {
          onSelect(color);
        }}
        className={
          isActive ? activeColor : "rounded-full mr-1  hover:cursor-pointer"
        }
      >
        <div
          style={{ backgroundColor: color }}
          className={"w-6 h-6 rounded-full m-1"}
        ></div>
      </div>
    </>
  );
};

export default ProductColorBtn;
