import React from "react";
import "./ChefMenu.css";
import Container from "../../../components/Container/Container";

const ChefMenu = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div>
      <Container>
        <div className="card h-[550px] w-full shadow-sm mt-10 hover:shadow-lg border">
          
            <div className="card-box">
            <img
              src={image}
              alt="product Img"
              className="w-full "
             
            />
            </div>
         
          <div className="card-body">
            <h2 className="card-title primaryFont text-orange-400 font-bold">{name}</h2>
            <p className="text-normal primaryFont">{recipe}</p>
            <p className="font-bold  text-orange-400 text-xl">${price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChefMenu;
