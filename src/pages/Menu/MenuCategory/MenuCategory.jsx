

import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";
import Container from "../../../components/Container/Container";

const MenuCategory = ({ items, title, img }) => {


  return (
    <div>
      {title && (
        <Cover img={img} title={title} subTitle="Would you like to try this dish?" />
      )}
    

     <Container>
     <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 py-5">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
     </Container>
      <Link to={`/order/${title}`}>
        <div className="card-actions justify-center px-3 py-3">
          <button className="addBtn uppercase">
            <span className="font-bold">Order Your Favorite Food</span>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
