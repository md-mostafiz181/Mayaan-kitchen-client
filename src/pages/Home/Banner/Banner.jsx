import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Banner.css";
import Container from "../../../components/Container/Container";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Banner = () => {
  return (
    <div id="banner-part">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="banner1">
          <div className="overlay">
            <Container>
              <div className="banner-text mt-[340px]">
                <h1 className="lg:text-5xl sm:tex-3xl  font-bold uppercase text-orange-400 secondaryFont text-center">
                  Welcome To Mayaan Kitchen
                </h1>
                <h1 className="lg:text-5xl sm:tex-3xl  font-bold uppercase   text-white primaryFont mt-4 text-center">
                  Fast Food
                </h1>

                <h3 className="lg:text-3xl sm:text-2xl font-bold capitalize text-orange-400 mt-5 secondaryFont text-center">
                  Special Menu
                </h3>
                <p className="capitalize  lg:text-[20px] sm:text-[10px] font-normal   primaryFont mt-4 px-10 text-white text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  minus a quam numquam, nihil voluptas odio nulla at eligendi
                  aperiam.Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Odit minus a quam numquam, nihil voluptas odio nulla at
                  eligendi aperiam.
                </p>

                <div className="banner-icon flex justify-center  mt-5">
                  <div className="youtube w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    {" "}
                    <FaYoutube className="text-white icon"></FaYoutube>{" "}
                  </div>
                  <div className="twitter w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaTwitter className="text-white icon"></FaTwitter>
                  </div>
                  <div className="facebook w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaFacebook className="text-white icon"></FaFacebook>
                  </div>
                  <div className="instagram w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaInstagram className="text-white icon"></FaInstagram>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center mt-5">
                <div className="banner-button ">
                  <button className="primaryFont font-normal uppercase ">
                    Order Now
                  </button>
                </div>
                <div className="banner-button ms-5">
                  <button className="primaryFont font-normal uppercase ">
                    Learn More
                  </button>
                </div>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner2 overlay">
          <div className="overlay">
            <Container>
              <div className="banner-text mt-[340px]">
                <h1 className="lg:text-5xl sm:tex-3xl  font-bold uppercase text-orange-400 secondaryFont text-center">
                  Welcome To Mayaan Kitchen
                </h1>
                <h1 className="lg:text-5xl sm:tex-3xl  font-bold uppercase   text-white primaryFont mt-4 text-center">
                  Fast Food
                </h1>

                <h3 className="lg:text-3xl sm:text-2xl font-bold capitalize text-orange-400 mt-5 secondaryFont text-center">
                  Special Menu
                </h3>
                <p className="capitalize  lg:text-[20px] sm:text-[10px] font-normal   primaryFont mt-4 px-10 text-white text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  minus a quam numquam, nihil voluptas odio nulla at eligendi
                  aperiam.Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Odit minus a quam numquam, nihil voluptas odio nulla at
                  eligendi aperiam.
                </p>

                <div className="banner-icon flex justify-center  mt-5">
                  <div className="youtube w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    {" "}
                    <FaYoutube className="text-white icon"></FaYoutube>{" "}
                  </div>
                  <div className="twitter w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaTwitter className="text-white icon"></FaTwitter>
                  </div>
                  <div className="facebook w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaFacebook className="text-white icon"></FaFacebook>
                  </div>
                  <div className="instagram w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaInstagram className="text-white icon"></FaInstagram>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center mt-5">
                <div className="banner-button ">
                  <button className="primaryFont font-normal uppercase ">
                    Order Now
                  </button>
                </div>
                <div className="banner-button ms-5">
                  <button className="primaryFont font-normal uppercase ">
                    Learn More
                  </button>
                </div>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner3 overlay">
          <div className="overlay">
            <Container>
              <div className="banner-text mt-[340px]">
                <h1 className="lg:text-5xl sm:tex-3xl  font-bold uppercase text-orange-400 secondaryFont text-center">
                  Welcome To Mayaan Kitchen
                </h1>
                <h1 className="lg:text-5xl sm:tex-3xl  font-bold uppercase   text-white primaryFont mt-4 text-center">
                  Fast Food
                </h1>

                <h3 className="lg:text-3xl sm:text-2xl font-bold capitalize text-orange-400 mt-5 secondaryFont text-center">
                  Special Menu
                </h3>
                <p className="capitalize  lg:text-[20px] sm:text-[10px] font-normal   primaryFont mt-4 px-10 text-white text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  minus a quam numquam, nihil voluptas odio nulla at eligendi
                  aperiam.Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Odit minus a quam numquam, nihil voluptas odio nulla at
                  eligendi aperiam.
                </p>

                <div className="banner-icon flex justify-center  mt-5">
                  <div className="youtube w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    {" "}
                    <FaYoutube className="text-white icon"></FaYoutube>{" "}
                  </div>
                  <div className="twitter w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaTwitter className="text-white icon"></FaTwitter>
                  </div>
                  <div className="facebook w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaFacebook className="text-white icon"></FaFacebook>
                  </div>
                  <div className="instagram w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaInstagram className="text-white icon"></FaInstagram>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center mt-5">
                <div className="banner-button ">
                  <button className="primaryFont font-normal uppercase ">
                    Order Now
                  </button>
                </div>
                <div className="banner-button ms-5">
                  <button className="primaryFont font-normal uppercase ">
                    Learn More
                  </button>
                </div>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner4 overlay">
          <div className="overlay">
            <Container>
              <div className="banner-text mt-[340px]">
                <h1 className="lg:text-5xl sm:tex-3xl  font-bold uppercase text-orange-400 secondaryFont text-center">
                  Welcome To Mayaan Kitchen
                </h1>
                <h1 className="lg:text-5xl sm:tex-3xl  font-bold uppercase   text-white primaryFont mt-4 text-center">
                  Fast Food
                </h1>

                <h3 className="lg:text-3xl sm:text-2xl font-bold capitalize text-orange-400 mt-5 secondaryFont text-center">
                  Special Menu
                </h3>
                <p className="capitalize  lg:text-[20px] sm:text-[10px] font-normal   primaryFont mt-4 px-10 text-white text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  minus a quam numquam, nihil voluptas odio nulla at eligendi
                  aperiam.Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Odit minus a quam numquam, nihil voluptas odio nulla at
                  eligendi aperiam.
                </p>

                <div className="banner-icon flex justify-center  mt-5">
                  <div className="youtube w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    {" "}
                    <FaYoutube className="text-white icon"></FaYoutube>{" "}
                  </div>
                  <div className="twitter w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaTwitter className="text-white icon"></FaTwitter>
                  </div>
                  <div className="facebook w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaFacebook className="text-white icon"></FaFacebook>
                  </div>
                  <div className="instagram w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaInstagram className="text-white icon"></FaInstagram>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center mt-5">
                <div className="banner-button ">
                  <button className="primaryFont font-normal uppercase ">
                    Order Now
                  </button>
                </div>
                <div className="banner-button ms-5">
                  <button className="primaryFont font-normal uppercase ">
                    Learn More
                  </button>
                </div>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner5 overlay">
          <div className="overlay">
            <Container>
              <div className="banner-text mt-[340px]">
                <h1 className="lg:text-5xl sm:tex-3xl  font-bold uppercase text-orange-400 secondaryFont text-center">
                  Welcome To Mayaan Kitchen
                </h1>
                <h1 className="lg:text-5xl sm:tex-3xl  font-bold uppercase   text-white primaryFont mt-4 text-center">
                  Fast Food
                </h1>

                <h3 className="lg:text-3xl sm:text-2xl font-bold capitalize text-orange-400 mt-5 secondaryFont text-center">
                  Special Menu
                </h3>
                <p className="capitalize  lg:text-[20px] sm:text-[10px] font-normal   primaryFont mt-4 px-10 text-white text-center">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  minus a quam numquam, nihil voluptas odio nulla at eligendi
                  aperiam.Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Odit minus a quam numquam, nihil voluptas odio nulla at
                  eligendi aperiam.
                </p>

                <div className="banner-icon flex justify-center  mt-5">
                  <div className="youtube w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    {" "}
                    <FaYoutube className="text-white icon"></FaYoutube>{" "}
                  </div>
                  <div className="twitter w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaTwitter className="text-white icon"></FaTwitter>
                  </div>
                  <div className="facebook w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaFacebook className="text-white icon"></FaFacebook>
                  </div>
                  <div className="instagram w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaInstagram className="text-white icon"></FaInstagram>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center mt-5">
                <div className="banner-button ">
                  <button className="primaryFont font-normal uppercase ">
                    Order Now
                  </button>
                </div>
                <div className="banner-button ms-5">
                  <button className="primaryFont font-normal uppercase ">
                    Learn More
                  </button>
                </div>
              </div>
            </Container>
          </div>
        </SwiperSlide>
        <SwiperSlide className="banner6 overlay">
          <div className="overlay">
            <Container>
              <div className="banner-text mt-[340px]">
                <h1 className="lg:text-5xl sm:tex-3xl  font-bold uppercase text-orange-400 secondaryFont text-center">
                  Welcome To Mayaan Kitchen
                </h1>
                <h1 className="lg:text-5xl sm:tex-3xl  font-bold uppercase   text-white primaryFont mt-4 text-center">
                  Fast Food
                </h1>

                <h3 className="lg:text-3xl sm:text-2xl font-bold capitalize text-orange-400 mt-5 secondaryFont text-center">
                  Special Menu
                </h3>
                
                  <p className="capitalize lg:text-[20px]  font-normal   primaryFont mt-4 px-10 text-white text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Odit minus a quam numquam, nihil voluptas odio nulla at
                    
                  </p>
             

                <div className="banner-icon flex justify-center  mt-5">
                  <div className="youtube w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    {" "}
                    <FaYoutube className="text-white icon"></FaYoutube>{" "}
                  </div>
                  <div className="twitter w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaTwitter className="text-white icon"></FaTwitter>
                  </div>
                  <div className="facebook w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaFacebook className="text-white icon"></FaFacebook>
                  </div>
                  <div className="instagram w-[40px] h-[40px] flex justify-center items-center bg-orange-500 rounded-full mr-2">
                    <FaInstagram className="text-white icon"></FaInstagram>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center mt-5">
                <div className="banner-button ">
                  <button className="primaryFont font-normal uppercase ">
                    Order Now
                  </button>
                </div>
                <div className="banner-button ms-5">
                  <button className="primaryFont font-normal uppercase ">
                    Learn More
                  </button>
                </div>
              </div>
            </Container>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
