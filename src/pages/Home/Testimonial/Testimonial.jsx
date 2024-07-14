import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import { Swiper, SwiperSlide } from 'swiper/react';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import Container from "../../../components/Container/Container";

const Testimonial = () => {
  const [review, setReview] = useState([]);

  console.log(review);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div id="testimonial-part">
      <Container>
      <section>
        <SectionTitle
          subHeading={"What's our client say"}
          heading={"testimonials"}
        ></SectionTitle>
      </section>

      <div className="mt-20">
        <Swiper
          cssMode={true}
          slidesPerView={2}
          spaceBetween={20}
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
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <div>
            {review.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="testimonial-main w-full h-[350px] bg-orange-400 rounded-lg text-white p-5">
                  
                  <div className="extra-box"></div>
                  <div className="image-box ">
                    <img src={review.image} alt="" />
                  </div>
                  <p className="primaryFont text-2xl font-bold text-center mt-3">
                    {review.name}
                  </p>
                  <p className="secondaryFont text-xl font-bold text-center mt-2 ">
                    {review.designation}
                  </p>
                  <p className="px-3 text-center">{review.details}</p>

                  <div className="flex justify-center mt-3">
                  <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                  </div>

                  
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      </Container>
    </div>
  );
};

export default Testimonial;
