import React from "react";
import "./Order.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Order = () => {
  return (
    <div>
      <section>
        <SectionTitle
          subHeading={"From 11 a.m to 10 p.m"}
          heading={"Order Online"}
        ></SectionTitle>
      </section>
      <h1>this is order page</h1>
    </div>
  );
};

export default Order;
