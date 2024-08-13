import React, { useEffect, useState } from "react";
import "./PopularMenu.css";
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {

  const [menu]=useMenu()
  const popular=menu.filter(item=> item.category === "popular")
  return (
    <div id="popularMenu">
      <Container>
        <section className="mt-5">
          <SectionTitle
            subHeading="check it out"
            heading="From our Menu"
          ></SectionTitle>
        </section>


        <div className="div grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
            {
                popular.map(item=> <MenuItem
                key={item._id}
                item={item}
                ></MenuItem> )
            }
        </div>
      </Container>
    </div>
  );
};

export default PopularMenu;
