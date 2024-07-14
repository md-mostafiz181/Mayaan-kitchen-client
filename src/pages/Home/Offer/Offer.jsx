import React from "react";
import "./Offer.css";
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import offered from "../../../assets/offered.jpg";

const Offer = () => {
  return (
    <div id="offered-part">
      <Container>
        <SectionTitle subHeading={"hot deals"} heading={"What's we offered"} />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-5">
          <div className="md:col-span-3 bg-[#dc3545] p-3">
            <h1 className="font-bold primaryFont text-white text-2xl mt-5">FIND FOOD LOUNGE</h1>
            <p className="text-white mt-16 primaryFont">
              25BS, Split Avenue 5896 Frankfurt <br /> 696 148 869 36 <br />
              booking@webexample.com
            </p>

            <p className="font-normal text-xl text-white mt-7">
                        Mon - Thu: 10 AM - 02 AM <br />
                        Fri - Sun: 10 AM - 02 AM
            </p>
          </div>
          <div className="img-box md:col-span-6 h-[400px]">
            <img src={offered} alt="" className="w-full   " />
          </div>
          <div className="md:col-span-3 bg-[#1a1a1a] p-3">
            <h1 className="font-bold primaryFont text-white text-2xl mt-5">CONTACT US NOW</h1>
            <p className="text-white mt-16 primaryFont">Sus nisi platea primis dignissim quam cras netus natoque vel senectus, quis fames praesent sapien...</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Offer;
