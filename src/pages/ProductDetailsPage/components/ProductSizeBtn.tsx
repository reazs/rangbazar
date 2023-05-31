interface Props {
  onSelect: (size: string) => void;
  isActive: boolean;
  size: string;
}

const ProductSizeBtn = ({ size, isActive, onSelect }: Props) => {
  const activeSize = " border-b-primary-color border-b-2 ";
  return (
    <>
      <div
        onClick={() => {
          onSelect(size);
        }}
        className="w-[28px] text-center hover:cursor-pointer uppercase "
      >
        {size} <div className={isActive ? activeSize : ""}></div>
      </div>
      <div />
    </>
  );
};

export default ProductSizeBtn;
