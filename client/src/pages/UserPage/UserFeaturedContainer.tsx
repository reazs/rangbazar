import { Link } from "react-router-dom";
import products from "../../models/Products";
import ProductCard from "../../components/ProductCard";
const UserFeaturedContainer = () => {
  const featuredProduct = products.reverse().slice(0, 6);
  return (
    <>
      <div className="mt-10">
        <div className="flex flex-row justify-between josefin-sans">
          <p className="md:text-2xl mb-10 text-xl  text-gray-400 font-medium">
            Featured
          </p>
          <Link to="/shop">
            <p className=" mb-10 text-xl text-gray-400 font-medium">See All</p>
          </Link>
        </div>
        <div className="flex flex-row overflow-x-auto gap-2 overflow-y-hidden h-[550px]">
          {/* <div className="h-[300px] mb-2  w-[400px] bg-red-300 flex-shrink-0"></div>
              <div className="h-[300px] mb-2   w-[400px] bg-cyan-500 flex-shrink-0"></div>
              <div className="h-[300px] mb-2  w-[400px] bg-teal-500 flex-shrink-0"></div> */}
          {featuredProduct.map((product) => {
            return (
              <>
                <Link
                  to={
                    "/shop/product-details/" + product.title + "/" + product.id
                  }
                >
                  <ProductCard {...product} />
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UserFeaturedContainer;
