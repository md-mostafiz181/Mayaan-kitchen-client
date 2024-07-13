import React from "react";
import "./Quality.css";
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import quality1 from "../../../assets/quality1.jpg";
import quality2 from "../../../assets/quality2.jpg";
import quality3 from "../../../assets/quality3.jpg";
import quality4 from "../../../assets/quality4.jpg";
import quality5 from "../../../assets/quality5.jpg";
import quality6 from "../../../assets/quality6.jpg";
import { FaPlus } from "react-icons/fa";

const Quality = () => {
  return (
    <div id="quality-part">
      <Container>
        <div className="overlay">
          <div className="section-title mt-5">
            <section>
              <SectionTitle
                subHeading="why choose us"
                heading="Best Quality"
              ></SectionTitle>
            </section>
          </div>
        </div>

        <div className="quality-main grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
          <div className="quality-box w-full h-[400px] ">
            <img src={quality1} alt="" />
            <div className="overlay">
              <div className="quality-text flex">
                <h1 className="text-white text-3xl font-normal secondaryFont ">
                  Best Food +
                </h1>

                
              </div>
            </div>
          </div>
          <div className="quality-box w-full h-[400px] ">
            <img src={quality2} alt="" />
            <div className="overlay">
              <div className="quality-text flex">
                <h1 className="text-white text-3xl font-normal secondaryFont ">
                  Best Food +
                </h1>

                
              </div>
            </div>
          </div>
          <div className="quality-box w-full h-[400px] ">
            <img src={quality3} alt="" />
            <div className="overlay">
              <div className="quality-text flex">
                <h1 className="text-white text-3xl font-normal secondaryFont ">
                  Best Food +
                </h1>

                
              </div>
            </div>
          </div>
          <div className="quality-box w-full h-[400px]">
            <img src={quality4} alt="" />
            <div className="overlay">
              <div className="quality-text flex">
                <h1 className="text-white text-3xl font-normal secondaryFont ">
                  Best Food +
                </h1>

                
              </div>
            </div>
          </div>
          <div className="quality-box w-full h-[400px] ">
            <img src={quality5} alt="" />
            <div className="overlay">
              <div className="quality-text flex">
                <h1 className="text-white text-3xl font-normal secondaryFont ">
                  Best Food +
                </h1>

                
              </div>
            </div>
          </div>
          <div className="quality-box w-full h-[400px] ">
            <img src={quality6} alt="" />
            <div className="overlay">
              <div className="quality-text flex">
                <h1 className="text-white text-3xl font-normal secondaryFont ">
                  Best Food +
                </h1>

                
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Quality;
