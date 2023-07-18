import React, { useEffect, useState } from "react";
import { OrdersDataInterF } from "../../Interface/CartInterface";
import Utils from "../../utils/Utils";
import { UserInterF } from "../../Interface/UserInterface";
import ProductsAPIUtils from "../../utils/ProductsAPIUtils";

const ViewOrderPage: React.FC = () => {
  const [user, setUser] = useState<UserInterF>();
  const [ordersData, setOrdersData] = useState<OrdersDataInterF[]>([]);
  const loadOrdersData = async () => {
    const userId = user?._id as string;
    if (userId) {
      ProductsAPIUtils.loadOrdersData(userId).then((orders) => {
        setOrdersData(orders as OrdersDataInterF[]);
        console.log(orders);
      });
    }
  };
  const loadUser = async () => {
    const userData = await Utils.loadUser();
    if (userData) {
      setUser(userData as UserInterF);
    }
  };
  useEffect(() => {
    loadUser();
  }, []);
  useEffect(() => {
    if (user) {
      loadOrdersData();
    }
  }, [user]);
  return (
    <>
      <div className=" max-w-screen-lg mx-auto">
        <div className="p-5 mt-[50px]">
          <h1 className="large-thin-heading">Your Orders</h1>
          <hr />
          <div className="mt-5">
            {ordersData &&
              ordersData.map((order) => {
                return (
                  <div
                    key={order.orderDate}
                    className="p-5 border-2 my-2 rounded-md shadow-md"
                  >
                    <div className="md:flex md:flex-row gap-2">
                      {order.products.map((prod) => {
                        const imgUrl = prod.product.images[0] as any;
                        return (
                          <div
                            key={prod.product._id}
                            className="my-3 flex flex-row"
                          >
                            <img
                              src={imgUrl.path}
                              className="h-[100px] rounded-md w-[100px] object-cover"
                            />
                            <div className="mx-5">
                              <h1 className="text-xl">{prod.product.name}</h1>
                              <p>Price: ${prod.product.price}</p>
                              <p>Quantity: {prod.quantity}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <hr className="mb-2"></hr>
                    <div>
                      <p>
                        <span className="text-gray-500">Order Number: </span>
                        {order.orderNumber}
                      </p>
                      <p>
                        <span className="text-gray-500">Total Amount:</span> $
                        {order.totalAmount}
                      </p>
                      <p className="">
                        <span className="text-gray-500">Shipping: </span>
                        {order.status}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOrderPage;
