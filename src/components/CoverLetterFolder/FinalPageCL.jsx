import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const FinalPageCL = () => {
  const swiperRef = useRef(null);

  const [popupImage, setPopupImage] = useState(null);

  const openPopup = (img, url) => {
    setPopupImage(img);
    setPopupBtn(url);
  };

  const closePopup = () => {
    setPopupImage(null);
    setPopupBtn(null);
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const coverLetter = [
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_1.png",
      url: "/cover_letter_templates/steps/cover_letter_001",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_2.png",
      url: "/cover_letter_templates/steps/cover_letter_002",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_3.png",
      url: "/cover_letter_templates/steps/cover_letter_003",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_4.png",
      url: "/cover_letter_templates/steps/cover_letter_004",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_5.png",
      url: "/cover_letter_templates/steps/cover_letter_005",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_6.png",
      url: "/cover_letter_templates/steps/cover_letter_006",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_7.png",
      url: "/cover_letter_templates/steps/cover_letter_007",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_8.png",
      url: "/cover_letter_templates/steps/cover_letter_008",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_9.png",
      url: "/cover_letter_templates/steps/cover_letter_009",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_10.png",
      url: "/cover_letter_templates/steps/cover_letter_010",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_11.png",
      url: "/cover_letter_templates/steps/cover_letter_011",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_12.png",
      url: "/cover_letter_templates/steps/cover_letter_012",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_13.png",
      url: "/cover_letter_templates/steps/cover_letter_013",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_14.png",
      url: "/cover_letter_templates/steps/cover_letter_014",
    },
    {
      img: "/ResumesTempImg/ExpAndFresher/HighImg/RESUME_ExpAndFresher_15.png",
      url: "/cover_letter_templates/steps/cover_letter_015",
    },
  ];

  return (
    <>
      <section className="w-full max-w-[1440px] mx-auto bg-amber-400 flex flex-col md:flex-row">
        {/* Left Section - Cover Letter Display */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 bg-[#E8ECF5] border border-[#D3D9DE]">
          <img
            src="/img/demoCL.png"
            alt="Cover Letter"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Section - Actions Buttons */}
        <div className="w-full md:w-1/2 flex flex-col gap-10 bg-white p-4 sm:p-6">
          {/* Select Templates */}
          <div className="flex flex-col gap-5 border border-[#D3D9DE] bg-[#FDFDFE] p-4 sm:p-5 rounded-[30px]">
            {/* Header */}
            <div className="flex items-center justify-between gap-4">
              <h1 className="font-lexend font-semibold text-xl sm:text-2xl md:text-3xl text-[#212529]">
                Change Templates
              </h1>
              <div className="flex gap-4">
                <button className="cursor-pointer" onClick={handlePrev}>
                  <img
                    src="/Icons/LeftArrow.svg"
                    alt="Left Arrow"
                    className="w-6 h-6"
                  />
                </button>
                <button className="cursor-pointer" onClick={handleNext}>
                  <img
                    src="/Icons/RightArrow.svg"
                    alt="Right Arrow"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>

            {/* Carousel */}
            <div className="w-full">
              <Swiper
                ref={swiperRef}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                  840: { slidesPerView: 2, spaceBetween: 15 },
                  1024: { slidesPerView: 3, spaceBetween: 20 },
                }}
                modules={[Navigation]}
                className="w-full"
              >
                {coverLetter.map((resume, index) => (
                  <SwiperSlide key={index}>
                    <div
                      className="group h-64 sm:h-72 overflow-hidden relative hover:scale-95 transition duration-300 ease-in-out cursor-pointer border border-[#dcdcdc] rounded-[10px]"
                      onClick={() => openPopup(resume.img, resume.url)}
                    >
                      <img
                        src={resume.img}
                        className="w-full  object-cover"
                        alt={`Resume ${index + 1}`}
                      />
                      <div className="absolute inset-0 transition duration-300 ease-in-out group-hover:bg-[rgba(0,0,0,0.27)] rounded-[5px]"></div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleUrlForBtn(resume.url);
                        }}
                        className="absolute bottom-3 left-3 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-blue-600 transition opacity-0 group-hover:opacity-100 z-10"
                      >
                        Select This Template
                      </button>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                        <img
                          src="/Icons/zoom.svg"
                          className="w-8 sm:w-10"
                          alt="Zoom Icon"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="">
            <div className="w-full px-[25px] py-[20px] bg-[#E3F6FF] border border-[#74D4FF] flex justify-between rounded-[20px]">
              <div className="flex gap-[12px]">
                <div className="p-[9.6px] rounded-[12px] bg-white">PDF</div>
                <div className="p-[9.6px] rounded-[12px] bg-white">DOCX</div>
              </div>
              <div className="px-[24px] py-[9.6px] rounded-[12px] border border-blue-700">
                Download
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={closePopup}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 bg-red-500 text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-red-600 transition-transform duration-300 hover:rotate-90 shadow-lg cursor-pointer"
              onClick={closePopup}
            >
              ✕
            </button>

            {/* Image Container */}
            <div className="max-h-[75vh] overflow-y-auto custom-scrollbar p-4">
              <img
                src={popupImage}
                alt="Expanded Resume"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Select Button */}
            <div className="p-4 sm:p-6 text-center bg-gray-50">
              <button
                className="bg-blue-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl text-base sm:text-lg font-semibold shadow-md hover:bg-blue-600 transition-all duration-300 hover:shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  handleUrlForBtn(popupBtn);
                }}
              >
                Select This Template
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FinalPageCL;
