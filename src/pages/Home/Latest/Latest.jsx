import React from "react";
import "./Latest.css";
import img1 from "../../../assets/latest1.jpg";
import img2 from "../../../assets/latest2.jpg";
import img3 from "../../../assets/latest3.jpg";
import img4 from "../../../assets/latest4.jpg";
import img5 from "../../../assets/latest5.jpg";
import img6 from "../../../assets/latest6.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Latest = () => {
  return (
    <div id="Latest-part">
      <div className="overlay">
        <section className="mt-4">
          <SectionTitle subHeading={"Blog"} heading={"Latest"}></SectionTitle>
        </section>
      </div>
    </div>
  );
};

export default Latest;
