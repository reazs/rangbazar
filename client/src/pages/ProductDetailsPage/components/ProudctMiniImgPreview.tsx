const ProductMiniImgPreview = ({product, currentImgIndex, handleCurrentImgIndex}: {product:any, currentImgIndex:number, handleCurrentImgIndex:(index:number)=>void}) => { 

    return (
      <>
        <div className="lg:h-[90px] md:h-[90px] h-[255px] w-full  mt-4 px-5 flex flex-row overflow-x-auto">
          {product?.images.map((image:string, index:number) => {
            return (
              <img
                key={index}
                onClick={() => {
                    handleCurrentImgIndex(index);
                }}
                className={
                  currentImgIndex == index
                    ? "border-2 border-primary-color lg:w-[72px] md:w-[72px] w-[182px] object-cover my-2 mx-[5px] hover:cursor-pointer"
                    : "lg:w-[72px] md:w-[72px] w-[182px] object-cover mx-[5px] my-2 hover:cursor-pointer"
                }
                src={image}
              />
            );
          })}
        </div>
      </>
    );
}

export default ProductMiniImgPreview