import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

export default function Slider() {
  const swiperRef = useRef(null);
  const progressRef = useRef(null);
  const [showPointer, setShowPointer] = useState(true); // Control pointer visibility

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    const updateProgress = () => {
      const totalSlides = swiper.slides.length - swiper.loopedSlides * 2;
      let currentIndex = swiper.realIndex;
      const progress = (currentIndex / (totalSlides - 1)) * 100;

      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }
      if (showPointer && progressRef.current && pointerRef.current) {
        pointerRef.current.style.left = `calc(${progress}% - 6px)`;
      }
    };

    swiper.on("slideChange", updateProgress);
    updateProgress();

    return () => {
      swiper.off("slideChange", updateProgress);
    };
  }, [showPointer]); // Re-run effect if showPointer changes

  const pointerRef = useRef(null);

  return (
    <>
      <div className="mx-auto w-full max-w-6xl relative p-2 md:p-2">
        <Swiper
          ref={swiperRef}
          slidesPerView={2} // Default to 1 for small devices
          spaceBetween={10} // Reduced space for small devices
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "progressbar",
            el: ".custom-progressbar",
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 768px (md breakpoint)
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 1280px (xl breakpoint - assuming large)
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
          <SwiperSlide>
            <img src="/assets/Kabuli-August-LR-47-scaled.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/Kabuli-August-LR-68-scaled.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/Kabuli-August-LR-33-1-scaled-qtyil0trltsd9ufxmfkiqbru0mmxdowku7beos2t08.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>

        <div className="custom-progressbar mt-2"> {/* Added mt-2 for spacing */}
          <div
            className="swiper-pagination-progressbar-fill"
            ref={progressRef}
          ></div>
          {showPointer && (
            <div className="progress-pointer" ref={pointerRef}></div>
          )}
        </div>
      </div>

      <div className="mt-4 text-black py-2 p-2 mb-4 text-sm font-medium max-w-md mx-auto text-left md:max-w-2xl md:text-base md:p-3 md:py-3 md:mb-5">
        <p>
          Located in the lively Moseley village, Kabuli offers a modern yet
          welcoming atmosphere where the focus is always on the food. Each dish
          is a celebration of Afghanistan’s heritage, with flavors as rare and
          special as the snow leopard, our country’s national symbol. Join us
          and discover the true essence of Afghan cuisine—where every bite takes
          you on a journey home.
        </p>
      </div>
    </>
  );
}