import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { BsCircleFill } from "react-icons/bs";

export default function Slider() {
  const swiperRef = useRef(null);
  const progressRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    const updateProgress = () => {
      const totalSlides = swiper.slides.length - swiper.loopedSlides * 2;
      const progress = (swiper.realIndex / (totalSlides - 1)) * 100;

      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }

      if (dotRef.current) {
        dotRef.current.style.left = `${progress}%`;
      }
    };

    const initializeProgress = () => {
      const totalSlides = swiper.slides.length - swiper.loopedSlides * 2;
      if (progressRef.current && dotRef.current && totalSlides > 0) {
        progressRef.current.style.width = `0%`;
        dotRef.current.style.left = `0%`;
      }
    };

    initializeProgress();

    setTimeout(() => {
      swiper.on("slideChange", updateProgress);
      updateProgress();
    }, 100);

    return () => {
      swiper.off("slideChange", updateProgress);
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl relative p-2 mt-5">
      <Swiper
        ref={swiperRef}
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ type: "progressbar", el: ".custom-progressbar" }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <img src="/assets/Kabuli-August-LR-15-scaled.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/Kabuli-August-LR-16-scaled.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/Kabuli-August-LR-23-scaled.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/Kabuli-August-LR-27-scaled.jpg" alt="" />
        </SwiperSlide>
      </Swiper>

      {/* Progress Bar with Dot */}
      <div className="custom-progressbar relative mt-4">
        <div
          className="swiper-pagination-progressbar-fill "
          ref={progressRef}
        ></div>
        <div className="progress-dot" ref={dotRef}>
          <BsCircleFill size={16} color="red" />
        </div>
      </div>
    </div>
  );
}



