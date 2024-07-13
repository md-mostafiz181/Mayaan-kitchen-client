import React from "react";
import "./Featured.css";
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured1 from "../../../assets/Featured1.jpg";
import featured2 from "../../../assets/Featured2.jpg";

const Featured = () => {
  return (
    <div id="featured-part">
      <div className="overlay"></div>
        
      

      <Container>
          <section className="mt-5">
            <SectionTitle
              subHeading={"check it out"}
              heading={"From our menu"}
            ></SectionTitle>
          </section>

          <div className="featured-main grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
            <div className="image mt-5">
              <div className="img1 border">
                <img className="w-full" src={featured1} alt="" />
              </div>
              <div className="img2"></div>
            </div>
            <div className="text mt-5">
              <h1 className="primaryFont text-white text-4xl font-bold">Where Flavor Meets Elegance</h1>
              <p className="secondaryFont text-white text-xl font-bold mt-5" >
                Experience The Pinnacle Of Healthy Food Dining With Our Award
                Winning Restaurant , Where Everyone Wants To Be For The Healthy
                Food And Mind-Blowing Grilling. We Typically Serve The Best And
                Most Delicious Food And Drinks Prepared With High Quality
                Ingredients That Are Maintained And Cooked By Our Own Expert
                Cheifs.
              </p>
            </div>
          </div>

          
        </Container>

    
    </div>
  );
};

export default Featured;
