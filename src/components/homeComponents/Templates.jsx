import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Templates = () => {
  const swiperRef = useRef(null); // Create a reference to the Swiper instance

  // Handler for the left button (prev)
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Handler for the right button (next)
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <>
      <section className="relative max-w-[1440px] min-w-auto mx-auto bg-[#F0F9FF]  flex flex-col gap-[40px] justify-center items-center pt-[80px] px-[50px]">
        <div className="flex flex-col gap-[20px] items-center">
          <p className="font-lexend font-semibold text-[30px]">
            <span className="purpleGradient"> HR - Approved </span>
            ATS Resume Format Features
          </p>
          <p className="font-manrope text-[16px] text-[#151515] font-normal max-w-[500px] text-center">
            These resume templates are proven to work. They have been tested and
            approved by real hiring managers.
          </p>
        </div>
      </section>

      <div className="relative">
        <Swiper
          loop={true}
          spaceBetween={0}
          grabCursor={true}
          centeredSlides="auto"
          ref={swiperRef}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper bg-[#F0F9FF] border-b border-[#B8E6FE]"
        >
          <SwiperSlide>
            <div className="w-[fit] max-w-[auto] mx-auto scale-75 ">
              <img
               loading="lazy"
                src="/img/resume.avif"
                alt="book-1"
                className="rounded-xl  "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[fit] max-w-[auto] mx-auto scale-75">
              <img
              loading="lazy"
                src="/img/resume2.avif"
                alt="book-2"
                className="rounded-xl  "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[fit] max-w-[auto] mx-auto scale-75">
              <img
              loading="lazy"
                src="/img/resume3.avif"
                alt="book-1"
                className="rounded-xl  "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[fit] max-w-[auto] mx-auto scale-75">
              <img
              loading="lazy"
                src="/img/resume4.avif"
                alt="book-2"
                className="rounded-xl  "
              />
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Left Button (previous) */}
        <button
          title="Previous"
          onClick={handlePrev}
          className="absolute top-1/2 left-4 md:left-12 lg:left-[100px] -translate-y-1/2 z-40 group flex justify-center items-center bg-gradient-to-t from-[#336EE7] to-[#4C95FB] hover:scale-90 w-11 h-11 transition-all duration-200 rounded-full"
        >
          <svg
            className="h-6 w-6 text-white group-hover:text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Right Button (next) */}
        <button
          title="Next"
          onClick={handleNext}
          className="absolute top-1/2 right-4 md:right-12 lg:right-[100px] -translate-y-1/2 z-40 group flex justify-center items-center w-11 h-11 transition-all duration-500 rounded-full bg-gradient-to-t from-[#336EE7] to-[#4C95FB] hover:scale-90"
        >
          <svg
            className="h-6 w-6 text-white group-hover:text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* select btn */}

        <p className="px-[20px] py-[10px] text-white font-semibold rounded-lg bg-gradient-to-t from-[#336EE7] to-[#4C95FB] cursor-pointer absolute bottom-[100px] left-1/2 transform -translate-x-1/2 z-40 hover:scale-110 transition-all text-xl text-nowrap">
          Use This Template
        </p>
      </div>
    </>
  );
};

export default Templates;
