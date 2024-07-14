import React from "react";
import "./Latest.css";
import img1 from "../../../assets/latest1.jpg";
import img2 from "../../../assets/latest2.jpg";
import img3 from "../../../assets/latest3.jpg";
import img4 from "../../../assets/latest4.jpg";
import img5 from "../../../assets/latest5.jpg";
import img6 from "../../../assets/latest6.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Container from "../../../components/Container/Container";

const Latest = () => {
  return (
    <div id="Latest-part" >
      <Container>
        <div className="section-title">
          <section className="mt-4">
            <SectionTitle subHeading={"Blog"} heading={"Latest"}></SectionTitle>
          </section>
        </div>

        <div className="overlay"></div>

        <div className="latest-main grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5">
          <div className="latest-box1 w-full h-[400px] ">
            <img src={img1} alt="" />
            <div className="overlay">
              <h1 className="text-white secondaryFont lg:text-3xl sm:text-2xl mt-20 text-center">
                Pizza
              </h1>
              <p className="text-white text-center lg:text-2xl sm:text-xl font-bold primaryFont mt-7">
                Pizza is like a happiness,
                
              </p>

              <h5 className="text-white secondaryFont text-xl text-center uppercase tracking-widest mt-7">
                Mayaan Kitchen
              </h5>
            </div>
          </div>
          <div className="latest-box1 w-full h-[400px] ">
            <img src={img2} alt="" />
            <div className="overlay">
              <h1 className="text-white secondaryFont lg:text-3xl sm:text-2xl mt-20 text-center">
                Burger
              </h1>
              <p className="text-white text-center lg:text-2xl sm:text-xl font-bold primaryFont mt-7">
                Burger is like a happiness,
                
              </p>

              <h5 className="text-white secondaryFont text-xl text-center uppercase tracking-widest mt-7">
                Mayaan Kitchen
              </h5>
            </div>
          </div>
          <div className="latest-box1 w-full h-[400px] ">
            <img src={img3} alt="" />
            <div className="overlay">
              <h1 className="text-white secondaryFont lg:text-3xl sm:text-2xl mt-20 text-center">
                Pasta
              </h1>
              <p className="text-white text-center lg:text-2xl sm:text-xl font-bold primaryFont mt-7">
                Pasta is like a happiness,
                
              </p>

              <h5 className="text-white secondaryFont text-xl text-center uppercase tracking-widest mt-7">
                Mayaan Kitchen
              </h5>
            </div>
          </div>
          <div className="latest-box1 w-full h-[400px] ">
            <img src={img4} alt="" />
            <div className="overlay">
              <h1 className="text-white secondaryFont lg:text-3xl sm:text-2xl mt-20 text-center">
                Dessert
              </h1>
              <p className="text-white text-center lg:text-2xl sm:text-xl font-bold primaryFont mt-7">
                Dessert is like a  happiness, 
                
              </p>

              <h5 className="text-white secondaryFont text-xl text-center uppercase tracking-widest mt-7">
                Mayaan Kitchen
              </h5>
            </div>
          </div>
          <div className="latest-box1 w-full h-[400px] ">
            <img src={img5} alt="" />
            <div className="overlay">
              <h1 className="text-white secondaryFont lg:text-3xl sm:text-2xl mt-20 text-center">
                Grapes
              </h1>
              <p className="text-white text-center lg:text-2xl sm:text-xl font-bold primaryFont mt-7">
                 Grapes is like a happiness,
                
              </p>

              <h5 className="text-white secondaryFont text-xl text-center uppercase tracking-widest mt-7">
                Mayaan Kitchen
              </h5>
            </div>
          </div>
          <div className="latest-box1 w-full h-[400px] ">
            <img src={img6} alt="" />
            <div className="overlay">
              <h1 className="text-white secondaryFont lg:text-3xl sm:text-2xl mt-20 text-center">
                Snacks
              </h1>
              <p className="text-white text-center lg:text-2xl sm:text-xl font-bold primaryFont mt-7">
                 Snacks is like a happiness.
                
              </p>

              <h5 className="text-white secondaryFont text-xl text-center uppercase tracking-widest mt-7">
                Mayaan Kitchen
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Latest;


// import React from "react";
// import { Parallax } from "react-parallax";
// import "./Latest.css";
// import img1 from "../../../assets/latest1.jpg";
// import img2 from "../../../assets/latest2.jpg";
// import img3 from "../../../assets/latest3.jpg";
// import img4 from "../../../assets/latest4.jpg";
// import img5 from "../../../assets/latest5.jpg";
// import img6 from "../../../assets/latest6.jpg";
// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import Container from "../../../components/Container/Container";

// const Latest = () => {
//   return (
//     <div id="Latest-part" className="bg-fixed">
//       <Container>
//         <div className="section-title">
//           <section className="mt-4">
//             <SectionTitle subHeading={"Blog"} heading={"Latest"}></SectionTitle>
//           </section>
//         </div>

//         <div className="latest-main grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5">
//           {[img1, img2, img3, img4, img5, img6].map((img, index) => (
//             <Parallax bgImage={img} strength={500} key={index}>
//               <div className="latest-box1 w-full h-[400px] border relative">
//                 <div className="overlay"></div>
//                 <div className="content absolute inset-0 flex flex-col justify-center items-center text-white">
//                   <h1 className="secondaryFont lg:text-3xl sm:text-2xl mt-20 text-center">
//                     {["Pizza", "Burger", "Pasta", "Dessert", "Grapes", "Snacks"][index]}
//                   </h1>
//                   <p className="text-center lg:text-2xl sm:text-xl font-bold primaryFont mt-7">
//                     Delicious {["pizza", "burger", "pasta", "dessert", "grapes", "snacks"][index]} is like a slice of happiness, with each bite
//                   </p>
//                   <h5 className="secondaryFont text-xl text-center uppercase tracking-widest mt-7">
//                     Mayaan Kitchen
//                   </h5>
//                 </div>
//               </div>
//             </Parallax>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Latest;

