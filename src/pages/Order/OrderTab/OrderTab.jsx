import React from "react";
import OrderFoodCard from "../../../components/OrderFoodCard/OrderFoodCard";

const OrderTab = ({items}) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 px-1">
      {items.map((item) => (
        <OrderFoodCard key={item._id} item={item}></OrderFoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
