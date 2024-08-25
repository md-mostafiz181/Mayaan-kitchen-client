import React from "react";
import "./OrderFoodCard.css";

const OrderFoodCard = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
    <div className="card  shadow-sm mt-10 hover:shadow-lg border">
      <div className="card-box">
        <img src={image} alt="product Img" className="" />
      </div>

      <div className="card-body">
        <h2 className="card-title primaryFont text-orange-400 font-bold">
          {name}
        </h2>
        <p className="text-normal primaryFont">{recipe}</p>
        <p className="font-bold  text-orange-400 text-xl"> Price: ${price}</p>
        <div className="card-actions justify-center">
          <button class="custom-btn1 btn-3 uppercase ">
            <span className="font-bold">add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderFoodCard;
