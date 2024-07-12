
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img1 from "../../../assets/dessert.jpg";
import img2 from "../../../assets/drinks.jpg";
import img3 from "../../../assets/pizza.jpg";
import img4 from "../../../assets/salad.jpg";
import img5 from "../../../assets/soup.jpg";
import Container from "../../../components/Container/Container";
import "./Order.css";

const Order = () => {
  return (
    <div id="order-part">
      

      <div>
        <Container>

        <section className="mb-4">
        <SectionTitle
          subHeading={"From 11 a.m to 10 p.m"}
          heading={"Order Online"}
        ></SectionTitle>
      </section>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
                // when window width is >= 330px and <= 640px
                330: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                // when window width is >= 1024px
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                // when window width is >= 1280px
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="img-box h-[400px] bg-orange-400">
                <img src={img1} alt="" />
                <div className="overlay">
                  <div className="overlayText">
                    <h1 className="text-4xl text-white secondaryFont">Dessert</h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-box h-[400px] bg-orange-400">
                <img src={img2} alt="" />
                <div className="overlay">
                  <div className="overlayText">
                    <h1 className="text-4xl text-white secondaryFont">Drinks</h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-box h-[400px] bg-orange-400">
                <img src={img3} alt="" />
                <div className="overlay">
                  <div className="overlayText">
                    <h1 className="text-4xl text-white secondaryFont">Pizza</h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-box h-[400px] bg-orange-400">
                <img src={img4} alt="" />
                <div className="overlay">
                  <div className="overlayText">
                    <h1 className="text-4xl text-white secondaryFont">Salad</h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="img-box h-[400px] bg-orange-400">
                <img src={img5} alt="" />
                <div className="overlay">
                  <div className="overlayText">
                    <h1 className="text-4xl text-white secondaryFont">Soup</h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    </div>
  );
};

export default Order;


