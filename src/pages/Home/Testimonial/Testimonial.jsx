import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import { Swiper, SwiperSlide } from 'swiper/react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Testimonial = () => {

    const [review,setReview]=useState([])

    console.log(review)
    useEffect(()=>{
        fetch("reviews.json")
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
  return (
    <div id="testimonial-part">
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
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        
        <div >
            {
                review.map(review=> <SwiperSlide
                key={review._id}
                >
                    <div className="testimonial-main w-full h-[300px] bg-orange-400 rounded-lg text-white p-5">
                        <div className="extra-box"></div>
                        <div className="image-box ">
                            <img src={review.image} alt="" />
                        </div>
                        <p className="primaryFont text-2xl font-bold text-center mt-3">{review.name}</p>
                        <p className="secondaryFont text-xl font-bold text-center mt-2 ">{review.designation}</p>
                        <p className="px-3 text-center">{review.details}</p>
                    </div>
                </SwiperSlide>)
            }
        </div>
      </Swiper>
      </div>



    </div>
  );
};

export default Testimonial;


